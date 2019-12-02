import React, { Fragment } from "react";
import "./Account.css";
import InputForm from "./InputForm";
import ResultsDisp from "./ResultsDisp";
import { AccountController } from "./Controller";
import Cards from "./Cards";

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      accountController: new AccountController(),
      accountsArray: [],
      lowest: 0,
      highest: 0,
      total: 0
    };
  }

  addReactAccount = params => {
    const { counter, accountName, accountBalance } = params;
    this.state.accountController.addAccount(
      counter,
      accountName,
      accountBalance
    );
    console.log(this.state.accountController.accountNamesArr);
    this.setState({
      accountsArray: this.state.accountController.accountNamesArr
    });
    console.log(this.state.accountsArray);
  };

  delReactAccount = num => {
    let newAccountsArray = this.state.account.removeAccount(
      this.state.account.getAccount(num)
    );
    let newAccountsObj = new AccountController();
    newAccountsObj.accountNamesArr = newAccountsArray;
    this.setState({ account: newAccountsObj }, this.updateAccounts);
  };

  withdrawReactAccount = wthAmt => {
    let newController = this.state.accountController.withdraw(wthAmt);
    this.setState({ accountContoller: newController }, this.updateAccounts);
  };

  depositReactAccount = depAmt => {
    let newController = this.state.accountController.accountNamesArr[0].deposit(
      depAmt
    );
    this.setState({ accountContoller: newController }, this.updateAccounts);
  };

  updateAccounts = () => {
    if (this.state.accountController.accountNamesArr.length < 1) {
      this.setState({ lowest: 0, highest: 0 });
      return;
    }
    this.setState(newState => {
      return {
        lowest: newState.accountController.lowestBalance(),
        highest: newState.accountController.highestBalance(),
        total: newState.accountController.totalBalance()
      };
    });
  };

  displayCards = () => {
    return this.state.accountsArray.map(account => {
      return (
        <Cards
          key={account.key}
          accountArr={account}
          balance={account.accountBalance}
          withdrawCard={this.withdrawReactAccount}
          depositCard={this.depositReactAccount}
          deleteCard={this.delReactAccount}
        />
      );
    });
  };

  render() {
    const card = this.displayCards();
    return (
      <Fragment>
        <div id="container">
          <div id="left">
            <h2>
              <strong>Account Cards</strong>
            </h2>
            <div id="leftChild">{card}</div>
          </div>
          <div id="right">
            <InputForm onSubmit={this.addReactAccount} />
            <ResultsDisp
              lowestBal={this.state.lowest}
              highestBal={this.state.highest}
              totalBal={this.state.total}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Account;
