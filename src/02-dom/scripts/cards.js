let btnAddCard = document.getElementById("btn-top-add");
let btnDel = document.getElementById("btn-del");
let btnAdd = document.getElementById("btn-add");
let btnAfter = document.getElementById("btn-after");

const functionsCards = {
	addNewCard: () => {
		let origCard = document.getElementById("box-1");
		console.log(origCard);
		let dupCard = origCard.cloneNode(true);
		let left = document.getElementById("left");
		left.appendChild(dupCard);
	},
	onAddCardClicked: () => {
		console.log("add clicked");
		functionsCards.addNewCard();
	},
	removeListItem: () => {},
	onDelButtonClicked: () => {}
};
btnAddCard.addEventListener("click", functionsCards.onAddCardClicked);
// btnDel.addEventListener("click", functionsCards.onDelButtonClicked);

export default functionsCards;
