import React from "react";

const MyComponent = props => {
  return (
    <div>
      <h1>{props.whatToSay}</h1>
      <button onClick={props.pushButton}>Push Me - 2</button>
    </div>
  );
};
export default MyComponent;
