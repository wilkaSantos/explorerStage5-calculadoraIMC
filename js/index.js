import { Error } from "./error.js";
import { Modal } from "./modal.js";
import { imc, isANumber } from "./util.js";

const weightField = document.querySelector('#weightField');
const heightField = document.querySelector('#heightField');
const calculation = document.querySelector('.calculationButton');

calculation.addEventListener('click', calculateIndex);
weightField.addEventListener('keypress', fieldChange);
heightField.addEventListener('keypress', fieldChange);

function calculateIndex(event){
    event.preventDefault();

    const weight = weightField.value;
    const height = heightField.value;

    const checkNumber = isANumber(weight) || isANumber(height);

    if(checkNumber){
        Error.open();
        return;
    }

    const result = imc(weight, height);
    Modal.modalTitle.innerText = `Seu IMC é de ${result}`;
    Modal.open();
}

function fieldChange(){
    Error.close();
}

Modal.closeButton.onclick = () => Modal.close();