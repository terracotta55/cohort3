import React from "react";

function ResultsDisp(props) {
  return (
    <div id="resultsContainer">
      <label className="results-label">Total Population:</label>
      <span className="results-span">{props.totalBal}</span>
      <br />
      <label className="results-label">Most Northern:</label>
      <span className="results-span">{props.highestBal}</span>
      <br />
      <label className="results-label">Most Southern:</label>
      <span className="results-span">{props.lowestBal}</span>
      <br />
      <label className="results-label">Additional Info:</label>
      <span className="results-span">{props.numberAcc}</span>
    </div>
  );
}

export default ResultsDisp;
