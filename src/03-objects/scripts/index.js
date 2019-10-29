import { Account, AccountController } from "./account.js";

const checkingAccount = new Account("Checking Account", 100);
const userInput = document.getElementById("amountInput");
const displayScreen = document.getElementById("amtDispValue");
// let userInputVal = Account.formatDisplayValue(userInput.value);

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

/*
functions.helloWorld();
accounts.helloAccounts();
console.table(myAccount);
console.log(`your account balance is ${myAccount.balance()}`);
*/
