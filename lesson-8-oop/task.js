function Question(question, answer, trueAnswer) {
  this.question = question;
  this.answer = answer;
  this.trueAnswer = trueAnswer;
  this.showAnswer = function () {
    console.log(question);
    for (var i = 0; i < answer.length; i++) {
      console.log(i + ') ' + answer[i]);
    }
  };
  this.checkAnswer = function (numberAnswer) {
    if (numberAnswer === this.trueAnswer) {
      console.log("Верно");
    } else {
      console.log("Не верно ");
    }
  };
}

var question1 = new Question('2 + 2 = ...?', [1, 2, 3, 4], 3);
var question2 = new Question('2 * 2 = ...?', [1, 2, 3, 4], 3);
var question3 = new Question('2 / 2 = ...?', [1, 2, 3, 4], 0);

var questionArray = [question1, question2, question3];
var numberQuestion = Math.floor(Math.random() * questionArray.length);

questionArray[numberQuestion].showAnswer();

var numberAnswer = parseInt(prompt('Введите номер правильного ответа', ''));

questionArray[numberQuestion].checkAnswer(numberAnswer);