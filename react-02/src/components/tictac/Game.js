import React from "react";
import Board from "./Board";
import "./Game.css";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      xIsNext: true,
      stepNumber: 0,
      isAscending: true
    };
  }
  handleClick(i) {
    const locations = [
      [1, 1],
      [2, 1],
      [3, 1],
      [1, 2],
      [2, 2],
      [3, 2],
      [1, 3],
      [2, 3],
      [3, 3]
    ];
    const history = this.state.history.slice(0, this.state.stepNumber + 1); // array.slice(start, end)
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
          location: locations[i]
        }
      ]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
  }
  jumpTo(step) {
    // equating move to stepNumber
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  sortHistory() {
    this.setState({
      isAscending: !this.state.isAscending
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      // array.map(function(currentValue, index, arr), thisValue)
      const desc = move
        ? `Go to move #${move} at ${history[move].location}`
        : `Go to game start`;
      console.log("history", history);
      console.log("step", step);
      console.log("move", move);
      return (
        <li key={move}>
          <Button variant="primary" onClick={() => this.jumpTo(move)}>
            {move === this.state.stepNumber ? (
              <b style={{ color: "yellow" }}>{desc}</b>
            ) : (
              desc
            )}
          </Button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Game Winner: ${winner.player}`;
    } else if (!current.squares.includes(null)) {
      status = `It's a Draw!`;
    } else {
      status = `Next Player: ${this.state.xIsNext ? "X" : "O"}`;
    }
    return (
      <div className="game">
        <div className="sorting">
          <DropdownButton variant="primary" className="sort" title="Sort Moves">
            <Dropdown.Item as="button" onClick={() => this.sortHistory()}>
              {this.state.isAscending ? "Descending" : "Ascending"}
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="game-board">
          <Board
            winningSquares={winner ? winner.line : []}
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <ol>{this.state.isAscending ? moves : moves.reverse()}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line: [a, b, c] };
      // return squares[a];
    }
  }
  return null;
}

export default Game;
