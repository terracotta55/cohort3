import React, { Fragment } from "react";
import "./Account.css";
import InputForm from "./InputForm";
import ResultsDisp from "./ResultsDisp";
import { AccountController } from "./Controller";

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      accountsArray: []
    };
    this.account = new AccountController();
  }

  addReactAccount(params) {
    const { counter, accountName, accountBalance } = params;
    this.account.addAccount(counter, accountName, accountBalance);
  }

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
            <InputForm onSubmit={this.addReactAccount} />
            <ResultsDisp />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Account;
