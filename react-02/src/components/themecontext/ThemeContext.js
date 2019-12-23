import React from "react";

export const ThemeContext = React.createContext();

export class ThemeProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      fontColor: "Blue",
      targetItem: null
    };
  }

  changeTarget = target => {
    this.setState({ targetItem: target });
  };

  changeFont = e => {
    this.setState({ fontColor: e.target.value });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          changeFont: this.changeFont,
          changeTarget: this.changeTarget
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
