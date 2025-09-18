let userName = document.getElementById("userName");
const submitBtn = document.getElementById("submitBtn");
const displayText = document.getElementById("displayText");
const payment = document.getElementById("payment");
let subscribed = document.getElementById("subscribed");
let visaCard = document.getElementById("visaCard");
let masterCard = document.getElementById("masterCard");
let payPal = document.getElementById("payPal");
submitBtn.onclick = function () {
    let inputName = userName.value;
    if (subscribed.checked) {
        displayText.textContent = `${inputName} is subscribed.`
    }
    else {
        displayText.textContent = `${inputName} is not subscribed.`
    }
    if (visaCard.checked) {
        payment.textContent = `Paid via Visa Card`
    } else if (masterCard.checked) {
        payment.textContent = `Paid via Master Card`
    } else if (payPal.checked) {
        payment.textContent = `Paid via Pay Pal`
    } else {
        payment.textContent = `Payment has not made!`
    }

}




