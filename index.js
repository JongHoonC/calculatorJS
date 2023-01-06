let viewScreen = document.getElementById("viewScreen");
function number(num) {
  if (viewScreen.value === "0") {
    viewScreen.value = num;
  } else {
    viewScreen.value += num;
  }
}

function del() {
  let length = viewScreen.value.length;
  if (length === 0) {
    return;
  } else {
    viewScreen.value = viewScreen.value.substr(0, length - 1);
  }
}

// 계산
function calculate() {
  viewScreen.value = eval(viewScreen.value);
}

// clear
function clearviewScreen() {
  viewScreen.value = "0";
}
