import React, { useState, Fragment } from "react";
import "./LinkedList.css";
import Button from "react-bootstrap/Button";
import { LinkedList } from "./LinkedListFns";

const newList = new LinkedList();

const LinkedListApp = () => {
  const [subject, setSubject] = useState("");
  const [amount, setAmount] = useState("");
  const [current, setCurrent] = useState("");
  const [total, setTotal] = useState("");

  function pressEnter(e) {
    if (e.key === `Enter`) {
      handleInsert();
      console.log("enter pressed");
    }
  }

  function onSubjectInputChange(e) {
    setSubject(e.target.value);
  }

  function onAmountInputChange(e) {
    setAmount(e.target.value);
  }

  const handleInsert = () => {
    newList.insert(subject, amount);
    setCurrent(newList.current);
    setTotal(newList.total());
    setSubject("");
    setAmount("");
    console.log("insert clicked");
  };

  const handleFirst = () => {
    newList.first();
    setCurrent(newList.current);
    console.log("first clicked");
  };

  const handleLast = () => {
    newList.last();
    setCurrent(newList.current);
    console.log("last clicked");
  };

  const handleNext = () => {
    newList.next();
    setCurrent(newList.current);
    console.log("next clicked");
  };

  const handlePrevious = () => {
    newList.previous();
    setCurrent(newList.current);
    console.log("previous clicked");
  };

  const handleDelete = () => {
    newList.delete();
    setCurrent(newList.current);
    setTotal(newList.total());
    console.log("delete clicked");
  };

  const renderNodes = () => {
    const listDisplay = [];
    let newNode = newList.head;

    while (newList.head && newNode) {
      listDisplay.push(
        <div
          key={newNode.subject + newNode.amount}
          id="node-list"
          style={{ color: "#808080" }}
        >
          {newNode.subject}: {newNode.amount} {current === newNode ? " <-" : ""}
        </div>
      );
      newNode = newNode.forwardPointer;
    }
    return listDisplay;
  };

  return (
    <Fragment>
      <div id="container">
        <div id="left">
          <h2>
            <strong>Linked Lists Display</strong>
          </h2>
          <div id="leftChild">
            <br />
            <label className="left-input-label">Subject:</label>
            <input
              name="subject"
              type="text"
              className="left-input"
              placeholder="enter subject"
              value={subject}
              onChange={onSubjectInputChange}
              onKeyPress={pressEnter}
            />
            <br />
            <label className="left-input-label">Amount:</label>
            <input
              name="amount"
              type="number"
              className="left-input"
              placeholder="enter amount"
              min="0"
              step="0.01"
              value={amount}
              onChange={onAmountInputChange}
              onKeyPress={pressEnter}
            />
            <br />
            <br />
            <Button onClick={handleFirst} id="reset" variant="primary">
              <b style={{ color: "white" }}>{"|<"}</b>
            </Button>
            <Button onClick={handlePrevious} id="reset" variant="primary">
              <b style={{ color: "white" }}>{"<<"}</b>
            </Button>
            <Button onClick={handleInsert} id="reset" variant="primary">
              <b style={{ color: "white" }}>{"[+]"}</b>
            </Button>
            <Button onClick={handleDelete} id="reset" variant="primary">
              <b style={{ color: "white" }}>{"[-]"}</b>
            </Button>
            <Button onClick={handleNext} id="reset" variant="primary">
              <b style={{ color: "white" }}>{">>"}</b>
            </Button>
            <Button onClick={handleLast} id="reset" variant="primary">
              <b style={{ color: "white" }}>{">|"}</b>
            </Button>
            <div
              id="resultsLinkedList"
              className={newList.head ? null : "hidden"}
            >
              <span
                style={{
                  color: "grey",
                  fontWeight: "bold"
                }}
              >
                Nodes Listed Here:
              </span>
              <div id="resultsRender">
                {renderNodes()}
                <span style={{ color: "#808080" }}> Total: {total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LinkedListApp;
