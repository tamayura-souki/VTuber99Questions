var questionList = [];
var answerList = [];

const xhr = new XMLHttpRequest();
var data;
xhr.open("GET", "../questions.md", false);
xhr.onload = () => {
  data = xhr.responseText;
};
xhr.onerror = () => {
  console.log("load error!");
};

xhr.send();

questionList = data.split("\n");
questionList = questionList.map((value, i, array) => {
  return value.replace("- ", "");
});
questionList = questionList.filter(x => x.length > 1);

// なんでもいいから初期化してみる
answerList = Array(questionList.length);

Vue.component("list-items", {
  props: ["item"],
  template: "<li>{{item}}</li>"
});

var result = {
  questionList: questionList,
  answerList: answerList,
  seen: false
};

var resultVue = new Vue({
  el: "#result",
  data: result
});

function showResult() {
  if (window.confirm("回答を終了しますか？")) {
    result.seen = true;
    ask.seen = false;
  }
}
