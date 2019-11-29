import React, { Fragment } from "react";
import "./Account.css";
import InputBtn from "./InputBtn";

class InputForm extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      accountName: "",
      accountBalance: 0
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }
  handleFormChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmitForm(e) {
    this.setState({ counter: this.counter + 1 });
    e.preventDefault(e);
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <Fragment>
        <h2>
          <strong>Enter Account Details</strong>
        </h2>
        <form onSubmit={this.handleSubmitForm}>
          <label>Account Name:</label>
          <input
            onChange={this.handleFormChange}
            name="accountName"
            type="text"
            id="accInput"
          />
          <label>Initial Balance:</label>
          <input
            onChange={this.handleFormChange}
            name="accountBalance"
            type="number"
            id="accInput"
            min="0"
            step="0.01"
          />
          <InputBtn />
        </form>
      </Fragment>
    );
  }
}

export default InputForm;
