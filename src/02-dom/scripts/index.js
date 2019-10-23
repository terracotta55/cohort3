let list = document.getElementById("list-parent");
let showListOl = document.getElementById("final-list");

const indexFunctions = {
	addListItem: () => {
		let orderedList = document.getElementById("list-parent");
		let inputField = document.getElementById("input-add");
		let li = document.createElement("li");
		orderedList.appendChild(li);
		li.appendChild(document.createTextNode(inputField.value));
		inputField.value = "";
	},
	removeListItem: () => {
		let listOfItems = list.getElementsByTagName("li");
		let lastItem = listOfItems[listOfItems.length - 1];
		lastItem.parentNode.removeChild(lastItem);
		return true;
	},
	showListItems: () => {
		let listOfItems = list.getElementsByTagName("li");
		for (var i = 0; i < listOfItems.length; ++i) {
			// do something with items[i], which is a <li> element
			let li = document.createElement("li");
			showListOl.appendChild(li);
			li.appendChild(document.createTextNode(listOfItems[i].innerText));
		}
		/*
		listOfItems = []; 
		*/
		return listOfItems;
	}
};

export default indexFunctions;
