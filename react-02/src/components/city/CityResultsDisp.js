import React from "react";

function ResultsDisp(props) {
  return (
    <div id="resultsContainer">
      <label className="results-label">Total Population:</label>
      <span className="results-span">{props.totalPopulation}</span>
      <br />
      <label className="results-label">Most Northern:</label>
      <span className="results-span">{props.northmostLatitude}</span>
      <br />
      <label className="results-label">Most Southern:</label>
      <span className="results-span">{props.southmostLatitude}</span>
      <br />
      <label className="results-label">Number of Cities:</label>
      <span className="results-span">{props.numberOfCities}</span>
      <br />
      <label className="results-label">Server Message:</label>
      <span className="results-span">{props.serverMessage}</span>
    </div>
  );
}

export default ResultsDisp;
