import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import EvenComponent from "./components/EvenComponent";
import OddComponent from "./components/OddComponent";

class App extends Component {
  constructor() {
    super();
    this.counter = 21;
    this.state = {
      myState: `Empty State: :)`
    };
  }
  onPushMe = () => {
    console.log("button pushed");
    this.setState({ myState: `New State: ${++this.counter}` });
  };
  whatToDisplay = () => {
    if (this.counter % 2 === 0) {
      return <EvenComponent />;
    }
    return <OddComponent />;
  };
  render() {
    const whatToSay = "It's always a good time!";
    return (
      <div className="App">
        <header className="App-header">
          <MyComponent whatToSay={whatToSay} pushButton={this.onPushMe} />
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Hi I'm Dalton, and I'm developing this counter app!
            {" " + this.state.myState}
          </h1>
          <p>{this.whatToDisplay()}</p>
          <button onClick={this.onPushMe}>Push Me - 1</button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
