import React, { Fragment } from "react";
import "./Account.css";
import InputBtn from "./InputBtn";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
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
    e.preventDefault(e);
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
    this.props.onSubmit(this.state);
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
          />
          <label className="right-input-label">Initial Balance:</label>
          <input
            onChange={this.handleFormChange}
            name="accountBalance"
            type="number"
            className="right-input"
            min="0"
            step="0.01"
          />
          <InputBtn onSubmit={this.handleSubmitForm} />
        </form>
      </Fragment>
    );
  }
}

export default InputForm;
