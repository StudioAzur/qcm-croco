import { myQuestions } from "./questions.js";
("use strict");

let qcm = document.querySelector("#qcm");
let result = document.querySelector("#result");
let domScore = document.querySelector("#score");
let quizz = document.querySelector("#quizz");
let start = document.querySelector("#start");
let response = [];
let currentQuestion = myQuestions[0];
let count = 1;
// Bonne réponses
let score = 0;


const init = () => {
    window.addEventListener("load", ()=>{
         quizz.style.display = "none";
         let btnStart = document.querySelector("#quizz_start");
         btnStart.addEventListener("click", ()=>{
            createQcm();
         });
    })
}

const createQcm = () => {
  start.style.display = "none";
  quizz.style.display = "block";
  domScore.textContent = `${score} / ${myQuestions.length}`;
  for (let i = 0; i < myQuestions.length; i++) {
    currentQuestion = i;
    let idCard = myQuestions[i].id;
    createCard(myQuestions[i]);
    displayQuestion(myQuestions[i], idCard);
    myQuestions.active = false;
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

const createAnswer = (element, idCard) => {
  for (const letter in element.answers) {
    let buttonAnswer = document.createElement("button");
    buttonAnswer.className = "answer";
    buttonAnswer.textContent = element.answers[letter];
    buttonAnswer.id = count++;
    buttonAnswer.addEventListener("click", (e) => {
      let choice = e.target.id;
      highlight(choice);
    });
    document.getElementById(idCard).appendChild(buttonAnswer);
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
    displayResponse(element);
  });
  document.getElementById(idCard).appendChild(buttonValidate);
};

const displayResponse = (element) => {
  let pResponse = document.createElement("p");
  pResponse.textContent = element.correctAnswer;
  result.appendChild(pResponse);
};

init();
