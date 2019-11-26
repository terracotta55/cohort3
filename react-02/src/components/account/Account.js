import React, { Fragment } from "react";
import "./Account.css";

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      pageStatus: `Account Controller`
    };
  }
  render() {
    return (
      <Fragment>
        <div id="container">
          <div id="left">
            <h2>
              <strong>Accounts</strong>
            </h2>
            <div id="leftChild"></div>
          </div>
          <div id="right">
            <br />
            <form action="#">
              <label>Account Name:&emsp;</label>
              <input type="text" id="inputName" value="" />
              <br />
              <label>Initial Balance:&emsp;</label>
              <input type="text" id="inputBalance" value="" />
              <br />
            </form>
            <br />
            <div id="right-btns">
              <button id="btn-right-add">Add Account</button> <br />
              <button id="btn-right-total">Total Balance</button> <br />
              <button id="btn-right-highest">Highest Balance</button> <br />
              <button id="btn-right-lowest">Lowest Balance</button> <br />
              <button id="btn-right-length">Number of Accounts</button> <br />
            </div>
            <br />
            <p class="results-header">
              <strong>Results will display here:</strong>
            </p>
            <p class="para-right-card-output"></p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Account;
