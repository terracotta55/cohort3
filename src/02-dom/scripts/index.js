const indexFunctions = {
	addListItem: () => {
		let li = document.createElement("li");
		li.appendChild(document.createTextNode("Item " + (listParent.childElementCount + 1)));
		listParent.appendChild(li);
	},
	removeListItem: () => {
		let listOfItems = listParent.children;
		let lastItem = listOfItems[listOfItems.length - 1];
		lastItem.parentNode.removeChild(lastItem);
	},
	showListItems: () => {
		let listOfItems = listParent.children;
		for (var i = 0; i < listOfItems.length; ++i) {
			// do something with items[i], which is a <li> element
			let li = document.createElement("li");
			showList.appendChild(li);
			li.appendChild(document.createTextNode(listOfItems[i].innerText));
		}
		return listOfItems;
	}
};

export default indexFunctions;
