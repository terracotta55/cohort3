import React, { Fragment } from "react";
import "./City.css";
import InputForm from "./CityInputForm";
import ResultsDisp from "./CityResultsDisp";
import { AccountController } from "./CityController";
import Cards from "./CityCards";

class City extends React.Component {
  constructor() {
    super();
    this.state = {
      lowest: "--",
      highest: "--",
      total: 0
    };
    this.accountController = new AccountController();
  }

  addReactAccount = params => {
    const { counter, accountName, accountBalance } = params;
    this.accountController.addAccount(counter, accountName, accountBalance);
    console.log(this.accountController.accountNamesArr);
    this.updateAccounts();
  };

  deleteReactAccount = num => {
    this.accountController.removeAccount(num);
    console.log(this.accountController.accountNamesArr);
    this.updateAccounts();
  };

  updateAccounts = () => {
    if (this.accountController.accountNamesArr.length < 1) {
      this.setState({ lowest: 0, highest: 0, total: 0 });
      return;
    }
    this.setState({
      lowest: this.accountController.lowestBalance().accountName,
      highest: this.accountController.highestBalance().accountName,
      total: this.accountController.totalBalance()
    });
  };

  displayCards = () => {
    return this.accountController.accountNamesArr.map(account => {
      return (
        <Cards
          key={account.key}
          keyCard={account.key}
          accountCard={account}
          balanceCard={account.accountBalance}
          deleteCard={this.deleteReactAccount}
          updateCard={this.updateAccounts}
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
              <strong>City Cards</strong>
            </h2>
            <div id="leftChild">{card}</div>
          </div>
          <div id="right">
            <InputForm onSubmit={this.addReactAccount} />
            <ResultsDisp
              lowestBal={this.state.lowest.toString()}
              highestBal={this.state.highest.toString()}
              totalBal={this.state.total.toString()}
              numberAcc={this.accountController.accountNamesArr.length.toString()}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default City;
