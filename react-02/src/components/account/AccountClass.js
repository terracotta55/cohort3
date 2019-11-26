import React from "react";

class AccountClass extends React.Component {
  constructor(key, accountName, accountBalance) {
    super();
    this.key = key;
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

export default AccountClass;
