var ask = {
  question: result.questionList[0],
  questionN: 0,
  answer: result.answerList[0],
  canBack: false,
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

}

function next(isRev) {
  ask.questionN += isRev ? -1: 1;
  ask.canBack = ask.canNext = true;
  if (questionList[ask.questionN]) {
    ask.question = result.questionList[ask.questionN];
    ask.answer   = result.answerList[ask.questionN];
  }
  if (!questionList[ask.questionN + 1]) {
    ask.canNext = false;
  }
  if (!questionList[ask.questionN - 1]) {
    ask.canBack = false;
  }  
}