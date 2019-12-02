import React, { Fragment } from "react";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInput: "",
      cardResult: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    this.setState({ cardInput: e.target.value });
  }
  formatCardInput(userInputInCard) {
    if (
      isNaN(userInputInCard) ||
      typeof userInputInCard === "undefined" ||
      userInputInCard === ""
    ) {
      return false;
    }
    return parseFloat(userInputInCard);
  }
  handleDepositBtn = () => {
    let cardInputValue = this.formatCardInput(this.state.cardInput);
    console.log("deposit clicked", cardInputValue);
    if (!cardInputValue || cardInputValue <= 0) {
      this.setState({
        cardResult: `Enter Valid Deposit Amount`
      });
      return;
    }
    this.props.depositCard(cardInputValue);
    this.setState({
      cardInput: "",
      cardResult: `Deposited $${cardInputValue.toFixed(2)}`
    });
  };
  render() {
    let { accountName, accountBalance } = this.props.accountArr;
    return (
      <Fragment>
        <div className="card-div">
          <span className="para-left-card-name">Name: {accountName}</span>
          <br />
          <input
            value={this.state.cardInput}
            onChange={this.handleInputChange}
            className="card-input"
            type="number"
            min="0"
            step="0.01"
          />
          <br />
          <button className="btn-card-dep" onClick={this.handleDepositBtn}>
            Deposit
          </button>
          <button className="btn-card-wth">Withdraw</button>
          <button className="btn-card-bal">Balance</button>
          <br />
          <button className="btn-card-del">Delete</button>
          <br />
          <span className="para-left-card-output">
            Balance: ${accountBalance}
          </span>
          <br />
          <span className="para-left-card-output">{this.state.cardResult}</span>
        </div>
      </Fragment>
    );
  }
}

export default Cards;
