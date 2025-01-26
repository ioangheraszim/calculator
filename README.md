# Calculator
A Simple Calculator 

<p align="center">
  <img src="./screenshot/calculator.png" width="50%" >
</p>

## Overview

### Requirements

### 1. Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, so start by creating functions for the following items and testing them in your browser’s console:
    - add
    - subtract
    - multiply
    - divide

<details>
<summary>Answer: </summary>
  
```javascript
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
```
</details>

### 2. A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables, one for each part of the operation. You’ll use these variables to update your display later.

### 3. Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.

#### Answer 2 and 3:
<details>
<summary>Answer: </summary>
  
```javascript
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
```
</details>

### 4. Create a basic HTML calculator with buttons for each digit and operator (including =).
- Don’t worry about making them functional just yet.
- There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.
- Add a “clear” button.

### 5. Create the functions that populate the display when you click the digit buttons. You should store the content of the display (the number) in a variable for use in the next step.

<details>
<summary>Answer: </summary>
  
```javascript
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
```
</details>

### 6. Make the calculator work! You’ll need to store the first and second numbers input by the user and then operate() on them when the user presses the = button, according to the operator that was selected between the numbers.
- You should already have the code that can populate the display, so once operate has been called, update the display with the result of the operation.
- This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.

### 7. Gotchas: watch out for and fix these bugs if they show up in your code:
- Your calculator should not evaluate more than a single pair of numbers at a time. Example: you enter a number (12), followed by an operator button (+), a second number button (7), and a second operator button (-). Your calculator should then do the following: first, evaluate the initial pair of numbers (12 + 7), then display the result of that calculation (19). Finally, use that result (19) as the first number in a new calculation, along with the next operator (-). An example of the behavior we’re looking for can be seen in this student’s calculator live preview.
- You should round answers with long decimals so that they don’t overflow the display.
- Pressing = before entering all of the numbers or an operator could cause problems!
- Pressing “clear” should wipe out any existing data. Make sure the user is really starting fresh after pressing “clear”.
- Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!
- Make sure that your calculator only runs an operation when supplied with two numbers and an operator by the user. Example: you enter a number (2), followed by an operator button (+). You press the operator button (+) a second consecutive time. Your calculator should not evaluate this as (2 + 2) and should not display the result (4). If consecutive operator buttons are pressed, your calculator should not run any evaluations, it should only take the last operator entered to be used for the next operation.


#### Answer 6 & 7
<details>
<summary>Answer: </summary>
  
```javascript
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
```
</details>

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow