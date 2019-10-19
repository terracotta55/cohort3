let left = document.getElementById("left");
// let btnAddCard = document.getElementById("btn-top-add");
// let btnDel = document.getElementById("btn-del");
// let btnAdd = document.getElementById("btn-add");
// let btnAfter = document.getElementById("btn-after");

const functionsCards = {
	addNewCard: () => {
		let origCard = document.getElementById("box-1");
		let dupCard = origCard.cloneNode(true);
		let left = document.getElementById("left");
		console.log(origCard);
		left.appendChild(dupCard);
		return true;
	},
	onAddCardClicked: () => {
		console.log("add clicked");
		functionsCards.addNewCard();
	},
	removeCurrCard: e => {
		if (e.target.tagName === "button") {
			left.remove(e.target.parent);
			// e.target.parentNode.remove();
		}
		return true;
	},
	onDelBtnClicked: e => {
		console.log("del clicked");
		functionsCards.removeCurrCard(e);
		return true;
	}
};
// btnAddCard.addEventListener("click", functionsCards.onAddCardClicked);
// btnDel.addEventListener("click", functionsCards.onDelBtnClicked);

export default functionsCards;
