import React from "react";

function InputBox(props) {
  return <input name="accInput" id="accInput" onChange={props.onChange} />;
}

export default InputBox;
