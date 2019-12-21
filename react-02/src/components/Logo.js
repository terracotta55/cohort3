import React from "react";

class Logo extends React.Component {
  render() {
    return (
      <img
        name={this.props.name}
        src={this.props.image}
        className="images-svg"
        style={this.props.style}
        onClick={this.props.onClick}
        alt="nav-icon"
      />
    );
  }
}

export default Logo;
