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
    inputBtn.addEventListener("click", () => addDecimal(inputBtn.value));
  }
});

function sendNumberValue(number) {
  // if current display value is 0 replace it if not add the number
  const displayValue = calculatorDisplay.textContent;
  calculatorDisplay.textContent =
    displayValue === "0" ? number : displayValue + number;
}

// function add a decimal
function addDecimal() {
  // if no decimal add one
  if (!calculatorDisplay.textContent.includes(".")) {
    calculatorDisplay.textContent += ".";
  }
}

// Reset
function resetAll() {
  calculatorDisplay.textContent = "0";
}

clearBtn.addEventListener("click", resetAll);
