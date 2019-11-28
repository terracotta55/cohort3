import React, { Fragment } from "react";
import "./Account.css";
// import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/FormControl";
import InputBox from "./InputBox";

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      account: {
        name: "",
        balance: 0
      }
    };
    this.onAccNameChange = this.onAccNameChange.bind(this);
    this.onAccBalChange = this.onAccBalChange.bind(this);
  }
  onAccNameChange(e) {
    console.log("acc name change");
    this.setState({
      account: {
        name: e.target.value
      }
    });
  }
  onAccBalChange(e) {
    console.log("acc bal change");
    this.setState({
      account: {
        balance: e.target.value
      }
    });
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
            <label>Account Name:</label>
            <InputBox onChange={this.onAccNameChange} />
            <br />
            <label>Initial Balance:</label>
            <InputBox onChange={this.onAccBalChange} />
            <br />
            <br />
            <div id="right-btns">
              <button id="btn-right-add">Add Account</button> <br />
              <button id="btn-right-total">Total Balance</button> <br />
              <button id="btn-right-highest">Highest Balance</button> <br />
              <button id="btn-right-lowest">Lowest Balance</button> <br />
              <button id="btn-right-length">Number of Accounts</button> <br />
            </div>
            <br />
            <p className="results-header">
              <strong>Results will display here:</strong>
            </p>
            <p className="para-right-card-output"></p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Account;
