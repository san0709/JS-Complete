let count = document.getElementById("count");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
let countValue = 0;
increase.onclick = function () {
    countValue++;
    count.textContent = countValue;
}
decrease.onclick = function () {
    countValue--;
    count.textContent = countValue;
}
reset.onclick = function () {
    countValue = 0;
    count.textContent = 0;
}