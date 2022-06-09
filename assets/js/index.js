const myQuestions = [
    {
        question: "Comment reconnaît-on un crocodile d'un aligator ? ",
        answers: [
            "grâce à leurs yeux",
            "grâce à la forme de leur mâchoire et de leur crâne",
            "grâce à la couleur de leurs écailles",
            "grâce à leurs pattes"
        ],
        correctAnswer: "grâce à la forme de leur mâchoire et de leur crâne",
    },
];

const buildQcm = () => {
    myQuestions.forEach((element) => {
        let question = document.querySelector("#question");
        question.innerText = element.question;
        let response = document.querySelector("#response");
        console.log(element.answers);
        let answers = element.answers;
        for (const iterator of element.answers) {
            response.innerHTML += `<p>${iterator}</p>`;
        }
    });
};

buildQcm();
