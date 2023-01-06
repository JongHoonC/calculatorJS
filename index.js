function addInput(num) {
  // 숫자나 기호가 불려지면 그대로 화면에 출력
  let viewScreen = document.getElementById("viewScreen");
  if (viewScreen.value == "0") {
    // 단순 초기값인 경우
    viewScreen.value = num;
  } else {
    viewScreen.value += num; // 출력창에 버튼의 문자 덧붙임
  }
}

function backward() {
  let viewScreen = document.getElementById("viewScreen");
  let length = viewScreen.value.length;
  if (length == 0) {
    return;
  } else {
    viewScreen.value = viewScreen.value.substr(0, length - 1);
  }
}
function calculate() {
  let viewScreen = document.getElementById("viewScreen");
  viewScreen.value = eval(viewScreen.value);
}
function clearviewScreen() {
  let viewScreen = document.getElementById("viewScreen");
  viewScreen.value = "0";
}
