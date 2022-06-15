import { myQcm } from "./questions.js";
("use strict");

let qcm = document.querySelector("#qcm");
let result = document.querySelector("#result");
let domScore = document.querySelector("#score");
let quizz = document.querySelector("#quizz");
let start = document.querySelector("#start");
let goodResponse = document.querySelector("#good_response");
let response = [];
let count = 1;
// Bonne réponses
let score = 0;

/**
 * Lorsque la fenêtre se charge, masque le quiz, puis lorsque le bouton de démarrage est cliqué, créez
 * le QCM.
 */
const init = () => {
    window.addEventListener("load", () => {
        quizz.style.display = "none";
        let btnStart = document.querySelector("#quizz_start");
        btnStart.addEventListener("click", () => {
            createQcm(myQcm);
        });
    });
};


/**
 * Il parcourt le tableau d'objets, pousse la propriété correctAnswer de chaque objet dans un nouveau
 * tableau, puis parcourt le nouveau tableau et crée un élément de paragraphe pour chaque élément du
 * tableau, en ajoutant chaque paragraphe au DOM.
 */
const getResponse = () => {
    myQcm.forEach((element) => {
        response.push(element.correctAnswer);
    });
    for (let index = 0; index < response.length; index++) {
        let p = document.createElement("p");
        p.textContent = response[index];
        goodResponse.appendChild(p);
    }
};

const createQcm = (myQcm) => {
    getResponse();
    start.style.display = "none";
    quizz.style.display = "block";
    myQcm[0].setActive(true);
    for (let index = 0; index < myQcm.length; index++) {
        let idCard = myQcm[index].id;
        createCard(myQcm[index]);
        displayQuestion(myQcm[index], idCard);
    }

    endQuizz();
};

const displayQuestion = (element, idCard) => {
  if (element.active == true) {
    createElementAnswer(element, idCard);
  }
};

const endQuizz = () => {};

const createCard = (element) => {
    let div = document.createElement("div");
    div.id = element.id;
    div.className = "card__quizz";
    qcm.appendChild(div);
    let myId = element.id;
    return myId;
};

const createElementAnswer = (element, idCard) => {
    let h2 = document.createElement("h2");
    h2.textContent = element.question;
    document.getElementById(idCard).appendChild(h2);
    createAnswer(element, idCard);
};

const buttonAnswer = (element, idCard) => {
    let buttonAnswer = document.createElement("button");
    buttonAnswer.className = "answer";
    buttonAnswer.textContent = element;
    buttonAnswer.id = `${idCard + count++}`;
    buttonAnswer.addEventListener("click", (e) => {
        let choice = e.target.id;
        highlight(choice);
    });
    document.getElementById(idCard).appendChild(buttonAnswer);
};

const createAnswer = (element, idCard) => {
    for (let index = 0; index < element.answers.length; index++) {
        const result = element.answers[index];
        let idCard = element.id;
        buttonAnswer(result, idCard);
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
        element.active = true;
        nextQuestion(element, idCard);
    });
    document.getElementById(idCard).appendChild(buttonValidate);
};

const nextQuestion = (element, idCard) => {
    console.log("Question suivante");
};

init();
