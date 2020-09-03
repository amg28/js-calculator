//Screen element
const screen = document.querySelector('.screen');
let operationHistory = [];
let currentOperation = {};

// Variables used for mathematical operations
class Operation {

    constructor(firstNumber, secondNumber, operation, result) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operation = operation;
        this.result = result;
    }

    getResult() {
        return this.operation(this.firstNumber, this.secondNumber);
    }

}

//Adding event listeners to buttons
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => button.addEventListener('click', function (e) { buttonClickHandler(this.id) }
));

function buttonClickHandler(character) {

    const specialOperations = ["CE", "C", "←"];
    const mathematicalOperations = ["+", "-", "x", "/", "="];

    if (mathematicalOperations.includes(character)) {
        handleMathSign(character);
    } else if (specialOperations.includes(character)) {
        if(character === '←'){
            backspace();
        } else {
            clearScreen();
        }
    } else {
        show(character);
    }
    console.log(operationHistory);
}

function handleMathSign(sign) {
    if (sign === '=') {
        equal();
    } else {
        let firstNumber = readNumberFromScreen();
        let mathOperation = findMathOperation(sign);
        currentOperation = new Operation(firstNumber, 0, mathOperation, 0);
        show(sign);
    }
}

function equal() {
    let operation = currentOperation;
    operation.secondNumber = readNumberFromScreen();
    let result = operation.getResult();
    operationHistory.push(new Operation(operation.firstNumber, operation.secondNumber, operation.operation, result));
    clearScreen();
    show(result);
}

//Help functions
function readNumberFromScreen() {
    let result = screen.innerText.match(/\d+$/);
    return parseFloat(result);
}

function show(number) {
    screen.innerText += number;
}

function clearScreen() {
    screen.innerText = '';
}

function backspace() {
    let value = screen.innerText;
    screen.innerText = value.slice(0,value.length-1);
}

function findMathOperation(sign) {
    switch (sign) {
        case '+':
            return (a, b) => a + b;
            
        case '-':
            return (a, b) => a - b;
            
        case 'x':
            return (a, b) => a * b;
            
        case '/':
            return (a, b) => a / b;
            
    }
}