import React from "react";

function InputBtn(props) {
  return (
    <button id="addAccBtn" onClick={props.onSubmit}>
      Add Account
    </button>
  );
}

export default InputBtn;
