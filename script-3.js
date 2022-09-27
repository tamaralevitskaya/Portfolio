let text = "МОИ РАБОТЫ";
let i = 0;
let speed = 100;

function type() {
    if (i < text.length) {
        document.querySelector(".heading4").textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}

type();

const items = document.querySelectorAll('#js_btn');

items.forEach(item => {
    item.addEventListener('mouseover', () => {
    removeFocus();
    item.classList.add('selected');
    })

    removeFocus = () => {
        items.forEach(item => {
        item.classList.remove('selected');
        })
    }
})