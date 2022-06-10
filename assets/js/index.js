import { myQuestions } from "./questions.js";

let qcm = document.querySelector("#qcm");
let rightAnswer = document.querySelector("#right_answer");

const createQcm = () => {
    myQuestions.forEach((element) => {
        createTitle(element);
        createAnswer(element);
        createValidate(element);
    });
    
};

const createTitle = (element) => {
    let h2 = document.createElement("h2");
    h2.textContent = element.question;
    qcm.appendChild(h2);
};

const createAnswer = (element) => {
    element.answers.forEach(value => {
    let buttonAnswer = document.createElement("button");
    buttonAnswer.className = "answer";
    buttonAnswer.textContent = value;
    qcm.appendChild(buttonAnswer);
    });
}

const createValidate = (element) => {
    let buttonValidate = document.createElement("button");
    buttonValidate.className = "validate";
    buttonValidate.textContent = "Valider la question";
    buttonValidate.addEventListener("click", ()=>{
        displayResponse(element);
    })
    qcm.appendChild(buttonValidate);
}

const displayResponse = (element) => {
    let pResponse = document.createElement("p");
    pResponse.textContent = element.correctAnswer;
    rightAnswer.appendChild(pResponse);
}

createQcm();
