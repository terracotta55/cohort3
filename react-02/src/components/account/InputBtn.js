import React from "react";

function InputBtn(props) {
  return (
    <button id="addAccBtn" onClick={props.onClick}>
      Add Account
    </button>
  );
}

export default InputBtn;
