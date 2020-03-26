var ask = {
  question: result.questionList[0],
  questionN: 0,
  answer: result.answerList[0],
  seen: true
};

var askVue = new Vue({
  el: "#ask",
  data: ask
});

function input() {
  result.answerList[ask.questionN] = ask.answer;
}

function next(isRev) {
  var step = isRev ? -1 : 1;
  if (questionList[ask.questionN + step]) {
    ask.questionN += step;
    ask.question = result.questionList[ask.questionN];
    ask.answer = result.answerList[ask.questionN];
  }
}
