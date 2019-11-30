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
      accountsArray: []
    };
    this.account = new AccountController();
  }

  addReactAccount = params => {
    const { counter, accountName, accountBalance } = params;
    this.account.addAccount(counter, accountName, accountBalance);
    console.log(this.account.accountNamesArr);
    this.setState({
      accountsArray: this.account.accountNamesArr
    });
    console.log(this.state.accountsArray);
  };

  displayCards = () => {
    return this.state.accountsArray.map(account => {
      return (
        <Cards
          key={account.counter}
          name={account.accountName}
          balance={account.accountBalance}
        />
      );
    });
  };

  render() {
    const card = this.displayCards();
    console.log(card);
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
            <ResultsDisp />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Account;
