import { Account, AccountController, accountCards } from "./account.js";

// const newAccount = new Account("", null);
// const cardInput = document.querySelector(".card-input");
// const userInput = document.getElementById("amountInput");
// const displayScreen = document.getElementById("amtDispValue");
// let userInputVal = Account.formatDisplayValue(userInput.value);
// const accountNamesArr = [];
let acctDisplayOutput = document.querySelector(".para-right-card-output");
const newAccountController = new AccountController("Dalton-Accounts");

right.addEventListener("click", e => {
	if (e.target.id === "btn-right-add") {
		console.log(`add clicked`);
		accountCards.createCardDiv();
		newAccountController.addAccount(inputName.value, Account.formatDisplayValue(inputBalance.value));
		inputName.value = "";
		inputBalance.value = "";
		console.log(newAccountController.accountNamesArr);
	} else if (e.target.id === "btn-right-total") {
		console.log(`total clicked`);
		let total = newAccountController.totalBalance();
		acctDisplayOutput.textContent = `Total Balance: $${total}`;
	} else if (e.target.id === "btn-right-highest") {
		console.log(`highest clicked`);
		let highest = newAccountController.highestBalance();
		acctDisplayOutput.textContent = `Highest Balance: $${highest}`;
	} else if (e.target.id === "btn-right-lowest") {
		console.log(`lowest clicked`);
		let lowest = newAccountController.lowestBalance();
		acctDisplayOutput.textContent = `Lowest Balance: $${lowest}`;
	}
});

leftChild.addEventListener("click", e => {
	if (e.target.className === "btn-card-dep") {
		console.log(`deposit clicked`);
		let currentCard = e.toElement.parentElement;
		let amount = Number(currentCard.children[1].value);
		if (amount > 0) {
			let currentCardName = currentCard.children[0].textContent;
			let currentCardIndex = newAccountController.accountNamesArr.findIndex(arrayItem => arrayItem.accountName === currentCardName);
			/*
			let currentCardIndex = -1;
			for (let i = 0; i < newAccountController.accountNamesArr.length; ++i) {
				if (newAccountController.accountNamesArr[i].accountName == currentCardName) {
					currentCardIndex = i;
					break;
				}
			}
			*/
			newAccountController.accountNamesArr[currentCardIndex].deposit(amount);
			currentCard.children[8].textContent = `Deposit: $${amount}`;
		}
	} else if (e.target.className === "btn-card-wth") {
		console.log(`withdraw clicked`);
		let currentCard = e.toElement.parentElement;
		let amount = Number(currentCard.children[1].value);
		if (amount > 0) {
			let currentCardName = currentCard.children[0].textContent;
			let currentCardIndex = newAccountController.accountNamesArr.findIndex(arrayItem => arrayItem.accountName === currentCardName);
			newAccountController.accountNamesArr[currentCardIndex].withdraw(amount);
			currentCard.children[8].textContent = `Withdraw: $${amount}`;
		}
	} else if (e.target.className === "btn-card-bal") {
		console.log(`balance clicked`);
		let balance = myAccount.highestBalance();
		// document.querySelector(".para-right-card-output").textContent = `Highest Balance: $${highest}`;
	} else if (e.target.className === "btn-card-del") {
		console.log(`delete clicked`);
		let lowest = myAccount.lowestBalance();
		// document.querySelector(".para-right-card-output").textContent = `Lowest Balance: $${lowest}`;
	}
});

/*
depBtn.addEventListener("click", () => {
	console.log("deposit clicked");
	let userInputVal = Account.formatDisplayValue(userInput.value);
	displayScreen.textContent = `Deposit: $${userInputVal}`;
	checkingAccount.deposit(userInputVal);
	userInput.value = "";
});

wthBtn.addEventListener("click", () => {
	console.log("withdraw clicked");
	let userInputVal = Account.formatDisplayValue(userInput.value);
	if (userInputVal > checkingAccount.balance()) {
		displayScreen.textContent = `Insufficient Funds!`;
	} else {
		checkingAccount.withdraw(userInputVal);
		displayScreen.textContent = `Withdrawal: $${userInputVal}`;
	}
	userInput.value = "";
});

balBtn.addEventListener("click", () => {
	console.log("balance clicked");
	let userInputVal = Account.formatDisplayValue(userInput.value);
	displayScreen.textContent = `Balance: $${checkingAccount.balance(userInputVal)}`;
	userInput.value = "";
});
*/

/*
functions.helloWorld();
accounts.helloAccounts();
console.table(myAccount);
console.log(`your account balance is ${myAccount.balance()}`);
*/
