 export default class Questions {
    constructor(id, question, answers, correctAnswer){
        this.id = id,
        this.question = question,
        this.answers = answers,
        this.correctAnswer = correctAnswer
        this.active = true;
    }

    getCorrectAnswer(){
        return this.correctAnswer;
    }

    setActive(active) {
        this.active = active;
    }

}