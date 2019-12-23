import React from "react";
import logo from "../logo.svg";
import "./Home.css";

class HomeApp extends React.Component {
  constructor() {
    super();
    this.state = {
      pageStatus: `Comp-140B: React Apps`
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1
            style={{
              color: "blue",
              fontFamily: "Ubuntu",
              fontSize: "2.5rem"
            }}
          >
            <strong>{this.state.pageStatus}</strong>
          </h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default HomeApp;
