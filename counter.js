
let count = 0;
const counter = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        const butype = event.currentTarget.classList;
        if (butype.contains('increase')) {
            count++
        }
        else if (butype.contains('decrease')) {
            count--;
        }
        else {
            count = 0;
        }
        counter.textContent = count;
    });
});
