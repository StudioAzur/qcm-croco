import { myQuestions } from "./questions.js";

let qcm = document.querySelector("#qcm");
let result = document.querySelector("#result");
let domScore = document.querySelector("#score");
let response = [];
let count = 1;
let score = 0;

const createQcm = () => {
    domScore.textContent = `${score} / ${myQuestions.length}`;
    myQuestions.forEach((element) => {
        for(number in element){
        let idCard = createCard(element);
        createTitle(element, idCard);
        createAnswer(element, idCard, number);
        createValidate(element, idCard);
        console.log(number);
        }
    });
};

const createCard = (element) =>{
    let div = document.createElement("div");
    div.id = element.id;
    div.className = "card__quizz";
    qcm.appendChild(div);
    let myId = element.id;
    return myId;
}

const createTitle = (element, idCard) => {
    let h2 = document.createElement("h2");
    h2.textContent = element.question;
    document.getElementById(idCard).appendChild(h2);
};

const createAnswer = (element, idCard) => {
    element.answers.forEach(value => {
    let buttonAnswer = document.createElement("button");
    buttonAnswer.className = "answer";
    buttonAnswer.textContent = value;
    buttonAnswer.id = count++;
    buttonAnswer.addEventListener("click", (e)=>{
        let choice = e.target.id;
        highlight(choice);
    })
    document.getElementById(idCard).appendChild(buttonAnswer);
    });
}

const highlight = (choice) => {
    let highlight = document.querySelectorAll(".highlight");
    highlight.forEach((element) => {
        element.classList.remove("highlight");
    });
    document.getElementById(choice).classList.add("highlight");
}

const createValidate = (element, idCard) => {
    let buttonValidate = document.createElement("button");
    buttonValidate.className = "validate";
    buttonValidate.textContent = "Valider la question";
    buttonValidate.addEventListener("click", (e)=>{
        response.push(e.target.innerText);
        buttonValidate.disabled = true;
        displayResponse(element);
    })
    document.getElementById(idCard).appendChild(buttonValidate);
}

const displayResponse = (element) => {
    let pResponse = document.createElement("p");
    pResponse.textContent = element.correctAnswer;
    result.appendChild(pResponse);
}

createQcm();
