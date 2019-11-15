import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Images } from "./components/Images";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mouseStatus: `Nothing :(`
    };
  }
  mouseMsg() {
    console.log(`moused!`);
    this.setState({ mouseStatus: `Moused over!` });
  }

  render() {
    return (
      <div className="App">
        <Images someHovering={this.mouseMsg} />
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
