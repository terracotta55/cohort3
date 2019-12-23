import React, { useState, Fragment, useContext, useEffect } from "react";
import "./LinkedList.css";
import Button from "react-bootstrap/Button";
import { LinkedList } from "./LinkedListFns";
import { ThemeContext } from "../themecontext/ThemeContext";

const newList = new LinkedList();

const LinkedListApp = () => {
  const [subject, setSubject] = useState("");
  const [amount, setAmount] = useState("");
  const [current, setCurrent] = useState("");
  const [total, setTotal] = useState("");
  const [focus, setFocus] = useState("subject");
  const context = useContext(ThemeContext);
  let target = context.targetItem;
  let setTarget = context.changeTarget;

  useEffect(() => {
    document.getElementById(focus).focus();
  });

  function pressEnter(e) {
    if (e.key === `Enter`) {
      handleInsert();
      console.log("enter pressed");
    }
  }

  function onSubjectInputChange(e) {
    setSubject(e.target.value);
    setFocus("subject");
  }

  function onAmountInputChange(e) {
    setAmount(e.target.value);
    setFocus("amount");
  }

  const handleInsert = () => {
    newList.insert(subject, amount);
    setCurrent(newList.current);
    setTarget(newList.current);
    setTotal(newList.total());
    setSubject("");
    setAmount("");
    setFocus("subject");
    console.log("insert clicked");
  };

  const handleFirst = () => {
    newList.first();
    setCurrent(newList.current);
    setTarget(newList.current);
    console.log("first clicked");
  };

  const handleLast = () => {
    newList.last();
    setCurrent(newList.current);
    setTarget(newList.current);
    console.log("last clicked");
  };

  const handleNext = () => {
    newList.next();
    setCurrent(newList.current);
    setTarget(newList.current);
    console.log("next clicked");
  };

  const handlePrevious = () => {
    newList.previous();
    setCurrent(newList.current);
    setTarget(newList.current);
    console.log("previous clicked");
  };

  const handleDelete = () => {
    newList.delete();
    setCurrent(newList.current);
    setTarget(newList.current);
    setTotal(newList.total());
    console.log("delete clicked");
  };

  const renderNodes = () => {
    const listDisplay = [];
    let newNode = newList.head;

    while (newList.head && newNode) {
      if (current === newNode) {
        listDisplay.push(
          <div
            key={newNode.subject + newNode.amount}
            id="node-list-current"
            style={{ color: "green", fontWeight: "bold" }}
          >
            {newNode.subject}: {newNode.amount}
            {" <-"}
          </div>
        );
        newNode = newNode.forwardPointer;
      } else {
        listDisplay.push(
          <div
            key={newNode.subject + newNode.amount}
            id="node-list"
            style={{ color: "#808080" }}
          >
            {newNode.subject}: {newNode.amount}{" "}
          </div>
        );
        newNode = newNode.forwardPointer;
      }
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
              id="subject"
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
              id="amount"
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
              <b style={{ color: "white" }}>{"[++]"}</b>
            </Button>
            <Button onClick={handleDelete} id="reset" variant="primary">
              <b style={{ color: "white" }}>{"[- -]"}</b>
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
              <p
                style={{
                  color: "grey"
                }}
              >
                {target
                  ? `current: ${target.showDetails()}`
                  : "nothing selected"}
              </p>
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
