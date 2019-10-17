let btnAdd = document.getElementById("btn-add");
let btnDel = document.getElementById("btn-del");
let btnShow = document.getElementById("btn-show");
let inputField = document.getElementById("input-add");
let orderedList = document.getElementById("list-parent");
let listOfItems = document.getElementById("list-parent").getElementsByTagName("li");
let showListOl = document.getElementById("final-list");

const functions = {
	add: (num1, num2) => {
		return num1 + num2;
	},
	sub: (num1, num2) => {
		return num1 - num2;
	},
	checkInputLength: () => {
		return inputField.value.length;
	},
	addListItem: () => {
		let li = document.createElement("li");
		orderedList.appendChild(li);
		li.appendChild(document.createTextNode(inputField.value));
		inputField.value = "";
	},
	onAddButtonClicked: () => {
		if (functions.checkInputLength() > 0) {
			console.log("add button clicked");
			functions.addListItem();
		}
		return true;
	},
	addOnKeypress: event => {
		if (functions.checkInputLength() > 0 && event.keyCode === 13) {
			console.log("enter key pressed");
			functions.addListItem();
		}
		return true;
	},
	removeListItem: () => {
		let lastItem = listOfItems[listOfItems.length - 1];
		lastItem.parentNode.removeChild(lastItem);
		return true;
	},
	onDelButtonClicked: () => {
		console.log("delete button clicked");
		functions.removeListItem();
		return true;
	},
	showListItems: () => {
		for (var i = 0; i < listOfItems.length; ++i) {
			// do something with items[i], which is a <li> element
			let li = document.createElement("li");
			showListOl.appendChild(li);
			li.appendChild(document.createTextNode(listOfItems[i].innerText));
		}
		listOfItems = []; //to prevent repeat paste on click
		return true;
	},
	onShowButtonClicked: () => {
		console.log("show clicked");
		functions.showListItems();
	}
};
btnAdd.addEventListener("click", functions.onAddButtonClicked);
inputField.addEventListener("keypress", functions.addOnKeypress);
btnDel.addEventListener("click", functions.onDelButtonClicked);
btnShow.addEventListener("click", functions.onShowButtonClicked);

export default functions;
