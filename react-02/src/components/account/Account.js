import React, { Fragment } from "react";
import "./Account.css";
import InputForm from "./InputForm";
import ResultsDisp from "./ResultsDisp";
// import AccountFunctions from "./AccountFunctions";
import AccountController from "./AccountController";

class Account extends React.Component {
  constructor() {
    super();
    this.account = new AccountController();
    this.state = {
      accountsArray: []
    };
  }

  addNewAccount = dataInputs => {
    console.log("add account clicked");

    const { counter, accountName, accountBalance } = dataInputs;
    this.account.addAccount(counter, accountName, accountBalance);
    console.log(this.account.accountNamesArr);
  };

  render() {
    return (
      <Fragment>
        <div id="container">
          <div id="left">
            <h2>
              <strong>Accounts Controller</strong>
            </h2>
            <div id="leftChild"></div>
          </div>
          <div id="right">
            <InputForm onSubmit={this.addNewAccount} />
            <ResultsDisp />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Account;
