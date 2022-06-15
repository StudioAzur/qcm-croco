import Questions from './myQuestion.js';


const question1 = new Questions("croco1", "Quelle affirmation est correcte ?",{
  a: "Le crocodile est un mammifère.",
  b: "Le crocodile est un poisson.",
  c: "Le crocodile est un reptile.",
  d: "Le crocodile est un amphibien.",
}, "Le crocodile est un reptile.");

export const myQcm = [question1];

