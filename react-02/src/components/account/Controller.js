export class AccountClass {
  constructor(key, accountName, accountBalance) {
    this.key = key;
    this.accountName = String(accountName);
    accountBalance < 0
      ? (this.accountBalance = 0)
      : (this.accountBalance = this.formatDisplayValue(accountBalance));
  }
  deposit(depAmt) {
    this.accountBalance += depAmt;
  }
  withdraw(wthAmt) {
    /*
    if (wthAmt > this.accountBalance) {
      throw new Error("Insufficient Funds!");
    }
    */
    this.accountBalance -= wthAmt;
  }
  balance() {
    return this.accountBalance;
  }
  formatDisplayValue(userInput) {
    return Math.round(userInput * 100) / 100;
  }
}

export class AccountController {
  constructor(accountNamesArr = []) {
    const _accountsList = new WeakMap();
    _accountsList.set(this, _accountsList);
    this.accountNamesArr = accountNamesArr;
  }

  get accountsList() {
    return this.accountNamesArr;
  }

  getAccountKey(num) {
    for (let i = 0; i < this.accountNamesArr.length; i++) {
      if (this.accountNamesArr[i].key === num) {
        return this.accountNamesArr[i];
      }
    }
    return null;
  }

  addAccount(key, accountName, accountBalance) {
    let newAccount = new AccountClass(key, accountName, accountBalance);
    this.accountNamesArr.push(newAccount);
    return newAccount;
  }

  totalBalance() {
    const total = this.accountNamesArr.reduce(
      (accumulator, account) => accumulator + account.accountBalance,
      0
    );
    return total;
  }

  highestBalance() {
    const accountNamesArrCopy = this.accountNamesArr.slice();
    return accountNamesArrCopy.sort(
      (a, b) => b.accountBalance - a.accountBalance
    )[0];
  }

  lowestBalance() {
    const accountNamesArrCopy = this.accountNamesArr.slice();
    return accountNamesArrCopy.sort(
      (a, b) => a.accountBalance - b.accountBalance
    )[0];
  }

  removeAccount(key) {
    key = Number(key);
    const newAccountNamesArr = this.accountNamesArr.filter(
      account => account.key !== key
    );
    this.accountNamesArr = newAccountNamesArr;
    return this.accountNamesArr;
  }
}
