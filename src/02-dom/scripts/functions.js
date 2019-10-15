let btnAdd = document.getElementById("btn-add");
let inputField = document.getElementById("input-add");
let orderedList = document.getElementById("list-parent");

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
		li.appendChild(document.createTextNode(inputField.value));
		orderedList.appendChild(li);
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
	}
};

btnAdd.addEventListener("click", functions.onAddButtonClicked);
inputField.addEventListener("keypress", functions.addOnKeypress);

export default functions;
