export const cityCards = {
	cardCount: 0,
	createCardDiv() {
		let newCardDiv = document.createElement("div");
		this.cardCount++;
		newCardDiv.className = "card-div";
		newCardDiv.setAttribute("key", cityCards.cardCount);
		leftChild.appendChild(newCardDiv);
		cityCards.createCardBtns(newCardDiv);
		return newCardDiv;
	},
	createCardBtns: newCardDiv => {
		let pCityName = document.createElement("p");
		pCityName.className = "para-left-card-name";
		newCardDiv.appendChild(pCityName);
		pCityName.textContent = `${inputCity.value}`;

		let cardInput = document.createElement("input");
		cardInput.className = "card-input";
		newCardDiv.appendChild(cardInput);

		newCardDiv.appendChild(document.createElement("br"));

		let buttonMovedIn = document.createElement("button");
		buttonMovedIn.className = "btn-card-moved-in";
		buttonMovedIn.textContent = "Moved In";
		newCardDiv.appendChild(buttonMovedIn);

		let buttonMovedOut = document.createElement("button");
		buttonMovedOut.className = "btn-card-moved-out";
		buttonMovedOut.textContent = "Moved Out";
		newCardDiv.appendChild(buttonMovedOut);

		let buttonHowBig = document.createElement("button");
		buttonHowBig.className = "btn-card-how-big";
		buttonHowBig.textContent = "How Big";
		newCardDiv.appendChild(buttonHowBig);

		newCardDiv.appendChild(document.createElement("br"));

		let buttonDeleteCity = document.createElement("button");
		buttonDeleteCity.className = "btn-card-del";
		buttonDeleteCity.textContent = "Remove City";
		newCardDiv.appendChild(buttonDeleteCity);

		let pOutput = document.createElement("p");
		pOutput.className = "para-left-card-output";
		newCardDiv.appendChild(pOutput);
		pOutput.textContent = `Initial Population: ${inputPopulation.value}`;

		return newCardDiv;
	},
	removeCurrentCard: (currentCard, leftChild) => {
		leftChild.removeChild(currentCard);
	}
};
