import Questions from "./myQuestion.js";

const question1 = new Questions(
    "croco1",
    "Quelle affirmation est correcte ?",
    [
        "Le crocodile est un mammifère.",
        "Le crocodile est un poisson.",
        "Le crocodile est un reptile.",
        "Le crocodile est un amphibien.",
    ],
    "Le crocodile est un reptile."
);

const question2 = new Questions(
  "croco2",
  "Chaussette ?",
  [
      "Chaussette A",
      "Chaussette B",
      "Chaussette C",
      "Chaussette D",
  ],
  "Chausette B"
);


export const myQcm = [question1, question2];
