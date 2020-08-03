const signs = ["%","CE","C","<-","1/x","x^2","#","/","7","8","9","*","4","5","6","-","1","2","3","+","+/-","0",".","="];
const buttonContainer = document.querySelector(".button-container");
const result = document.querySelector('.result');

signs.forEach((sign) => createSignButton(sign));

function createSignButton(signText) {
    const button = document.createElement("button");
    button.classList.add('button');
    button.innerText = signText;
    buttonContainer.appendChild(button);
}

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => button.addEventListener('click',function(e){
    //TODO: add a switch statement for special signs
    switch(this.innerText){
        case '%':
        console.log('Case works');
        break;
        case 'CE':
        console.log('Case works');
        break;
        case 'CE':
        console.log('Case works');
        break;
        case 'CE':
        console.log('Case works');
        break;
        case 'CE':
        console.log('Case works');
        break;
    }
    result.innerText += this.innerText;
}))

