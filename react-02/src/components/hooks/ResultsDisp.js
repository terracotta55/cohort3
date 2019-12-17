import React from "react";

function ResultsDisp(props) {
  return (
    <div id="resultsContainer">
      <label className="results-label">Total Balance:</label>
      <span className="results-span">0</span>
      <br />
      <label className="results-label">Highest Balance:</label>
      <span className="results-span">0</span>
      <br />
      <label className="results-label">Lowest Balance:</label>
      <span className="results-span">0</span>
      <br />
      <label className="results-label">No. of Accounts:</label>
      <span className="results-span">0</span>
    </div>
  );
}

export default ResultsDisp;
