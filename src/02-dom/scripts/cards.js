let left = document.getElementById("left");
// let btnAddCard = document.getElementById("btn-top-add");
// let btnDel = document.getElementsByClassName("btn-card-del");
// let btnAdd = document.getElementById("btn-add");
// let btnAfter = document.getElementById("btn-after");
let cardsList = document.getElementsByClassName("btn-card-del");
let cardIndex = 2;
// let origCard = document.getElementsByClassName("card")[cardIndex - 2];

const functionsCards = {
	addNewCard: () => {
		let origCard = document.getElementsByClassName("card")[0];
		let dupCard = origCard.cloneNode(true);

		console.log(dupCard);
		left.appendChild(dupCard);
		//c change id and text content after appending clone
		document.getElementsByClassName("card")[cardIndex - 1].setAttribute("id", `box-${cardIndex}`);
		document.getElementsByClassName("btn-card-del")[cardIndex - 1].setAttribute("id", `btn-del-${cardIndex}`);
		document.getElementsByClassName("card-text-content")[cardIndex - 1].textContent = `Card-${cardIndex}`;
		cardIndex++;

		return true;
	},
	onAddCardClicked: () => {
		console.log("add clicked");
		functionsCards.addNewCard();
	},
	removeCurrCard: () => {
		/*
		e.preventDefault();
		if (e.target.tagName === "button") {
			left.remove(e.target.parent);
		}
		*/
		let origCard = document.getElementsByClassName("card")[0];
		origCard.parentNode.removeChild(origCard);

		return true;
	},
	onDelBtnClicked: () => {
		console.log("delete clicked");
		functionsCards.removeCurrCard();
		return true;
	}
};
// btnAddCard.addEventListener("click", functionsCards.onAddCardClicked);
// btnDel.addEventListener("click", functionsCards.onDelBtnClicked);

export default functionsCards;
