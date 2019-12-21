import React, { Fragment } from "react";
import "./LinkedList.css";
import InputBtn from "./InputBtn";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      amount: ""
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
    this.setState({ subject: "", amount: "" });
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmitForm}>
          <label className="left-input-label">Subject:</label>
          <input
            onChange={this.handleFormChange}
            name="accountName"
            type="text"
            className="left-input"
            value={this.state.subject}
          />
          <br />
          <label className="left-input-label">Amount:</label>
          <input
            onChange={this.handleFormChange}
            name="accountBalance"
            type="text"
            className="left-input"
            value={this.state.amount}
          />
          <br />
          <br />
          <InputBtn onSubmit={this.handleSubmitForm} />
        </form>
      </Fragment>
    );
  }
}

export default InputForm;
