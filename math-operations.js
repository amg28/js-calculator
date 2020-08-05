//Screen element
const screen = document.querySelector('.screen');

// Variables used for mathematical operations
let numberOne = 0;
let numberTwo = 0;
let operation = '';

//Adding event listeners to buttons
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => button.addEventListener('click', function (e) {

    //Each button's id is defined as math operation sign. Example: '+' button's id is set as '+'.
    const sign = this.id;

    switch (sign) {
        case '+':
        case '-':
        case '*':
        case '/':
            numberOne = parseFloat(screen.innerText);
            clearScreen(screen);
            operation = sign;
            break;

        case '=':
            numberTwo = parseFloat(screen.innerText);
            clearScreen(screen);
            screen.innerText = calculate(numberOne, numberTwo, operation);
            console.log(`Final screen: ${screen.innerText}`);
            break;

        default:
            show(screen, this.innerText);
            break;
    }
}))

function calculate(numberOne, numberTwo, operation) {
    console.info(`1: ${numberOne} 2: ${numberTwo} 3: ${operation}`);
    switch (operation) {
        case '+':
            return numberOne + numberTwo;
        case '-':
            return numberOne - numberTwo;
        case '*':
            return numberOne * numberTwo;
        case '/':
            return numberOne / numberTwo;
    }
}

function show(screen, number) {
    screen.innerText += number;
}

function clearScreen(screen) {
    screen.innerText = '';
}