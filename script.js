// Variables holding the queries
let buttonsContainer = document.querySelector(".container_buttons-numbers");
let display = document.querySelector(".container_display-text");
let equals = document.querySelector(".container_buttons-numbers--equals");
let reset = document.querySelector(".container_buttons-numbers--reset");

// Variables
let displayValue = '0';
let initialValue = true;

let firstNumber = '';
let secondNumber = '';
let currentOperator = '';

display.textContent = displayValue;

// Button array
const buttons = [
    '7', '8', '9', 'DEL',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '/', '*', '.',
];

// Addition function
function add(a, b) {
    return a + b;
}

// Subtraction function
function subtract(a, b) {
    return a - b;
}

// Multiplication function
function multiply(a, b) {
    return a * b;
}

// Division function
function divide(a, b) {
    return a / b;
}

// Operate function for basic math
function operate(operator, a, b){
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}

const updateDisplay = () => display.textContent = displayValue;

const isOperator = (value) => ['+', '-', '*', '/'].includes(value);

function handleButtonClick(button) {
    if (isOperator(button)) {
        if (firstNumber !== '' && currentOperator !== '' && !initialValue) {
            secondNumber = displayValue;
            displayValue = operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber)).toString();
            firstNumber = displayValue;
            secondNumber = '';
        } else {
            firstNumber = displayValue;
        }
        currentOperator = button;
        initialValue = true;
        updateDisplay();
    } else if (button === "DEL") {
        if (displayValue.length > 1) {
            displayValue = displayValue.slice(0, -1);
        } else {
            displayValue = '0';
            initialValue = true;
        }
        if (currentOperator !== '') {
            secondNumber = displayValue;
        } else {
            firstNumber = displayValue;
        }
        updateDisplay();
    } else if (button === "=") {
        if (firstNumber !== '' && currentOperator !== '' && !initialValue) {
            secondNumber = displayValue;
            displayValue = operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber)).toString();
            firstNumber = displayValue;
            secondNumber = '';
            currentOperator = '';
            initialValue = true;
            updateDisplay();
        }
    } else if (button === ".") {
        if (!displayValue.includes('.')) {
            displayValue += button;
            updateDisplay();
        }
    } else {
        if (initialValue) {
            displayValue = button;
            initialValue = false;
        } else {
            displayValue += button;
        }
        updateDisplay();
    }
}

buttons.forEach(button => {
    const btn = document.createElement("button");
    btn.value = button;
    btn.textContent = button;

    btn.addEventListener("click", () => {
        handleButtonClick(button);
    });

    buttonsContainer.appendChild(btn);
})

// Event listener for the RESET button
reset.addEventListener("click", () => {
    displayValue = '0';
    initialValue = true;
    firstNumber = '';
    secondNumber = '';
    currentOperator = '';
    updateDisplay();
});

// Event listener for the EQUALS button
equals.addEventListener("click", () => {
    if (firstNumber !== '' && currentOperator !== '' && !initialValue) {
        secondNumber = displayValue;
        displayValue = operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber)).toString();
        firstNumber = displayValue;
        secondNumber = '';
        currentOperator = '';
        initialValue = true;
        updateDisplay();
    }
});