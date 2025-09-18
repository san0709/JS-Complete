const headingElement = document.getElementById("headingElement");
let numberElement = document.getElementById("numberElement");
const buttonElement = document.getElementById("buttonElement");

buttonElement.onclick = function () {
    numberElement.textContent = Math.floor(Math.random() * 100) + 1;
}