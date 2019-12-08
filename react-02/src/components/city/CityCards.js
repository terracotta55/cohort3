import React, { Fragment } from "react";
import cityFetch from "./FetchFunctions";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityCard: this.props.cityCard,
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

  handleMovedInBtn = e => {
    e.preventDefault(e);
    this.props.updateCard();
    let cardInputValue = this.formatCardInput(this.state.cardInput);
    if (!cardInputValue || cardInputValue <= 0) {
      this.setState({
        cardResult: `Enter Valid Population for Move In`
      });
      return;
    }
    this.props.updateCard();
    this.state.cityCard.movedIn(cardInputValue);
    cityFetch.updateCityServer(this.state.cityCard);
    const cityCardUpdate = this.state.cityCard;
    this.setState({
      cityCard: cityCardUpdate,
      cardInput: "",
      cardResult: `${cardInputValue} People Moved In`
    });
  };

  handleMovedOutBtn = e => {
    e.preventDefault(e);
    this.props.updateCard();
    let cardInputValue = this.formatCardInput(this.state.cardInput);
    if (!cardInputValue || cardInputValue <= 0) {
      this.setState({
        cardResult: `Enter Valid Population for Move Out`
      });
      return;
    } else if (cardInputValue > this.state.cityCard.cityPopulation) {
      this.setState({
        cardResult: `Cannot Move Out More People Than Live Here`
      });
      return;
    }
    this.state.cityCard.movedOut(cardInputValue);
    cityFetch.updateCityServer(this.state.cityCard);
    const cityCardUpdate = this.state.cityCard;
    this.setState({
      cityCard: cityCardUpdate,
      cardInput: "",
      cardResult: `${cardInputValue} People Moved Out`
    });
  };

  handleHowBigBtn = () => {
    const howBig = this.state.cityCard.howBig();
    this.setState({
      cardResult: `${this.state.cityCard.cityName} is a ${howBig}`
    });
    this.props.updateCard();
  };

  handleRemoveBtn = () => {
    this.props.deleteCard(this.props.keyCard);
    cityFetch.deleteCityServer(this.props.keyCard);
    const cityCardUpdate = this.state.cityCard;
    this.setState({
      cityCard: cityCardUpdate
    });
    this.props.updateCard();
  };

  render() {
    let { cityName, cityPopulation } = this.state.cityCard;
    return (
      <Fragment>
        <div className="card-div">
          <span className="para-left-card-name">City Name: {cityName}</span>
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
          <button className="btn-card-dep" onClick={this.handleMovedInBtn}>
            Move In
          </button>
          <button className="btn-card-wth" onClick={this.handleMovedOutBtn}>
            Move Out
          </button>
          <button className="btn-card-bal" onClick={this.handleHowBigBtn}>
            How Big
          </button>
          <br />
          <button className="btn-card-del" onClick={this.handleRemoveBtn}>
            Remove City
          </button>
          <br />
          <span className="para-left-card-output">
            Current Population: {cityPopulation}
          </span>
          <br />
          <span className="para-left-card-output">{this.state.cardResult}</span>
        </div>
      </Fragment>
    );
  }
}

export default Cards;
