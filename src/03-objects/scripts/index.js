import { Account, AccountController } from "./account.js";

const myAccount = new Account("checkingAccount", 100);
const userInput = document.getElementById("amountInput");
const displayScreen = document.getElementById("amtDispValue");

depBtn.addEventListener("click", () => {
	console.log("deposit clicked");
	let userInputVal = Account.formatDisplayValue(userInput.value);
	displayScreen.textContent = `Balance: $${myAccount.deposit(userInputVal)}`;
	userInput.value = "";
});

wthBtn.addEventListener("click", () => {
	console.log("withdraw clicked");
	let userInputVal = Account.formatDisplayValue(userInput.value);
	displayScreen.textContent = `Balance: $${myAccount.withdraw(userInputVal)}`;
	userInput.value = "";
});

balBtn.addEventListener("click", () => {
	console.log("balance clicked");
	let userInputVal = Account.formatDisplayValue(userInput.value);
	displayScreen.textContent = `Balance: $${myAccount.balance(userInputVal)}`;
	userInput.value = "";
});

/*
functions.helloWorld();
accounts.helloAccounts();
console.table(myAccount);
console.log(`your account balance is ${myAccount.balance()}`);
*/
