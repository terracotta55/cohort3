class Account {
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
}

export default Account;
