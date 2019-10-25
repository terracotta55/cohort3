const cardsFunctions = {
	createCardDiv: () => {
		// create only div first because of childElementCount
		let newCardDiv = document.createElement("div");
		newCardDiv.className = "card-div";
		leftChild.appendChild(newCardDiv);
		newCardDiv.textContent = `Card - ${leftChild.childElementCount}`;

		cardsFunctions.createCardBtns(newCardDiv);
		console.log(newCardDiv);
		return newCardDiv;
	},
	createCardBtns: newCardDiv => {
		newCardDiv.appendChild(document.createElement("br"));
		newCardDiv.appendChild(document.createElement("br")); // additional for aesthetics

		let buttonBefore = document.createElement("button");
		buttonBefore.className = "btn-card-before";
		buttonBefore.textContent = "Add Card Before";
		newCardDiv.appendChild(buttonBefore);

		let buttonAfter = document.createElement("button");
		buttonAfter.className = "btn-card-after";
		buttonAfter.textContent = "Add Card After";
		newCardDiv.appendChild(buttonAfter);

		newCardDiv.appendChild(document.createElement("br"));

		let buttonDel = document.createElement("button");
		buttonDel.className = "btn-card-del";
		buttonDel.textContent = "Delete Card";
		newCardDiv.appendChild(buttonDel);

		return newCardDiv;
	},
	addCardBeforeCurrent: currentCard => {
		/*
		if (e.target.tagName == "BUTTON") {
			cardIndex++;
			let btnClass = e.target.getAttribute("class");
			let currCard = e.target.parentNode; // parentnode of the button i.e the card
			let beforeCard = cardsFunctions.addNewCard();
			console.log("addBeforeCard function:", btnClass);
			left.insertBefore(beforeCard, currCard);
		}
		*/
		let newBeforeCard = document.createElement("div");
		newBeforeCard.className = "card-div";
		leftChild.insertBefore(newBeforeCard, currentCard);
		newBeforeCard.textContent = `Card - ${leftChild.childElementCount}`;

		cardsFunctions.createCardBtns(newBeforeCard);

		return newBeforeCard;
	},
	addCardAfterCurrent: currentCard => {
		/*
		if (e.target.tagName == "BUTTON") {
			cardIndex++;
			let btnClass = e.target.getAttribute("class");
			let nextCard = e.target.parentNode.nextSibling; // sibling of the parent (uncle/aunt)
			let cardToBeAdded = cardsFunctions.addNewCard();
			console.log("addAfterCard function:", btnClass);
			left.insertBefore(cardToBeAdded, nextCard);
		}
		*/
		let newAfterCard = document.createElement("div");
		newAfterCard.className = "card-div";
		leftChild.insertBefore(newAfterCard, currentCard.nextSibling);
		newAfterCard.textContent = `Card - ${leftChild.childElementCount}`;

		cardsFunctions.createCardBtns(newAfterCard);

		return newAfterCard;
	},
	removeCurrentCard: currentCard => {
		/*
		if (e.target.tagName == "BUTTON") {
			let btnClass = e.target.getAttribute("class");
			console.log("removeCurrCard function:", btnClass);
			e.target.parentNode.remove(); //adding another parentNode will delete div id=left
		}
		*/
		currentCard.remove();
	}
};

export default cardsFunctions;
