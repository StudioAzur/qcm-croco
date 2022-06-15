import Questions from "./myQuestion.js";

const question1 = new Questions(
  1,
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
  2,
  "La femelle crocodile peut pondre jusqu'a ...",
  ["50 à 80 oeufs", "60 à 90 oeufs", "70 à 100 oeufs", "120 à 160 oeufs"],
  "50 à 80 oeufs"
);

const question3 = new Questions(
  3,
  "En une fraction de seconde le crocodile du Nil peut faire un bond de...",
  ["3 metres", "1 metre", "2,50 metres", "12,50 metres"],
  "3 metres"
);
const question4 = new Questions(
  4,
  "Combien y a-t-il d'espèces de crocodiles ?",
  ["20", "23", "12", "17"],
  "23"
);
const question5 = new Questions(
  5,
  "Lequel de ces crocodiles est le plus grand et le plus gros ?",
  [
    "Le crocodile du Nil",
    "L'alligator",
    "Le crocodile marin",
    "Le crocodile des marais",
  ],
  "Le crocodile marin"
);

export const myQcm = [question1, question2, question3, question4, question5];
