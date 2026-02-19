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

const screen = document.querySelector(".screen"); //querySelector returns a reference to the first instance of the element type
const buttons = document.querySelectorAll(".calcButton");
let input = "";
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;
        if(value == "del") {
            input = input(0, -1);
        } else if (value == "="){
            try {
                input = eval(input);
            } catch {
                input = "Invalid input";
            }
        } else {
            input += value;
        }
        screen.textContent = input;
    })
})

