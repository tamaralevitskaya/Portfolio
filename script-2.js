let text = "О СЕБЕ";
let i = 0;
let speed = 100;

function type() {
    if (i < text.length) {
        document.querySelector(".heading2").textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}

type();
