import React, { Fragment } from "react";
import "./City.css";
import InputForm from "./CityInputForm";
import ResultsDisp from "./CityResultsDisp";
import { Community } from "./CityController";
import Cards from "./CityCards";

class City extends React.Component {
  constructor() {
    super();
    this.state = {
      southernmost: "--",
      northernmost: "--",
      total: 0,
      serverMsg: "Loading content...",
      cityCounter: 0
    };
    this.cityController = new Community();
  }

  componentDidMount() {}

  addReactCity = params => {
    let counterValue = this.state.cityCounter;
    const { cityName, cityLatitude, cityLongitude, cityPopulation } = params;
    this.cityController.createCity(
      counterValue,
      cityName,
      cityLatitude,
      cityLongitude,
      cityPopulation
    );
    console.log(this.cityController.cityNamesArr);
    this.setState(newState => {
      return {
        cityCounter: newState.cityCounter + 1
      };
    });
    this.updateCities();
  };

  deleteReactCity = num => {
    this.cityController.deleteCity(num);
    console.log(this.cityController.cityNamesArr);
    this.updateCities();
  };

  updateCities = () => {
    if (this.cityController.cityNamesArr.length < 1) {
      this.setState({ southernmost: 0, northernmost: 0, total: 0 });
      return;
    }
    this.setState({
      southernmost: this.cityController.getMostSouthern().cityName,
      northernmost: this.cityController.getMostNorthern().cityName,
      total: this.cityController.getTotalPopulation()
    });
  };

  displayCards = () => {
    return this.cityController.cityNamesArr.map(city => {
      return (
        <Cards
          key={city.key}
          keyCard={city.key}
          cityCard={city}
          populationCard={city.cityPopulation}
          deleteCard={this.deleteReactCity}
          updateCard={this.updateCities}
        />
      );
    });
  };

  render() {
    const card = this.displayCards();
    return (
      <Fragment>
        <div id="container">
          <div id="left">
            <h2>
              <strong>City Cards</strong>
            </h2>
            <div id="leftChild">{card}</div>
          </div>
          <div id="right">
            <InputForm
              onSubmit={this.addReactCity}
              cityCounter={this.state.cityCounter.toString()}
            />
            <ResultsDisp
              southmostLatitude={this.state.southernmost.toString()}
              northmostLatitude={this.state.northernmost.toString()}
              totalPopulation={this.state.total.toString()}
              numberOfCities={this.cityController.cityNamesArr.length.toString()}
              serverMessage={this.state.serverMsg.toString()}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default City;
