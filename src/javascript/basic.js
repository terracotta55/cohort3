//let numberInput = Number(userInput.value);
console.log("Hello World from basic.js");

let button = document.getElementById("clickButton");
let mouseOver = document.getElementById("main");
let userInput = document.getElementById("input");

button.addEventListener("click", onButtonClicked);
mouseOver.addEventListener("mouseover", mouseChangeText);
mouseOver.addEventListener("mouseout", mouseReturnText);
userInput.addEventListener("keypress", onPressEnter);

function mouseChangeText() {
  document.getElementById("main").innerHTML = "Moused Over!";
  document.getElementById("main").style.color = "greenyellow";
}

function mouseReturnText() {
  document.getElementById("main").innerHTML = "Simple Number Checker";
  document.getElementById("main").style.color = "aquamarine";
}

function onButtonClicked() {
  if (inputLength() > 0) {
    console.log("I am the button clicked event");
    collectUserInput();
  }
}

function onPressEnter(event) {
  if (event.keyCode === 13) {
    console.log("I am the keypress event");
    collectUserInput();
    // onButtonClicked();
  }
}

function collectUserInput() {
  let numInput = Number(userInput.value);
  console.log(numInput);
  console.log(size(numInput));
  let result = size(numInput);
  document.getElementById("msg").innerHTML = result;
  userInput.value = "";
}

function size(n) {
  if (n < 20) {
    return n + " is a small number";
  } else if (n < 100) {
    return n + " is a medium number";
  } else {
    return n + " is a large number";
  }
  // n < 10 ? "small" : n > 10 ? "med" : "large";
}

function inputLength() {
  return userInput.value.length;
}
