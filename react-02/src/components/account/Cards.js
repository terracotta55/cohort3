import React, { Fragment } from "react";

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      accountBalance: 0
    };
  }

  render() {
    return (
      <Fragment>
        <div className="card-div">
          <span className="para-left-card-name">Hello</span>
          <br />
          <input
            className="card-input"
            type="number"
            min="0"
            step="0.01"
          />{" "}
          <br />
          <button className="btn-card-dep">Deposit</button>
          <button className="btn-card-wth">Withdraw</button>
          <button className="btn-card-bal">Balance</button>
          <br />
          <button className="btn-card-del">Delete</button>
          <br />
          <span className="para-left-card-output">Balance</span>
        </div>
      </Fragment>
    );
  }
}

export default Cards;
