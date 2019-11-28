class AccountController {
  constructor(accountOwner) {
    // super();
    const _accountsList = new WeakMap();
    _accountsList.set(this, _accountsList);
    this.accountNamesArr = [];
    this.accountOwner = accountOwner;
  }
  get accountsList() {
    return this.accountNamesArr;
  }
  addAccount(key, accountName, accountBalance) {
    let newAccount = new Account(key, accountName, accountBalance);
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
    this.accountNamesArr.sort((a, b) => b.accountBalance - a.accountBalance);
    return this.accountNamesArr[0];
  }
  lowestBalance() {
    this.accountNamesArr.sort((a, b) => a.accountBalance - b.accountBalance);
    return this.accountNamesArr[0];
  }
  removeAccount(key) {
    key = Number(key);
    const newAccountNamesArr = this.accountNamesArr.filter(
      account => account.key != key
    );
    this.accountNamesArr = newAccountNamesArr;
    // return this.accountNamesArr;
  }
}

export default AccountController;
