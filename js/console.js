const text = "starting OS...";
const output = document.getElementById("boot-text");

let index = 0;

function typeWriter() {
    if (index < text.length) {
        output.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 80);
    }
}

window.onload = () => {
    typeWriter();
};
