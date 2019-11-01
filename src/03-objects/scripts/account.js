export class Account {
	constructor(accountName, accountBalance) {
		this.accountName = accountName;
		this.accountBalance = accountBalance;
	}
	deposit(depAmt) {
		this.accountBalance += depAmt;
		console.log(this.accountBalance);
	}
	withdraw(wthAmt) {
		if (wthAmt > this.accountBalance) {
			throw new Error("Insufficient Funds!");
		}
		this.accountBalance -= wthAmt;
		console.log(this.accountBalance);
	}
	balance() {
		console.log(this.accountBalance);
		return this.accountBalance;
	}
	static formatDisplayValue(userInput) {
		return Math.round(userInput * 100) / 100;
	}
}

export class AccountController {
	constructor(accountOwner) {
		const _accountsList = new WeakMap();
		_accountsList.set(this, _accountsList);
		this.accountNamesArr = [];
		this.accountOwner = accountOwner;
	}
	get accountsList() {
		return this.accountNamesArr;
	}
	addAccount(accountName, accountBalance) {
		let newAccount = new Account(accountName, accountBalance);
		this.accountNamesArr.push(newAccount);
		return newAccount;
	}
	totalBalance() {
		const total = this.accountNamesArr.reduce((accumulator, account) => accumulator + account.accountBalance, 0);
		return total;
	}
	highestBalance() {
		const highest = this.accountNamesArr.reduce((accumulator, account) => {
			if (account.accountBalance > accumulator) return account.accountBalance;
			else return accumulator;
		}, 0);
		return highest;
	}
	lowestBalance() {
		const lowest = this.accountNamesArr.reduce((accumulator, account) => {
			if (account.accountBalance < accumulator) return account.accountBalance;
			else return accumulator;
		}, this.accountNamesArr[0].accountBalance);
		return lowest;
	}
	removeAccount(toBeRemoved) {
		const accountNamesArr = this.accountNamesArr.filter(account => account.accountName != toBeRemoved);
		this.accountNamesArr = accountNamesArr;
		return this.accountNamesArr;
	}
}

export const accountCards = {
	createCardDiv: () => {
		let newCardDiv = document.createElement("div");
		newCardDiv.className = "card-div";
		leftChild.appendChild(newCardDiv);
		// newCardDiv.textContent = `${inputName.value}`;
		// inputName.value = "";
		accountCards.createCardBtns(newCardDiv);
		console.log(newCardDiv);
		return newCardDiv;
	},
	createCardBtns: newCardDiv => {
		// newCardDiv.appendChild(document.createElement("br"));
		// newCardDiv.appendChild(document.createElement("br"));

		let pTitle = document.createElement("p");
		pTitle.className = "para-left-card-input";
		newCardDiv.appendChild(pTitle);
		pTitle.textContent = `${inputName.value}`;

		let cardInput = document.createElement("input");
		cardInput.className = "card-input";
		newCardDiv.appendChild(cardInput);

		newCardDiv.appendChild(document.createElement("br"));
		// newCardDiv.appendChild(document.createElement("br"));

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
		// inputBalance.value = "";

		return newCardDiv;
	},
	addCardBeforeCurrent: currentCard => {
		let newBeforeCard = document.createElement("div");
		newBeforeCard.className = "card-div";
		leftChild.insertBefore(newBeforeCard, currentCard);
		newBeforeCard.textContent = `Card - ${leftChild.childElementCount}`;

		cardsFunctions.createCardBtns(newBeforeCard);

		return newBeforeCard;
	},
	addCardAfterCurrent: currentCard => {
		let newAfterCard = document.createElement("div");
		newAfterCard.className = "card-div";
		leftChild.insertBefore(newAfterCard, currentCard.nextSibling);
		newAfterCard.textContent = `Card - ${leftChild.childElementCount}`;

		cardsFunctions.createCardBtns(newAfterCard);

		return newAfterCard;
	},
	removeCurrentCard: currentCard => {
		currentCard.remove();
	}
};
