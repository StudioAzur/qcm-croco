import { myQcm } from "./questions.js";
/* Création d'une classe appelée Game. */
export default class Game {
  constructor() {
    this.params = {
      qcm: document.querySelector("#qcm"),
      result: document.querySelector("#result"),
      domScore: document.querySelector("#score"),
      quizz: document.querySelector("#quizz"),
      start: document.querySelector("#start"),
      goodResponse: document.querySelector("#good_response"),
      yourResponse: document.querySelector("#your_response"),
      responseContainer: document.querySelector("#response_container"),
      reload: document.querySelector("#reload"),
      fiesta: document.querySelector("#fiesta"),
      response: [],
      responseUser: [],
      count: 1,
      score: 0,
    };
    this.dataQcm = this.params.responseContainer.dataset.qcm;

    this.init();
  }

  /* Une fonction qui est appelée lorsque la page est chargée. */
  init = () => {
    window.addEventListener("load", () => {
      this.params.quizz.style.display = "none";
      let btnStart = document.querySelector("#quizz_start");
      this.getResponse();
      btnStart.addEventListener("click", () => {
        this.createQcm(myQcm, this.dataQcm);
      });
    });
  };

  /* Une fonction qui est appelée lorsque la page est chargée. */
  createQcm = (myQcm, id) => {
    this.params.start.style.display = "none";
    this.params.result.style.display = "none";
    this.params.quizz.style.display = "flex";
    myQcm[id].setActive(true);
    let idCard = this.dataQcm;
    this.displayQuestion(myQcm[id], idCard);
  };

  /**
   * Il parcourt le tableau d'objets, pousse la propriété correctAnswer de chaque objet dans un nouveau
   * tableau, puis parcourt le nouveau tableau et crée un élément de paragraphe pour chaque élément du
   * tableau, en ajoutant chaque paragraphe au DOM.
   */
  getResponse = () => {
    myQcm.forEach((element) => {
      this.params.response.push(element.correctAnswer);
    });
    for (let index = 0; index < this.params.response.length; index++) {
      let p1 = document.createElement("p");
      p1.textContent = this.params.response[index];
      this.params.goodResponse.appendChild(p1);
    }
  };

  /**
   * Si l'élément est actif, créez une réponse d'élément.
   * @param element - l'objet qui contient la question et les réponses
   * @param idCard - l'identifiant de la carte qui est affiché
   */
  displayQuestion = (element, idCard) => {
    if (element.active == true) {
      this.createElementAnswer(element, idCard);
    }
  };

  /* Il crée un nouvel élément h2 et l'ajoute au DOM. */
  createElementAnswer = (element, idCard) => {
    let h2 = document.createElement("h2");
    h2.textContent = element.question;
    this.params.responseContainer.appendChild(h2);
    this.createAnswer(element, idCard);
  };

  /* Créer les réponses à la question. */
  createAnswer = (element, idCard) => {
    for (let index = 0; index < element.answers.length; index++) {
      let result = element.answers[index];
      let idCard = this.dataQcm;
      this.buttonAnswer(result, idCard);
    }
    this.createValidate(element, idCard);
  };

  /* Il crée un bouton pour chaque réponse. */
  buttonAnswer = (element) => {
    let buttonAnswer = document.createElement("button");
    buttonAnswer.className = "answer";
    buttonAnswer.textContent = element;
    buttonAnswer.id = `${this.params.count++}`;
    buttonAnswer.addEventListener("click", (e) => {
      let choice = e.target.id;
      this.highlight(choice);
    });
    this.params.responseContainer.appendChild(buttonAnswer);
  };

  /* Création d'un bouton qui validera la question. */
  createValidate = (element, idCard) => {
    let buttonValidate = document.createElement("button");
    buttonValidate.className = "validate";
    buttonValidate.textContent = "Valider la question";
    buttonValidate.disabled = true;
    buttonValidate.addEventListener("click", () => {
      buttonValidate.disabled = true;
      element.active = true;
      let responseUser = document.querySelector(".highlight").textContent;
      this.params.responseUser.push(responseUser);

      if (responseUser == element.correctAnswer) {
        this.params.score++;
      }
      this.nextQuestion(idCard);
    });
    this.params.responseContainer.appendChild(buttonValidate);
  };

  /* Mettre en surbrillance la réponse sélectionnée. */
  highlight = (choice) => {
    document.querySelector(".validate").disabled = false;
    let highlight = document.querySelectorAll(".highlight");
    highlight.forEach((element) => {
      element.classList.remove("highlight");
    });
    document.getElementById(choice).classList.add("highlight");
  };

  /* Vérifier si la longueur du tableau est égale à l'idCard. Si c'est le cas, il appelle la fonction
  gameOver. Si ce n'est pas le cas, il incrémente l'idCard et appelle la fonction createQcm. */
  nextQuestion = (idCard) => {
    let lengthTabQcm = myQcm.length - 1;
    if (lengthTabQcm == idCard) {
      this.gameOver();
    } else {
      this.dataQcm++;
      this.params.responseContainer.innerText = "";
      this.createQcm(myQcm, this.dataQcm);
    }
  };

  /* Une fonction qui est appelée lorsque le jeu est terminé. Il affiche le score du joueur et les
  bonnes réponses. */
  gameOver = () => {
    this.params.domScore.textContent = ` Score du Joueur : ${this.params.score} / ${myQcm.length}`;
    if(this.params.score == myQcm.length){
      this.params.fiesta.style.display = "block";
    }
    this.getMyResults();
    this.params.result.style.display = "flex";
    this.params.qcm.style.display = "none";
    this.params.reload.addEventListener("click", () => {
      location.reload();
    });
  };

  /* Création d'un élément de paragraphe pour chaque élément du tableau responseUser. */
  getMyResults = () => {
    for (let index = 0; index < this.params.responseUser.length; index++) {
      let p2 = document.createElement("p");
      p2.textContent = this.params.responseUser[index];
      this.params.yourResponse.appendChild(p2);
    }
  };
}

const game = new Game();