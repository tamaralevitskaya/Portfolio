
let text = "ПРИВЕТ!!!";
let textOne = "Меня зовут Тамара"
let textTwo = "и я - WEB-разработчик!"
let i = 0;
let speed = 100;

function type() {
    if (i < text.length, i < textOne.length, i < textTwo.length) {
        document.querySelector(".heading").textContent += text.charAt(i);
        document.querySelector(".textOne").textContent += textOne.charAt(i);
        document.querySelector(".textTwo").textContent += textTwo.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}

type();