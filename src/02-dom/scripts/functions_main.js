import functions from "./functions.js";
//====================define variables====================
let btnAdd = document.getElementById("btn-add");
let btnDel = document.getElementById("btn-del");
let btnShow = document.getElementById("btn-show");
var inputField = document.getElementById("input-add");
//====================add event listeners below====================
function checkInputLength() {
	return inputField.value.length;
}

btnAdd.addEventListener("click", () => {
	if (checkInputLength() > 0) {
		console.log("add button clicked");
		functions.addListItem();
	}
	return true;
});

inputField.addEventListener("keypress", e => {
	if (checkInputLength() > 0 && e.keyCode === 13) {
		console.log("enter key pressed");
		functions.addListItem();
	}
	return true;
});

btnDel.addEventListener("click", () => {
	console.log("delete button clicked");
	functions.removeListItem();
	return true;
});

btnShow.addEventListener("click", () => {
	console.log("show clicked");
	functions.showListItems();
});
