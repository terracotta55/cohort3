export class Account {
	constructor(accountName, accountBalance) {
		this.accountName = accountName;
		this.accountBalance = accountBalance;
	}
	deposit(depAmt) {
		this.accountBalance += depAmt;
	}
	withdraw(wthAmt) {
		if (wthAmt > this.accountBalance) {
			throw new Error("Insufficient Funds!");
		}
		this.accountBalance -= wthAmt;
	}
	balance() {
		return this.accountBalance;
	}
	static formatDisplayValue(userInput) {
		return Math.round(userInput * 100) / 100;
	}
}

const _accountName = new WeakMap();
// const _accountBalance = new WeakMap();
export class AccountController {
	constructor(accountName = [], accountOwner) {
		_accountName.set(this, accountName);
		this.accountOwner = accountOwner;
	}
	addAccount(accountName, accountBalance) {
		let newAccount = new Account(accountName, accountBalance);
		_accountName.get(this).push(newAccount);
		console.log(newAccount);
		return newAccount;
	}
}
