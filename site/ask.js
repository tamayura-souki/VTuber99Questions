var ask = {
  question: result.questionList[0],
  questionN: 0,
  answer: result.answerList[0],
  canBack: true,
  canNext: true,
  seen: true
};

var askVue = new Vue({
  el: "#ask",
  data: ask
});

function input() {
  result.answerList[ask.questionN] = ask.answer;
}

function back() {
  ask.questionN--;
  if (questionList[ask.questionN]) {
    ask.question = result.questionList[ask.questionN];
    ask.answer   = result.answerList[ask.questionN];
  }
  if (!questionList[ask.questionN - 1]) {
    ask.canBack = false;
  }  
}

function next() {
  ask.questionN++;
  if (questionList[ask.questionN]) {
    ask.question = result.questionList[ask.questionN];
    ask.answer   = result.answerList[ask.questionN];
  }
  if (!questionList[ask.questionN + 1]) {
    ask.canNext = false;
  }
}