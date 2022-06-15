export const myQuestions = [
  {
    id: "croco1",
    question: "Quelle affirmation est correcte ?",
    answers: {
      a: " Le crocodile est un mammifère.",
      b: "Le crocodile est un poisson.",
      c: "Le crocodile est un reptile.",
      d: "Le crocodile est un amphibien.",
    },
    correctAnswer: "",
    active: true,
  },
  {
    id: "croco2",
    question: "Comment reconnaît-on un crocodile d'un aligator ? ",
    answers: {
      a: "Grâce à leurs yeux",
      b: "Grâce à la forme de leur mâchoire et de leur crâne",
      c: "Grâce à la couleur de leurs écailles",
      d: "Grâce à leurs pattes",
    },
    correctAnswer: "",
    active: true,
  },
];

let response1 = myQuestions[0].answers.c;
myQuestions[0].correctAnswer = response1;
let response2 = myQuestions[1].answers.b;
myQuestions[1].correctAnswer = response2;

console.log(myQuestions);
