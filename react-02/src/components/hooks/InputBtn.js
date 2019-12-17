import React, { Fragment } from "react";

function InputBtn(props) {
  return (
    <Fragment>
      <button className="list-btn">First</button>
      <button className="list-btn">{"<<"}</button>
      <button className="list-btn">{"<"}</button>
      <button className="list-btn" onClick={props.onSubmit}>
        Add Item
      </button>
      <button className="list-btn">Delete</button>
      <button className="list-btn">{">"}</button>
      <button className="list-btn">{">>"}</button>
      <button className="list-btn">Last</button>
    </Fragment>
  );
}

export default InputBtn;
