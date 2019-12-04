import React, { Fragment } from "react";
import "./Account.css";
import InputBtn from "./InputBtn";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      accountName: "",
      accountBalance: ""
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
    e.preventDefault(e);
    this.props.onSubmit(this.state);
    this.setState(newState => {
      return {
        counter: newState.counter + 1
      };
    });
    this.setState({ accountName: "", accountBalance: "" });
  }

  render() {
    return (
      <Fragment>
        <h2>
          <strong>Account Details</strong>
        </h2>
        <form onSubmit={this.handleSubmitForm}>
          <label className="right-input-label">Account Name:</label>
          <input
            onChange={this.handleFormChange}
            name="accountName"
            type="text"
            className="right-input"
            value={this.state.accountName}
          />
          <label className="right-input-label">Initial Balance:</label>
          <input
            onChange={this.handleFormChange}
            name="accountBalance"
            type="number"
            className="right-input"
            min="0"
            step="0.01"
            value={this.state.accountBalance}
          />
          <InputBtn onSubmit={this.handleSubmitForm} />
        </form>
      </Fragment>
    );
  }
}

export default InputForm;
