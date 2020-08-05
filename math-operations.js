//Screen element
const screen = document.querySelector('.screen');

// Variables used for mathematical operations
let firstNumber = 0;
let secondNumber = 0;
let operation = '';

//Adding event listeners to buttons
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => button.addEventListener('click',function(e){
    switch(this.id){
        case '+':
        case '-':
        case '*':
        case '/':
            firstNumber = parseFloat(screen.innerText);
            clearScreen(screen);
            operation = this.id;
            break;
        
        case '=':
            secondNumber = parseFloat(screen.innerText);
            clearScreen(screen);
            screen.innerText = calculate(firstNumber, secondNumber, operation);
            console.log(`Final screen: ${screen.innerText}`);
            break;

        default:
            show(screen, this.innerText);
            break;
    }    
}))

function calculate(numberOne, numberTwo, operation){
    console.info(`1: ${numberOne} 2: ${numberTwo} 3: ${operation}`);
    switch(operation){
        case '+':
            return numberOne+numberTwo;
        case '-':
            return numberOne-numberTwo;
        case '*':
            return numberOne*numberTwo;
        case '/':
            return numberOne/numberTwo;
    }
}

function show(screen, number){
    screen.innerText += number;
}

function clearScreen(screen){
    screen.innerText = '';
}