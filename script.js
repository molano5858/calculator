const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

let firstValue = 0;
let awaitingNextValue = false;
let operatorValue = "";

// add event listeners for numbers, operators and decimal
inputBtns.forEach((inputBtn) => {
  // only numbers doesn´t have any class so, we will select only numbers
  if (inputBtn.classList.length == 0) {
    inputBtn.addEventListener("click", () => {
      sendNumberValue(inputBtn.value);
    });
  } else if (inputBtn.classList.contains("operator")) {
    inputBtn.addEventListener("click", () => useOperator(inputBtn.value));
  } else if (inputBtn.classList.contains("decimal")) {
    inputBtn.addEventListener("click", () => addDecimal(inputBtn.value));
  }
});

function sendNumberValue(number) {
  // reset display if the first value is entered
  if (awaitingNextValue) {
    awaitingNextValue = false;
    calculatorDisplay.textContent = number;
  } else {
    // if current display value is 0 replace it if not add the number
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent =
      displayValue === "0" ? number : displayValue + number;
  }
}

// calculate first and second values depending on operator
const calculate = {
  "/": (firstNumber, secondNumber) => {
    return firstNumber / secondNumber;
  },
  "*": (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
  },
  "+": (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
  },
  "-": (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
  },
  "=": (firstNumber, secondNumber) => {
    return secondNumber;
  },
};

function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent);
  // prevent don´t presse 2 operators at the same time
  if (awaitingNextValue) {
    operatorValue = operator; // reset the operator for the new operator when we are making more operation
    return;
  }
  // assign this value to firstValue if this firstValue doesn´t exist
  if (!firstValue) {
    firstValue = currentValue;
  } else {
    console.log(firstValue, operatorValue, currentValue);
    const calculation = calculate[operatorValue](firstValue, currentValue);
    console.log("calculation", calculation);
    firstValue = calculation;
    calculatorDisplay.textContent = calculation;
  }
  // ready for the next value
  awaitingNextValue = true;
  operatorValue = operator;
}

// function add a decimal
function addDecimal() {
  // if an operator pressed don´t add decimal
  if (awaitingNextValue) return; // dont run the next lines of code
  // if no decimal add one
  if (!calculatorDisplay.textContent.includes(".")) {
    calculatorDisplay.textContent += ".";
  }
}

// Reset all values
function resetAll() {
  calculatorDisplay.textContent = "0";
  firstValue = 0;
  awaitingNextValue = false;
  operatorValue = "";
}

clearBtn.addEventListener("click", resetAll);
