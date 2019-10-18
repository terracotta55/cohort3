let btnAddCard = document.getElementById("btn-add-card");

const functionsCards = {
	addNewCard: () => {
		let origCard = document.body.getElementsByTagName("main")[0];
		console.log(origCard);
		let dupCard = origCard.cloneNode(true);

		// let main = document.getElementsByTagName("main");
		document.body.appendChild(dupCard);
	},
	onAddCardClicked: () => {
		console.log("add clicked");
		functionsCards.addNewCard();
	}
};
btnAddCard.addEventListener("click", functionsCards.onAddCardClicked);

export default functionsCards;
