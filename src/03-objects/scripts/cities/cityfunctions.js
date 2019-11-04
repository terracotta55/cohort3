export const cityCards = {
	createCardDiv: () => {
		let newCardDiv = document.createElement("div");
		newCardDiv.className = "card-div";
		leftChild.appendChild(newCardDiv);
		cityCards.createCardBtns(newCardDiv);
		console.log(newCardDiv);
		return newCardDiv;
	},
	createCardBtns: newCardDiv => {
		let pTitle = document.createElement("p");
		pTitle.className = "para-left-card-input";
		newCardDiv.appendChild(pTitle);
		pTitle.textContent = `${inputCity.value}`;

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
		leftChild.remove(currentCard);
	}
};
