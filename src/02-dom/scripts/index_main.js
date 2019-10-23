import indexFunctions from "./index.js";
//====================define variables====================
// let btnAdd = document.getElementById("btn-add");
// let btnDel = document.getElementById("btn-del");
// let btnShow = document.getElementById("btn-show");

//====================add event listeners below====================

btnAdd.addEventListener("click", () => {
	console.log("add button clicked");
	indexFunctions.addListItem();
});

btnDel.addEventListener("click", () => {
	console.log("delete button clicked");
	indexFunctions.removeListItem();
});

btnShow.addEventListener("click", () => {
	console.log("show clicked");
	indexFunctions.showListItems();
});
