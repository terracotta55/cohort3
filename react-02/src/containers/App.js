import React from "react";
import logo from "./svg_logo/logo.svg";
import "./App.css";
import { Images } from "../components/Images";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mouseStatus: `Page Loaded!`
    };
  }
  mouseOverImg = () => {
    console.log(`moused!`);
    this.setState({ mouseStatus: `Moused :)` });
  };
  mouseOverDiv = () => {
    this.setState({ mouseStatus: `Not Moused :(` });
  };

  render() {
    return (
      <div className="App">
        <Images
          someHovering={this.mouseOverImg}
          noHovering={this.mouseOverDiv}
        />
        <header className="App-header">
          <h1>{this.state.mouseStatus}</h1>
          <img src={logo} className="App-logo" alt="logo" />
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
