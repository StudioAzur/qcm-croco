 export default class Questions {
    constructor(id, question, answers, correctAnswer){
        this.id = id,
        this.question = question,
        this.answers = answers,
        this.correctAnswer = correctAnswer
        this.active = false;
    }

    getCorrectAnswer(){
        return this.correctAnswer;
    }

    getActive(){
        return this.active;
    }

    setActive(active) {
        this.active = active;
    }

}