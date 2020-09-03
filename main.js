//Constants
const signs = ["%", "CE", "C", "←", "1/x", "x^2", "√", "/", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "+/-", "0", ".", "="];
const buttonContainer = document.querySelector(".button-container");

//Sign button creation
signs.forEach((sign) => createButton(sign));

function createButton(sign) {
    const button = document.createElement("button");
    button.classList.add('button');
    button.id = sign;
    button.innerText = sign;
    buttonContainer.appendChild(button);
}


