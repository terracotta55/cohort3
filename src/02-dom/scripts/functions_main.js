import functions from "./functions.js";

let btnAdd = document.getElementById("btn-add");
let btnDel = document.getElementById("btn-del");
let btnShow = document.getElementById("btn-show");
var inputField = document.getElementById("input-add");
/*
add event listeners below
*/

btnAdd.addEventListener("click", functions.onAddButtonClicked);
inputField.addEventListener("keypress", functions.addOnKeypress);
btnDel.addEventListener("click", functions.onDelButtonClicked);
btnShow.addEventListener("click", functions.onShowButtonClicked);
