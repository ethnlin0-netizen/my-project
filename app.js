const openBtn = document.getElementById("openCalc");
const overlay = document.getElementById("overlay");
const calculator = document.getElementById("calculator");

openBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
});

overlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
})

calculator.addEventListener("click", (e) => {
    e.stopPropagation();
});

