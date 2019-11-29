import React from "react";

function ResultsDisp(props) {
  return (
    <div>
      <label>
        Total Balance:<span>{props.total}</span>
      </label>
      <label>
        Highest Balance:<span>{props.highest}</span>
      </label>
      <label>
        Lowest Balance:<span>{props.lowest}</span>
      </label>
      <label>
        No. of Accounts:<span>{props.number}</span>
      </label>
    </div>
  );
}

export default ResultsDisp;
