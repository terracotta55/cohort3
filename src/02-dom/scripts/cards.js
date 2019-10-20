let left = document.getElementById("left");
let leftClass = document.getElementsByClassName("card-parent");
let cardsList = document.getElementsByClassName("btn-card-del");
let cardIndex = 1;
const origCard = document.getElementsByClassName("card")[0];

const functionsCards = {
	addNewCard: e => {
		// let origCard = e.target.parentNode.parentNode.childNodes[3];
		let dupCard = origCard.cloneNode(true);
		console.log(e.target.parentNode.parentNode.childNodes[3]);
		console.log(dupCard);
		left.appendChild(dupCard);
		// change id and text content after appending clone
		document.getElementsByClassName("card")[cardIndex].setAttribute("id", `box-${cardIndex}`);
		document.getElementsByClassName("card-text-content")[cardIndex].textContent = `Card-${cardIndex}`;
		document.getElementsByClassName("btn-card-before")[cardIndex].setAttribute("id", `btn-before-${cardIndex}`);
		document.getElementsByClassName("btn-card-after")[cardIndex].setAttribute("id", `btn-after-${cardIndex}`);
		document.getElementsByClassName("btn-card-del")[cardIndex].setAttribute("id", `btn-del-${cardIndex}`);
		cardIndex++;

		return true;
	},
	onAddCardClicked: e => {
		console.log("add clicked");
		functionsCards.addNewCard(e);
	},
	removeCurrCard: e => {
		// e.target is the clicked element
		if (e.target.tagName == "BUTTON") {
			let btnId = e.target.getAttribute("id");
			console.log("removeCurrCard called:", btnId);
			e.target.parentNode.remove(); //adding another parentNode will delete id:left
		}
		/*
			let currCard = document.getElementsByClassName("card")[0];
			currCard.remove(e.target.parent);
		*/
		// let currCard = document.getElementById(btnId);
		// document.getElementById("box-1").removeChild(currCard);
		// currCard.remove();
		// e.parentNode.removeChild(e.parentNode);
		// document.getElementById("box1").remove(e.target.id == btnId);
		// this.parentNode.remove();
		// let origCard = document.getElementsByClassName("card")[0];
		// origCard.parentNode.removeChild(origCard);
		return true;
	},
	addBeforeCard: e => {
		console.log("addBeforeCard called:");
		return true;
	},
	addAfterCard: e => {
		console.log("addAfterCard called:");
		return true;
	}
};

export default functionsCards;
