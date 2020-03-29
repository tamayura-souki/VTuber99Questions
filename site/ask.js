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

const body_tag = document.querySelector("body");
body_tag.onkeydown = keyDown;

function keyDown(e) {
  switch (e.keyCode) {
    case 13: case 39: case 40:
    next(false);
    break;

    case 37: case 38:
    next(true);
    break;
  }

}

function input() {
  result.answerList[ask.questionN] = ask.answer;
}

function next(isRev) {
  input();
  var step = isRev ? -1 : 1;
  if (questionList[ask.questionN + step]) {
    ask.questionN += step;
    ask.question = result.questionList[ask.questionN];
    ask.answer = result.answerList[ask.questionN];
  }
}
