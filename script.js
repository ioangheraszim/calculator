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

buttons.forEach(button => {
    const btn = document.createElement("button");
    btn.value = button;
    btn.textContent = button;
    buttonsContainer.appendChild(btn);
})