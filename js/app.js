particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 700 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.3 },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 130,
            color: "#ffffff",
            opacity: 0.15,
            width: 1
        },
        move: { enable: true, speed: 1 }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "grab" }
        }
    }
});

// OPEN TERMINAL WINDOW
document.getElementById("open-terminal").addEventListener("click", function () {
    const terminal = document.getElementById("terminal-window");
    const body = document.getElementById("terminal-body");

    terminal.classList.remove("hidden");
    body.innerHTML = ""; // clear any previous content

    // STARTUP ANIMATION TEXT
    const bootLines = [
        "Initializing secure terminal...",
        "Loading system modules...",
        "Establishing session...",
        "Decrypting user profile...",
        "Boot sequence complete.",
        "",
        "Welcome, Paul Stokreef (Taxanehh)",
        "----------------------------------------",
        "",
        "Fetching certificates..."
    ];

    let index = 0;

    function typeNextLine() {
        if (index < bootLines.length) {
            body.innerHTML += bootLines[index] + "\n";
            index++;
            body.scrollTop = body.scrollHeight;
            setTimeout(typeNextLine, 250);
        } else {
            setTimeout(showCertificates, 600);
        }
    }

    typeNextLine();

    // CERTIFICATE LIST
    function showCertificates() {
        const certs = [
            "",
            "Certificates:",
            "",
            "- HTB: Certified Junior Cybersecurity Associate (CJCA)",
            "- HTB: Zephyr Certificate of Completion",
            "- HTB: Dante Certificate of Completion",
            "- HTB: P.O.O Certificate of Completion",
            "- HTB: Puppet Certificate of Completion",
            "- HTB: Certified Web Exploitation Specialist (CWES)",
            "",
            "- Experience with web exploitation, active directory, and penetration testing.",
            "",
            "End of list.",
            ""
        ];

        let ci = 0;

        function printCert() {
            if (ci < certs.length) {
                body.innerHTML += certs[ci] + "\n";
                body.scrollTop = body.scrollHeight;
                ci++;
                setTimeout(printCert, 200);
            }
        }

        printCert();
    }
});

// CLOSE TERMINAL WINDOW
document.getElementById("close-terminal").addEventListener("click", function () {
    const terminal = document.getElementById("terminal-window");
    terminal.classList.add("hidden");
});

function renderMarkdown(md) {
    return md
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/gim, '<em>$1</em>')
        .replace(/`([^`]+)`/gim, '<code>$1</code>')
        .replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>')
        .replace(/\n/gim, '<br>');
}

// Writeups window logic
const docsWindow = document.getElementById("docs-window");
const openDocs = document.getElementById("open-docs");
const closeDocs = document.getElementById("close-docs");
const docsContent = document.getElementById("docs-content");

openDocs.addEventListener("click", () => {
    docsWindow.classList.remove("hidden");
});

closeDocs.addEventListener("click", () => {
    docsWindow.classList.add("hidden");
});

// Sidebar click logic
const sidebarItems = document.querySelectorAll(".docs-sidebar li");

sidebarItems.forEach(item => {
    item.addEventListener("click", () => {
        const file = item.getAttribute("data-file");
        const link = item.getAttribute("data-link");

        // HTB links open new tab
        if (link) {
            window.open(link, "_blank");
            return;
        }

        // TUDCTF markdown files
        if (file) {
            docsContent.innerHTML = "<p>Loading...</p>";
            fetch("writeups/" + file)
                .then(res => res.text())
                .then(md => {
                    docsContent.innerHTML = renderMarkdown(md);
                })
                .catch(() => {
                    docsContent.innerHTML = "<p>Error loading file.</p>";
                });
        }
    });
});

// INFO WINDOW
const openInfo = document.getElementById("open-info");
const closeInfo = document.getElementById("close-info");
const infoWindow = document.getElementById("info-window");

openInfo.addEventListener("click", () => {
    infoWindow.classList.remove("hidden");
});

closeInfo.addEventListener("click", () => {
    infoWindow.classList.add("hidden");
});


