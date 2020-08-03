const buttonContainer = document.querySelector(".button-container");
const signs = ["%","CE","C","<-","1/x","x^2","#","/","7","8","9","*","4","5","6","-","1","2","3","+","+/-","0",".","="];

signs.forEach( (sign) => createSignButton(sign));

function createSignButton(signText) {
    const button = document.createElement("button");
    button.classList.add('button');
    button.innerText = signText;
    buttonContainer.appendChild(button);
}

