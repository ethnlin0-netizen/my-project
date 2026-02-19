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
        if(value == "clear") {
            input = "";
        } else if (value == "="){
            try {
                input = eval(input); //eval takes string and executes it as code
                input = input.toPrecision(5); //have to use toPrecision here since it's still a number
            } catch {
                input = "Invalid input!";
            }
        } else {
            input += value;
        }
        screen.textContent = input; //input becomes string, so toPrecision will fail
    })
})

