import React, { Fragment } from "react";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountCard: this.props.accountCard,
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

  handleDepositBtn = e => {
    e.preventDefault(e);
    let cardInputValue = this.formatCardInput(this.state.cardInput);
    console.log("deposit clicked", cardInputValue);
    if (!cardInputValue || cardInputValue <= 0) {
      this.setState({
        cardResult: `Enter Valid Deposit Amount`
      });
      return;
    }
    this.state.accountCard.deposit(cardInputValue);
    const accountCardUpdate = this.state.accountCard;
    this.setState({
      accountCard: accountCardUpdate,
      cardInput: "",
      cardResult: `Deposited: $${cardInputValue.toFixed(2)}`
    });
    this.props.updateCard();
  };

  handleWithdrawBtn = e => {
    e.preventDefault(e);
    let cardInputValue = this.formatCardInput(this.state.cardInput);
    console.log("withdraw clicked", cardInputValue);
    if (!cardInputValue || cardInputValue <= 0) {
      this.setState({
        cardResult: `Enter Valid Withdraw Amount`
      });
      return;
    } else if (cardInputValue > this.state.accountCard.accountBalance) {
      this.setState({
        cardResult: `Insufficient Funds in Account`
      });
      return;
    }
    this.state.accountCard.withdraw(cardInputValue);
    const accountCardUpdate = this.state.accountCard;
    this.setState({
      accountCard: accountCardUpdate,
      cardInput: "",
      cardResult: `Withdrew: $${cardInputValue.toFixed(2)}`
    });
    this.props.updateCard();
  };

  handleBalanceBtn = () => {
    console.log("balance clicked");
    this.setState({
      cardResult: `You have $${this.props.balanceCard} in your Account`
    });
    this.props.updateCard();
  };

  handleDeleteBtn = () => {
    this.props.deleteCard(this.props.keyCard);
    const accountCardUpdate = this.state.accountCard;
    this.setState({
      accountCard: accountCardUpdate
    });
    this.props.updateCard();
  };

  render() {
    let { accountName, accountBalance } = this.state.accountCard;
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
          <button className="btn-card-wth" onClick={this.handleWithdrawBtn}>
            Withdraw
          </button>
          <button className="btn-card-bal" onClick={this.handleBalanceBtn}>
            Balance
          </button>
          <br />
          <button className="btn-card-del" onClick={this.handleDeleteBtn}>
            Delete
          </button>
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
