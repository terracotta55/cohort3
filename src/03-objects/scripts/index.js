import { Account, AccountController, accountCards } from "./account.js";

const newAccount = new Account("", null);
const cardInput = document.querySelector(".card-input");
// const userInput = document.getElementById("amountInput");
// const displayScreen = document.getElementById("amtDispValue");
// let userInputVal = Account.formatDisplayValue(userInput.value);
// const accountNamesArr = [];
const newAccountController = new AccountController("Dalton's Accounts");
// let acctDisplayOutput = document.querySelector("#para-left-card-output");

right.addEventListener("click", e => {
	if (e.target.id === "btn-right-add") {
		console.log(`add clicked`);
		accountCards.createCardDiv();
		newAccountController.addAccount(inputName.value, Account.formatDisplayValue(inputBalance.value));
		// newAccount.deposit(inputName.value, Account.formatDisplayValue(inputBalance.value));
		inputName.value = "";
		inputBalance.value = "";
		console.log(newAccountController.accountNamesArr);
		// console.log(newAccount);
	} else if (e.target.id === "btn-right-total") {
		console.log(`total clicked`);
		let total = newAccountController.totalBalance();
		document.querySelector(".para-right-card-output").textContent = `Total Balance: $${total}`;
	} else if (e.target.id === "btn-right-highest") {
		console.log(`highest clicked`);
		let highest = newAccountController.highestBalance();
		document.querySelector(".para-right-card-output").textContent = `Highest Balance: $${highest}`;
	} else if (e.target.id === "btn-right-lowest") {
		console.log(`lowest clicked`);
		let lowest = newAccountController.lowestBalance();
		document.querySelector(".para-right-card-output").textContent = `Lowest Balance: $${lowest}`;
	}
});

leftChild.addEventListener("click", e => {
	if (e.target.className === "btn-card-dep") {
		console.log(`deposit clicked`);
		let currentAccount = e.toElement.parentElement;
		console.log(currentAccount.children[1].value);
		let amount = Number(currentAccount.children[1].value);
		if (amount > 0) {
			let currentAccountType = currentAccount.children[0].textContent;
			let CurrentAccountIndex = newAccountController.accountNamesArr.findIndex(itm => {
				console.log(itm.accountName);
				itm.accountName === currentAccountType;
			});

			console.log(currentAccountType);
			console.log(CurrentAccountIndex);
			console.log(newAccountController.accountNamesArr[0]);
			newAccountController.accountNamesArr[CurrentAccountIndex].deposit(amount);
			// currentAccount.children[1].value = "";
			// display.textContent = `${amount}$ has been deposited to your ${Mason.Accounts[CurrentAccountIndex].accountType}`;
			console.log(currentAccount.balance());
		}
		// let newAccount = new Account();
		// accountCards.createCardDiv();
		// myAccount.addAccount(inputName.value, Number(inputBalance.value));
	} else if (e.target.id === "btn-card-wth") {
		console.log(`withdraw clicked`);
		let total = myAccount.totalBalance();

		// document.querySelector(".para-right-card-output").textContent = `Total Balance: $${total}`;
	} else if (e.target.id === "btn-card-bal") {
		console.log(`balance clicked`);
		let balance = myAccount.highestBalance();
		// document.querySelector(".para-right-card-output").textContent = `Highest Balance: $${highest}`;
	} else if (e.target.id === "btn-card-del") {
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
