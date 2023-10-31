const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

// add event listeners for numbers, operators and decimal
inputBtns.forEach((inputBtn) => {
  // only numbers doesn´t have any class so, we will select only numbers
  if (inputBtn.classList.length == 0) {
    inputBtn.addEventListener("click", () => {
      sendNumberValue(inputBtn.value);
    });
  } else if (inputBtn.classList.contains("operator")) {
    inputBtn.addEventListener("click", () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains("decimal")) {
    inputBtn.addEventListener("click", () => sendNumberValue(inputBtn.value));
  }
});

function sendNumberValue(number) {
  // if current display value is 0 replace it if not add the number
  const displayValue = calculatorDisplay.textContent;
  calculatorDisplay.textContent =
    displayValue === "0" ? number : displayValue + number;
}

console.log("hi");
