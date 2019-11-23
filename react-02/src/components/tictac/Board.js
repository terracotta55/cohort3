import React, { Fragment } from "react";
import Square from "./Square";

class Board extends React.Component {
  renderOneSquare(i) {
    return (
      <Square
        key={`square-${i}`}
        isWinning={this.props.winningSquares.includes(i)}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderThreeSquares(n) {
    let squares = [];
    for (let i = n; i < n + 3; i++) {
      squares.push(this.renderOneSquare(i));
    }
    return squares;
  }

  renderRows(i) {
    return <div className="board-row">{this.renderThreeSquares(i)}</div>;
  }

  render() {
    return (
      <Fragment>
        {this.renderRows(0)}
        {this.renderRows(3)}
        {this.renderRows(6)}
      </Fragment>
    );
  }
}

export default Board;
