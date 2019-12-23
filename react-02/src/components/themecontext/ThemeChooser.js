import React from "react";
import { ThemeContext } from "./ThemeContext.js";
import "./ThemeChooser.css";
import Form from "react-bootstrap/Form";

class ThemeApp extends React.Component {
  static contextType = ThemeContext;
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1
            style={{
              color: "#ffff00",
              fontFamily: "Ubuntu",
              fontSize: "2.5rem"
            }}
          >
            <strong>Choose Font Color</strong>
          </h1>
          <Form.Control
            as="select"
            title="Choose Font Color"
            value={this.context.fontColor}
            onChange={this.context.changeFont}
          >
            <option value="White">White</option>
            <option value="Green">Green</option>
          </Form.Control>
        </header>
      </div>
    );
  }
}

export default ThemeApp;
