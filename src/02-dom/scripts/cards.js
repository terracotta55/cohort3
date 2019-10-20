let left = document.getElementById("left");
let cardIndex = 0;
/*
let cardsList = document.getElementsByClassName("btn-card-del");
let leftClass = document.getElementsByClassName("card-parent");
const origCard = document.getElementsByClassName("card")[0];
*/

const functionsCards = {
	addNewCard: () => {
		const div = document.createElement("div");
		div.className = "card-one";
		div.id = "box-one";

		let p = document.createElement("p");
		p.className = "card-text-content";
		p.textContent = `Card ${cardIndex}`;
		div.appendChild(p);

		let buttonBefore = document.createElement("button");
		buttonBefore.className = "btn-card-before";
		buttonBefore.textContent = "Add Card Before";
		div.appendChild(buttonBefore);

		let buttonAfter = document.createElement("button");
		buttonAfter.className = "btn-card-after";
		buttonAfter.textContent = "Add Card After";
		div.appendChild(buttonAfter);

		let buttonDel = document.createElement("button");
		buttonDel.className = "btn-card-del";
		buttonDel.textContent = "Delete Card";
		div.appendChild(buttonDel);

		console.log(div);

		return div;
		/*
		let origCard = e.target.parentNode.parentNode.childNodes[3];
		let dupCard = origCard.cloneNode(true);
		console.log(e.target.parentNode.parentNode.childNodes[3]);
		console.log(dupCard);
		left.appendChild(dupCard);
		document.getElementsByClassName("card")[cardIndex].setAttribute("id", `box-${cardIndex}`);
		document.getElementsByClassName("card-text-content")[cardIndex].textContent = `Card-${cardIndex}`;
		document.getElementsByClassName("btn-card-before")[cardIndex].setAttribute("id", `btn-before-${cardIndex}`);
		document.getElementsByClassName("btn-card-after")[cardIndex].setAttribute("id", `btn-after-${cardIndex}`);
		document.getElementsByClassName("btn-card-del")[cardIndex].setAttribute("id", `btn-del-${cardIndex}`);
		cardIndex++;
		*/
	},
	onAddCardClicked: () => {
		cardIndex++;
		console.log("event listener: add");
		left.appendChild(functionsCards.addNewCard());
	},
	removeCurrCard: e => {
		// e.target is the clicked element
		if (e.target.tagName == "BUTTON") {
			let btnClass = e.target.getAttribute("class");
			console.log("removeCurrCard function:", btnClass);
			e.target.parentNode.remove(); //adding another parentNode will delete id:left
		}
		return true;
	},
	addBeforeCard: e => {
		if (e.target.tagName == "BUTTON") {
			cardIndex++;
			let btnClass = e.target.getAttribute("class");
			let currCard = e.target.parentNode; // parentnode of the button i.e the card
			let beforeCard = functionsCards.addNewCard();
			console.log("addBeforeCard function:", btnClass);
			left.insertBefore(beforeCard, currCard);
		}
		return true;
	},
	addAfterCard: e => {
		if (e.target.tagName == "BUTTON") {
			cardIndex++;
			let btnClass = e.target.getAttribute("class");
			let nextCard = e.target.parentNode.nextSibling; // sibling of the parent (uncle/aunt)
			let cardToBeAdded = functionsCards.addNewCard();
			console.log("addAfterCard function:", btnClass);
			left.insertBefore(cardToBeAdded, nextCard);
		}
		return true;
	}
};

export default functionsCards;
