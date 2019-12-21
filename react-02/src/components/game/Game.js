import React, { Fragment } from "react";
import Board from "./Board";
import "./Game.css";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

class GameApp extends React.Component {
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
      isAscending: true,
      winner: null,
      level: "Expert",
      players: "1-Player",
      first: "Human",
      gameOff: true
    };
    this.playersChange = this.playersChange.bind(this);
    this.levelChange = this.levelChange.bind(this);
    this.firstChange = this.firstChange.bind(this);
    this.gameStarts = this.gameStarts.bind(this);
  }
  refreshPage() {
    window.location.reload();
  }
  async handleClick(i) {
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
    if (this.state.winner || squares[i]) {
      return;
    }
    this.state.xIsNext ? (squares[i] = "X") : (squares[i] = "O");
    // squares[i] = this.state.xIsNext ? "X" : "O";
    let winner = calculateWinner(squares);
    await this.setState({
      history: history.concat([
        {
          squares: squares,
          location: locations[i]
        }
      ]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
      winner: winner
    });
    if (
      this.state.xIsNext === false &&
      this.state.winner === null &&
      this.state.players === "1-Player" &&
      this.state.level === "Expert"
    ) {
      this.expertLevel();
    }
    if (
      this.state.xIsNext === false &&
      this.state.winner === null &&
      this.state.players === "1-Player" &&
      this.state.level === "Beginner"
    ) {
      this.beginnerLevel();
    }
  }

  expertLevel() {
    let goodSquares = this.evaluateSquares();
    let max = goodSquares[0].value;
    let bestSquares = goodSquares.filter(itm => itm.value === max);
    let random = this.getRndInteger(0, bestSquares.length - 1);
    let index = bestSquares[random].index;
    setTimeout(index => this.handleClick(index), 250, index);
  }

  beginnerLevel() {
    let goodSquares = this.evaluateSquares();
    let max = goodSquares[0].value;
    let bestSquares = goodSquares.filter(itm => itm.value === max);
    let goodNotBestSquars = goodSquares.filter(itm => itm.value !== max);
    let smartness = this.getRndInteger(1, 100);
    if (smartness <= 30 && max < 18 && goodNotBestSquars.length > 0) {
      goodNotBestSquars.sort((a, b) => b.value - a.value);
      let secondMax = goodNotBestSquars[0].value;
      let secondBestSquares = goodNotBestSquars.filter(
        itm => itm.value === secondMax
      );
      let random = this.getRndInteger(0, secondBestSquares.length - 1);
      let index = secondBestSquares[random].index;
      setTimeout(index => this.handleClick(index), 250, index);
    } else {
      let random = this.getRndInteger(0, bestSquares.length - 1);
      let index = bestSquares[random].index;
      setTimeout(index => this.handleClick(index), 250, index);
    }
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  evaluateSquares() {
    let history = this.state.history;
    let current = history[this.state.stepNumber];
    const squares = current.squares.slice();
    let evaluatedIndexes = [];
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
    for (let itm of lines) {
      let [a, b, c] = itm;
      if (squares[a] === null && squares[b] === "O" && squares[c] === "O") {
        evaluatedIndexes.push({ index: a, value: 20 });
      }
      if (squares[b] === null && squares[a] === "O" && squares[c] === "O") {
        evaluatedIndexes.push({ index: b, value: 20 });
      }
      if (squares[c] === null && squares[a] === "O" && squares[b] === "O") {
        evaluatedIndexes.push({ index: c, value: 20 });
      }
      if (squares[a] === null && squares[b] === "X" && squares[c] === "X") {
        evaluatedIndexes.push({ index: a, value: 18 });
      }
      if (squares[b] === null && squares[a] === "X" && squares[c] === "X") {
        evaluatedIndexes.push({ index: b, value: 18 });
      }
      if (squares[c] === null && squares[a] === "X" && squares[b] === "X") {
        evaluatedIndexes.push({ index: c, value: 18 });
      }
      if (squares[a] === null && squares[b] === null && squares[c] === "O") {
        evaluatedIndexes.push({ index: a, value: 10 });
        evaluatedIndexes.push({ index: b, value: 10 });
      }
      if (squares[a] === null && squares[c] === null && squares[b] === "O") {
        evaluatedIndexes.push({ index: a, value: 10 });
        evaluatedIndexes.push({ index: c, value: 10 });
      }
      if (squares[b] === null && squares[c] === null && squares[a] === "O") {
        evaluatedIndexes.push({ index: b, value: 10 });
        evaluatedIndexes.push({ index: c, value: 10 });
      } else {
        if (squares[a] === null) evaluatedIndexes.push({ index: a, value: 1 });
        if (squares[b] === null) evaluatedIndexes.push({ index: b, value: 1 });
        if (squares[c] === null) evaluatedIndexes.push({ index: c, value: 1 });
      }
    }
    evaluatedIndexes = evaluatedIndexes.map(itm => {
      if (
        ((squares[0] === "X" && squares[8] === "X") ||
          (squares[2] === "X" && squares[6] === "X")) &&
        (itm.index === 1 ||
          itm.index === 3 ||
          itm.index === 5 ||
          itm.index === 7)
      ) {
        return { index: itm.index, value: itm.value + 5 };
      } else if (itm.index === 4) {
        return { index: itm.index, value: itm.value + 3 };
      } else if (
        itm.index === 0 ||
        itm.index === 2 ||
        itm.index === 6 ||
        itm.index === 8
      ) {
        return { index: itm.index, value: itm.value + 2 };
      } else {
        return { index: itm.index, value: itm.value };
      }
    });
    evaluatedIndexes.sort((a, b) => b.value - a.value);
    return evaluatedIndexes;
  }

  async jumpTo(step) {
    // equating move to stepNumber
    let history = this.state.history;
    let current = history[step];
    const squares = current.squares.slice();
    let winner = calculateWinner(squares);
    if (this.state.first === "Human") {
      await this.setState({
        stepNumber: step,
        xIsNext: step % 2 === 0,
        winner: winner
      });
    }
    if (this.state.first === "Computer") {
      await this.setState({
        stepNumber: step,
        xIsNext: !(step % 2 === 0),
        winner: winner
      });
    }
    if (
      this.state.xIsNext === false &&
      this.state.winner === null &&
      this.state.players === "1-Player" &&
      this.state.level === "Expert"
    ) {
      this.expertLevel();
    }
    if (
      this.state.xIsNext === false &&
      this.state.winner === null &&
      this.state.players === "1-Player" &&
      this.state.level === "Beginner"
    ) {
      this.beginnerLevel();
    }
  }

  sortHistory() {
    this.setState({
      isAscending: !this.state.isAscending
    });
  }

  async playersChange(e) {
    await this.setState({ players: e.target.value });
    if (
      this.state.xIsNext === false &&
      this.state.winner === null &&
      this.state.players === "1-Player" &&
      this.state.level === "Expert"
    ) {
      this.expertLevel();
    }
    if (
      this.state.xIsNext === false &&
      this.state.winner === null &&
      this.state.players === "1-Player" &&
      this.state.level === "Beginner"
    ) {
      this.beginnerLevel();
    }
  }

  levelChange(e) {
    this.setState({ level: e.target.value });
  }

  firstChange(e) {
    this.setState({ first: e.target.value });
    this.setState(state => ({ xIsNext: !state.xIsNext }));
  }

  gameStarts() {
    this.setState({ gameOff: false });
    if (
      this.state.xIsNext === false &&
      this.state.winner === null &&
      this.state.players === "1-Player"
    ) {
      let indexArray = [0, 2, 4, 6, 8];
      let random = this.getRndInteger(0, 4);
      let index = indexArray[random];
      setTimeout(index => this.handleClick(index), 250, index);
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      // array.map(function(currentValue, index, arr), thisValue)
      const desc = move
        ? `Go to move #${move} at ${history[move].location}`
        : `Go to blank board`;
      console.log("history", history);
      console.log("step", step);
      console.log("move", move);
      return (
        <li key={move}>
          <Button variant="secondary" onClick={() => this.jumpTo(move)}>
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
      <Fragment>
        <div className="game">
          <div className="game-options">
            <div className="game-options-div">
              <Form.Control
                as="select"
                title="Number of Players"
                value={this.state.players}
                onChange={this.playersChange}
              >
                <option value="1-Player">1-Player</option>
                <option value="2-Player">2-Player</option>
              </Form.Control>
            </div>
            <div className="game-options-div">
              {this.state.players === "1-Player" && (
                <Form.Control
                  as="select"
                  title="Game Difficulty"
                  value={this.state.level}
                  onChange={this.levelChange}
                >
                  <option value="1-Player">Beginner</option>
                  <option value="2-Player">Expert</option>
                </Form.Control>
              )}
            </div>
            <div className="game-options-div">
              {this.state.players === "1-Player" && (
                <Form.Control
                  as="select"
                  title="Game Difficulty"
                  value={this.state.first}
                  onChange={this.firstChange}
                >
                  <option value="Human">Human</option>
                  <option value="Computer">Computer</option>
                </Form.Control>
              )}
            </div>
            <div className="game-options-div">
              <DropdownButton
                variant="dark"
                className="sort"
                title="Sort Moves"
              >
                <Dropdown.Item as="button" onClick={() => this.sortHistory()}>
                  {this.state.isAscending ? "Descending" : "Ascending"}
                </Dropdown.Item>
              </DropdownButton>
              <div>
                <Button
                  onClick={() => this.refreshPage()}
                  className="reset"
                  variant="dark"
                >
                  <b style={{ color: "yellow" }}>Clear Board</b>
                </Button>
              </div>
            </div>
          </div>
          <div className="game-board">
            <div className="status">{status}</div>
            <div className="board-row-div">
              <Board
                className="board-main"
                winningSquares={winner ? winner.line : []}
                squares={current.squares}
                onClick={i => this.handleClick(i)}
              />
            </div>
          </div>
          <div className="game-info">
            <div className="computer-start-div">
              <Button
                onClick={this.gameStarts}
                className="computer-start"
                variant="success"
              >
                <b style={{ color: "yellow" }}>Computer Start</b>
              </Button>
            </div>
            <div className="moves-list sort">
              <ol>{this.state.isAscending ? moves : moves.reverse()}</ol>
            </div>
          </div>
        </div>
      </Fragment>
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

export default GameApp;
