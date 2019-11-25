import React from "react";
import logo from "../logo.svg";
import "./Hooks.css";

class Hooks extends React.Component {
  constructor() {
    super();
    this.state = {
      pageStatus: `Hooks, Context and Linked Lists`
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.pageStatus}</h1>
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

export default Hooks;
