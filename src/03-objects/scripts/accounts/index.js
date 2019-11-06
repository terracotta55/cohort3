import { Account, AccountController } from "./account.js";
import { accountCards } from "./accountfunctions.js";

const acctDisplayOutput = document.querySelector(".para-right-card-output");
const newAccountController = new AccountController("Dalton-Accounts");

let acctClassKeyCounter = 0;
right.addEventListener("click", e => {
	if (e.target.id === "btn-right-add") {
		console.log(`add clicked`);
		acctClassKeyCounter++;
		accountCards.createCardDiv();
		newAccountController.addAccount(Number(acctClassKeyCounter), inputName.value, Account.formatDisplayValue(inputBalance.value));
		inputName.value = inputBalance.value = "";
		console.log(newAccountController.accountNamesArr);
	} else if (e.target.id === "btn-right-total") {
		console.log(`total clicked`);
		let total = newAccountController.totalBalance();
		acctDisplayOutput.textContent = `Total account balance is $${total}`;
	} else if (e.target.id === "btn-right-highest") {
		console.log(`highest clicked`);
		let highest = newAccountController.highestBalance();
		acctDisplayOutput.textContent = `Highest balance is $${highest.accountBalance} in "${highest.accountName}"`;
	} else if (e.target.id === "btn-right-lowest") {
		console.log(`lowest clicked`);
		let lowest = newAccountController.lowestBalance();
		acctDisplayOutput.textContent = `Lowest balance is $${lowest.accountBalance} in "${lowest.accountName}"`;
	} else if (e.target.id === "btn-right-length") {
		console.log(`length clicked`);
		let length = newAccountController.accountsList.length;
		acctDisplayOutput.textContent = `You have ${length} account(s)`;
	}
});

leftChild.addEventListener("click", e => {
	if (e.target.className === "btn-card-dep") {
		console.log(`deposit clicked`);
		let currentCard = e.toElement.parentElement;
		let amount = Number(currentCard.children[1].value);
		if (amount > 0) {
			let currentCardKeyAttribute = Number(currentCard.getAttribute("key"));
			let currentCardIndex = newAccountController.accountNamesArr.findIndex(arrayItem => arrayItem.key === currentCardKeyAttribute);
			newAccountController.accountNamesArr[currentCardIndex].deposit(amount);
			currentCard.children[8].textContent = `Deposit: $${amount}`;
			currentCard.children[1].value = "";
		}
	} else if (e.target.className === "btn-card-wth") {
		console.log(`withdraw clicked`);
		let currentCard = e.toElement.parentElement;
		let amount = Number(currentCard.children[1].value);
		if (amount > 0) {
			let currentCardKeyAttribute = Number(currentCard.getAttribute("key"));
			let currentCardIndex = newAccountController.accountNamesArr.findIndex(arrayItem => arrayItem.key === currentCardKeyAttribute);
			newAccountController.accountNamesArr[currentCardIndex].withdraw(amount);
			currentCard.children[8].textContent = `Withdraw: $${amount}`;
			currentCard.children[1].value = "";
		}
	} else if (e.target.className === "btn-card-bal") {
		console.log(`balance clicked`);
		let currentCard = e.toElement.parentElement;
		let currentCardKeyAttribute = Number(currentCard.getAttribute("key"));
		let currentCardIndex = newAccountController.accountNamesArr.findIndex(arrayItem => arrayItem.key === currentCardKeyAttribute);
		let balance = newAccountController.accountNamesArr[currentCardIndex].balance();
		currentCard.children[8].textContent = `Balance: $${balance}`;
		currentCard.children[1].value = "";
	} else if (e.target.className === "btn-card-del") {
		console.log(`delete clicked`);
		let currentCard = e.toElement.parentElement;
		let currentCardKeyAttribute = currentCard.getAttribute("key");
		let currentCardName = currentCard.children[0].textContent;
		newAccountController.removeAccount(currentCardKeyAttribute);
		accountCards.removeCurrentCard(currentCard, leftChild);
		acctDisplayOutput.textContent = `"${currentCardName}" account was deleted`;
	}
});
