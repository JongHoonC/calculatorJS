function number(num) {
  let viewScreen = document.getElementById("viewScreen");
  if (viewScreen.value == "0") {
    viewScreen.value = num;
  } else {
    viewScreen.value += num;
  }
}

function del() {
  let viewScreen = document.getElementById("viewScreen");
  let length = viewScreen.value.length;
  if (length === 0) {
    return;
  } else {
    viewScreen.value = viewScreen.value.substr(0, length - 1);
  }
}

// 계산
function calculate() {
  let viewScreen = document.getElementById("viewScreen");
  viewScreen.value = eval(viewScreen.value);
}

// clear
function clearviewScreen() {
  let viewScreen = document.getElementById("viewScreen");
  viewScreen.value = "0";
}
