export class Account {
	constructor(accountName, accountBalance) {
		this.accountName = accountName;
		this.accountBalance = accountBalance;
	}
	deposit(depAmt) {
		this.accountBalance += depAmt;
		return this.accountBalance;
	}
	withdraw(wthAmt) {
		if (wthAmt > this.accountBalance) {
			return `insufficient funds`;
		}
		this.accountBalance -= wthAmt;
		return this.accountBalance;
	}
	balance() {
		return this.accountBalance;
	}
	static formatDisplayValue(userInput) {
		return Math.round(userInput * 100) / 100;
	}
}

export class AccountController {
	constructor(accountHolder, accountNamesArray = []) {
		this.accountHolder = accountHolder;
		this.accountNamesArray = accountNamesArray;
	}
	addAccount(newAccountName, newAccountBalance) {
		let myNewAccount = new Account(newAccountName, newAccountBalance);
		this.accountNamesArray.push(myNewAccount.newAccountName);
		return myNewAccount;
	}
}
