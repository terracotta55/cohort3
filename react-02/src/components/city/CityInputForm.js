import React, { Fragment } from "react";
import "./City.css";
import InputBtn from "./CityInputBtn";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      cityPopulation: "",
      cityLatitude: "",
      cityLongitude: ""
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
    this.setState({
      cityName: "",
      cityPopulation: "",
      cityLatitude: "",
      cityLongitude: ""
    });
  }

  render() {
    return (
      <Fragment>
        <h2>
          <strong>City Details</strong>
        </h2>
        <form onSubmit={this.handleSubmitForm}>
          <label className="right-input-label">City Name:</label>
          <input
            onChange={this.handleFormChange}
            name="cityName"
            type="text"
            className="right-input"
            value={this.state.cityName}
          />
          <label className="right-input-label">Latitude:</label>
          <input
            onChange={this.handleFormChange}
            name="cityLatitude"
            type="number"
            className="right-input"
            min="0"
            step="0.01"
            value={this.state.cityLatitude}
          />
          <label className="right-input-label">Longitude:</label>
          <input
            onChange={this.handleFormChange}
            name="cityLongitude"
            type="number"
            className="right-input"
            min="0"
            step="0.01"
            value={this.state.cityLongitude}
          />
          <label className="right-input-label">Population:</label>
          <input
            onChange={this.handleFormChange}
            name="cityPopulation"
            type="number"
            className="right-input"
            min="0"
            step="0.01"
            value={this.state.cityPopulation}
          />
          <InputBtn onSubmit={this.handleSubmitForm} />
        </form>
      </Fragment>
    );
  }
}

export default InputForm;
