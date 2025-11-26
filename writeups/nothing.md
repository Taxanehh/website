# TUDCTF 2025 – Nothing App Writeup (27 solves)

reversing/Nothing App

Author: Paul Stokreef 

Category: reversing

Difficulty: Medium

---

## Introduction

The challenge description was short and a bit dramatic:

> Nonna was developing an Android app to protect the family recipes, but she never finished it - all it does is display an empty black screen, yet the code reveals it's attempting to transmit something encrypted to a hidden server... can you extract the secret before it's lost forever?

When I first opened the APK, I really did get a black screen. So I assumed either the app was broken or the challenge wanted me to reverse whatever was happening behind the scenes. Spoiler: it was the second one. Nothing in the UI mattered tho; everything interesting was happening in the code.

This writeup goes step-by-step, assuming you’ve never reversed an APK before. The goal: extract whatever “secret” Nonna was trying to send out.

---

## Step 1: Setting up the APK for Reversing

APK files are basically zip archives, so the first step is to unzip it:

`
unzip chall_k_01.apk -d unpacked
`

Inside, you’ll see files and folders like:

- `classes.dex`
- `classes2.dex`
- `AndroidManifest.xml`
- `/res`
- `/assets`

but most importantly:

- `/com`

The important one here is the `/com` folder, since it holds the MainActivity file.

To make sense of this, I opened the APK in **Jadx GUI**.  

You can get it here:  
https://github.com/skylot/jadx

Once loaded, I searched for anything that looked meaningful: “flag”, “encrypt”, “http”, “data”, etc.

Nothing obvious, so I dug deeper into the code structure.

---

## Step 2: Finding the Real Logic (MainActivity)

Almost all Android apps have an entry point called `MainActivity`, so that was the first file I checked.  
Here’s the relevant part the decompiler spit out, heavily cut for readability:

`java
Response responseExecute = new OkHttpClient()
    .newCall(
        new Request.Builder()
            .url("http://127.0.0.1:8080/")
            .header("Data", MainActivity.this.d(
                "eOi5A6XMZMJ0SZZUqFCJlhFYQIsaYVCF4og9qBWLgAXYgSgKaDpRy64oqpWhrh2w9MimKKhkaSQJwoEiImEAgIuuOLoEwoJ1",
                "hossy bossy says hello"
            ))
            .build()
    ).execute();
`

The app doesn’t show anything on screen. It just fires off a web request to localhost with a header called `"Data"`.

That header contains the result of the function:

`
d("base64-like string", "hossy bossy says hello")
`

This function `d()` is clearly the decryption routine. There’s no server at 127.0.0.1:8080 in this challenge — the important part is figuring out what the function returns.

If you can reproduce the logic of `d()`, you can extract the plaintext that Nonna meant to send.

---

## Step 3: Reverse Engineering the Decryption Function

Here’s the full function:

`java
private final String d(String o, String key) {
    int length = o.length() % 4;
    if (length == 2) {
        o = o + "==";
    } else if (length == 3) {
        o = o + "=";
    }
    int[] iArr = {95, 88, 68, 68, 78, 23, 85, 88, 68, 68, 78, 23, 68, 86, 78, 68, 23, 95, 82, 91, 91, 88};
    byte[] bArrDecode = Base64.decode(o, 0);
    byte[] bArr = new byte[22];
    for (int i = 0; i < 22; i++) {
        bArr[i] = (byte) (iArr[i] ^ 55);
    }
    byte[] bArr2 = new byte[bArrDecode.length];
    int length2 = bArrDecode.length;
    for (int i2 = 0; i2 < length2; i2++) {
        bArr2[i2] = (byte) (d$r(bArrDecode[i2] & 255, (i2 % 5) + 1) ^ (bArr[i2 % 22] & 255));
    }
    return new String(bArr2, Charsets.UTF_8);
}
`

Don't worry, I haven't magically coded this. Right in MainActivity is this function.

This thing does three operations:

1. Fix Base64 padding if needed
2. Base64-decode the ciphertext
3. XOR it with a repeating key that is itself derived by XORing integers with 55
4. Rotate each byte before XORing

The rotate happens here:

`java
private static final int d$r(int i, int i2) {
    return ((i << (8 - i2)) | (i >>> i2)) & 255;
}
`

This is a classic “rotate right then XOR with key” encoder.

So to recover the plaintext, I rewrote this logic in Python.

---

## Step 4: Rewriting the Decryption in Python

Below is a Python translation of the algorithm.  
It reproduces the exact behavior of the Kotlin function:

`python
import base64

def ror(byte, shift):
    return ((byte >> shift) | ((byte << (8 - shift)) & 0xFF)) & 0xFF

cipher_b64 = "eOi5A6XMZMJ0SZZUqFCJlhFYQIsaYVCF4og9qBWLgAXYgSgKaDpRy64oqpWhrh2w9MimKKhkaSQJwoEiImEAgIuuOLoEwoJ1"
iArr = [95, 88, 68, 68, 78, 23, 85, 88, 68, 68, 78, 23, 68, 86, 78, 68, 23, 95, 82, 91, 91, 88]

# Padding fix
missing = len(cipher_b64) % 4
if missing == 2:
    cipher_b64 += "=="
elif missing == 3:
    cipher_b64 += "="

cipher = base64.b64decode(cipher_b64)

# Key derivation
key = bytes([(x ^ 55) for x in iArr])

# Decrypt
pt = []
for i, b in enumerate(cipher):
    rotated = ror(b, (i % 5) + 1)
    pt.append(rotated ^ key[i % len(key)])

print(bytes(pt).decode())
`

Running it gives the plaintext immediately.

---

## Step 5: The Flag

The decrypted string is:

`
TUDCTF{74925fd58dca0a7b7d7653332b82dc4562f96e84e6f1ef52219ab10ed08f83e8}
`

This is the final flag.  
It makes sense: typical hex-based secret, wrapped in the TUDCTF format.

Even though the ciphertext started as Base64, the output was not Base64, it was already a UTF-8 string.

---

## Lessons Learned

This challenge is a gentle introduction to reversing Android apps. You don’t need dynamic analysis, emulators, or Frida. Everything important was:

1. Looking into the decompiled `MainActivity`
2. Finding the encryption/decryption logic
3. Translating the algorithm into Python
4. Running it manually

If you’re new to Android reversing, the key tools to learn are:

- Androidtools: https://github.com/mu71l473d/androidtools

- Jadx  https://github.com/skylot/jadx  

---

## Final Thoughts

This was a fun, clean reversing challenge: no obfuscation, no JNI, no hidden classes. Just Kotlin, Base64, and some light byte-twisting. The empty black screen was a nice misdirection. All the action was happening in code that only runs once.

If you’re completely new to Android reversing, this is a great entry point: you get to trace a real decryption routine without fighting the usual mountain of obfuscation or native libraries.

Flag:

`
TUDCTF{74925fd58dca0a7b7d7653332b82dc4562f96e84e6f1ef52219ab10ed08f83e8}
`

Good luck to everyone submitting their writeups.