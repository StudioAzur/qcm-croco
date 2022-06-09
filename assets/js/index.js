import { myQuestions } from "./questions.js";

const buildQcm = () => {
    myQuestions.forEach((element) => {
        let question = document.querySelector("#question");
        question.innerText = element.question;
        let response = document.querySelector("#response");
        console.log(element.answers);
        let answers = element.answers;
        for (const iterator of element.answers) {
            response.innerHTML += `<p class="answer">${iterator}</p>`;
        }
    });
};

buildQcm();
