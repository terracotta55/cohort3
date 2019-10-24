import indexFunctions from "./index.js";

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
