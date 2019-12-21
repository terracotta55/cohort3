import React from "react";
import logo from "../logo.svg";
import "./Stack.css";

class StackApp extends React.Component {
  constructor() {
    super();
    this.state = {
      pageStatus: `Stack Exercise!`
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1
            style={{
              color: "#ffff00",
              fontFamily: "Ubuntu",
              fontSize: "2.5rem"
            }}
          >
            <strong>{this.state.pageStatus}</strong>
          </h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p
            style={{
              color: "#ffff00",
              fontFamily: "Ubuntu",
              fontSize: "2.5rem"
            }}
          >
            <strong>Have Fun!</strong>
          </p>
        </header>
      </div>
    );
  }
}

export default StackApp;
