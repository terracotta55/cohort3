let btnAdd = document.getElementById("btn-add");
let btnDel = document.getElementById("btn-del");
let inputField = document.getElementById("input-add");
let orderedList = document.getElementById("list-parent");
let listOfItems = document.getElementById("list-parent").getElementsByTagName("li");

// let checkbox = document.querySelector("input[type=checkbox]");

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
		// list.removeChild(list.childNodes[listLength - 1]);
		// listLength -= listLength;
		return true;
	},
	onDelButtonClicked: () => {
		console.log("delete button clicked");
		functions.removeListItem();
		// let list = document.getElementById("list-parent");
		// let listLength = list.childElementCount;
		// console.log("delete clicked", list.childElementCount);
		// listLength -= listLength;
		// functions.removeListItem();
		return true;
	}
};

btnAdd.addEventListener("click", functions.onAddButtonClicked);
inputField.addEventListener("keypress", functions.addOnKeypress);
btnDel.addEventListener("click", functions.onDelButtonClicked);

export default functions;
/*
checkbox playground
using checkboxes and labels
*/

/*
	let input = document.createElement("input");
	input.setAttribute("type", "checkbox");
	input.setAttribute("id", "list-item");
	let inputLabel = document.createElement("label");
	inputLabel.setAttribute("for", "list-item");
	li.appendChild(input);
	li.appendChild(inputLabel);
	input.appendChild(inputLabel);
	inputLabel.appendChild(document.createTextNode(inputField.value));
	li.appendChild(document.createTextNode(inputField.value));
	orderedList.appendChild(li);
*/

/*
checkbox.addEventListener("change", function() {
	if (this.checked) {
		// Checkbox is checked..
		console.log("this item is checked");
		this.style.color = "red";
	} else {
		// Checkbox is not checked..
	}
});
*/
