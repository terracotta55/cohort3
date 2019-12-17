import React, { Fragment } from "react";
import "./LinkedList.css";
import InputForm from "./InputForm";
import ResultsDisp from "./ResultsDisp";

class LinkedListApp extends React.Component {
  constructor() {
    super();
    this.state = {
      pageStatus: `Linked Lists Exercise`
    };
  }
  render() {
    return (
      <Fragment>
        <div id="container">
          <div id="left">
            <h2>
              <strong>Linked Lists Display</strong>
            </h2>
            <div id="leftChild">
              <br />
              <InputForm onSubmit={this.addReactAccount} />
              <ResultsDisp />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LinkedListApp;
