let text = "КОНТАКТЫ";
let i = 0;
let speed = 100;

function type() {
    if (i < text.length) {
        document.querySelector(".heading5").textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}

type();

