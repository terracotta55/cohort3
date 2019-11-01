export const accountCards = {
	createCardDiv: () => {
		let newCardDiv = document.createElement("div");
		newCardDiv.className = "card-div";
		leftChild.appendChild(newCardDiv);
		accountCards.createCardBtns(newCardDiv);
		console.log(newCardDiv);
		return newCardDiv;
	},
	createCardBtns: newCardDiv => {
		let pTitle = document.createElement("p");
		pTitle.className = "para-left-card-input";
		newCardDiv.appendChild(pTitle);
		pTitle.textContent = `${inputName.value}`;

		let cardInput = document.createElement("input");
		cardInput.className = "card-input";
		newCardDiv.appendChild(cardInput);

		newCardDiv.appendChild(document.createElement("br"));

		let buttonDeposit = document.createElement("button");
		buttonDeposit.className = "btn-card-dep";
		buttonDeposit.textContent = "Deposit";
		newCardDiv.appendChild(buttonDeposit);

		let buttonWithdraw = document.createElement("button");
		buttonWithdraw.className = "btn-card-wth";
		buttonWithdraw.textContent = "Withdraw";
		newCardDiv.appendChild(buttonWithdraw);

		let buttonBalance = document.createElement("button");
		buttonBalance.className = "btn-card-bal";
		buttonBalance.textContent = "Balance";
		newCardDiv.appendChild(buttonBalance);

		newCardDiv.appendChild(document.createElement("br"));

		let buttonDelete = document.createElement("button");
		buttonDelete.className = "btn-card-del";
		buttonDelete.textContent = "Delete";
		newCardDiv.appendChild(buttonDelete);

		let pOutput = document.createElement("p");
		pOutput.className = "para-left-card-output";
		newCardDiv.appendChild(pOutput);
		pOutput.textContent = `Account Balance: $${inputBalance.value}`;

		return newCardDiv;
	},
	removeCurrentCard: (currentCard, leftChild) => {
		leftChild.remove(currentCard);
	}
};
