import React, { Fragment } from "react";
import "./Account.css";
// import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/FormControl";
import InputBox from "./InputBox";
import InputBtn from "./InputBtn";

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

  onAddAccClicked(e) {
    console.log("add acc clicked");
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
            <div id="rightInput">
              <label>Account Name:</label>
              <InputBox onChange={this.onAccNameChange} />
              <label>Initial Balance:</label>
              <InputBox onChange={this.onAccBalChange} />
              <InputBtn onClick={this.onAddAccClicked} />
            </div>
            <div id="rightResults">
              <label>Total Balance:</label>
              <label>Highest Balance:</label>
              <label>Lowest Balance:</label>
              <label>No. of Accounts:</label>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Account;
