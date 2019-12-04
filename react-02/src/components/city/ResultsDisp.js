import React from "react";

function ResultsDisp(props) {
  return (
    <div id="resultsContainer">
      <label className="results-label">Total Balance:</label>
      <span className="results-span">{props.totalBal}</span>
      <br />
      <label className="results-label">Highest Balance:</label>
      <span className="results-span">{props.highestBal}</span>
      <br />
      <label className="results-label">Lowest Balance:</label>
      <span className="results-span">{props.lowestBal}</span>
      <br />
      <label className="results-label">No. of Accounts:</label>
      <span className="results-span">{props.numberAcc}</span>
    </div>
  );
}

export default ResultsDisp;
