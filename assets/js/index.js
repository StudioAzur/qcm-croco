import { myQcm } from "./questions.js";
("use strict");

let qcm = document.querySelector("#qcm");
let result = document.querySelector("#result");
let domScore = document.querySelector("#score");
let quizz = document.querySelector("#quizz");
let start = document.querySelector("#start");
let goodResponse = document.querySelector("#good_response");
let response = [];
let choiceUser = [];
let count = 1;
// Bonne réponses
let score = 0;

const init = () => {
    window.addEventListener("load", () => {
        quizz.style.display = "none";
        let btnStart = document.querySelector("#quizz_start");
        btnStart.addEventListener("click", () => {
            createQcm(myQcm);
        });
    });
};

const getResponse = (myQcm) => {
   myQcm.forEach(element => {
       response.push(element.correctAnswer);
   });
   for (let index = 0; index < response.length; index++) {
      goodResponse.innerText = response[index];
   }
}

const createQcm = (myQcm) => {
    start.style.display = "none";
    quizz.style.display = "block";
    domScore.textContent = `${score} / ${myQcm.length}`;
    for (let i = 0; i < myQcm.length; i++) {
        let idCard = myQcm[i].id;
        createCard(myQcm[i]);
        displayQuestion(myQcm[i], idCard);
        myQcm[i].setActive(false);
    }
    //   endQuizz();
};

const displayQuestion = (element, idCard) => {
    if (element.active == true) {
        createTitle(element, idCard);
    }
};

const createCard = (element) => {
    let div = document.createElement("div");
    div.id = element.id;
    div.className = "card__quizz";
    qcm.appendChild(div);
    let myId = element.id;
    return myId;
};

const createTitle = (element, idCard) => {
    let h2 = document.createElement("h2");
    h2.textContent = element.question;
    document.getElementById(idCard).appendChild(h2);
    createAnswer(element, idCard);
};

const buttonAnswer = (element, idCard) => {
    let buttonAnswer = document.createElement("button");
    buttonAnswer.className = "answer";
    buttonAnswer.textContent = element.answers;
    buttonAnswer.id = count++;
    buttonAnswer.addEventListener("click", (e) => {
        let choice = e.target.id;
        highlight(choice);
    });
    document.getElementById(idCard).appendChild(buttonAnswer);
};

const createAnswer = (element, idCard) => {
    for (let i = 0; i < element.answers; i++) {
        console.log(element.answers);
    }
    createValidate(element, idCard);
};

const highlight = (choice) => {
    let highlight = document.querySelectorAll(".highlight");
    highlight.forEach((element) => {
        element.classList.remove("highlight");
    });
    document.getElementById(choice).classList.add("highlight");
};

const createValidate = (element, idCard) => {
    let buttonValidate = document.createElement("button");
    buttonValidate.className = "validate";
    buttonValidate.textContent = "Valider la question";
    buttonValidate.addEventListener("click", (e) => {
        response.push(e.target.innerText);
        buttonValidate.disabled = true;
    });
    document.getElementById(idCard).appendChild(buttonValidate);
};

const displayResponse = (element) => {
    let pResponse = document.createElement("p");
    pResponse.textContent = element.correctAnswer;
    result.appendChild(pResponse);
};

init();
