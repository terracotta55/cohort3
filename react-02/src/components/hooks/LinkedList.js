import React, { useState, Fragment } from "react";
import "./LinkedList.css";
import { LinkedList } from "./LinkedListFns";

let list = new LinkedList();

const LinkedListApp = () => {
  const [subject, setSubject] = useState("");
  const [amount, setAmount] = useState("");

  function onSubjectInputChange(e) {
    setSubject(e.target.value);
  }

  function onAmountInputChange(e) {
    setAmount(e.target.value);
  }

  function insertFirst() {
    if (subject === "" || amount === "") return;
    list.insertAtFirstNode(subject, amount);
    setSubject("");
    setAmount("");
    console.log("clicked insert at first");
  }

  function InsertLast() {
    if (subject === "" || amount === "") return;
    list.insertAtLastNode(subject, amount);
    setSubject("");
    setAmount("");
    console.log("clicked insert at end");
  }

  function Insert() {
    if (subject === "" || amount === "") return;
    if (list.current === null) return;
    list.insertAfterCurrent(subject, amount);
    setSubject("");
    setAmount("");
    console.log("clicked insert");
  }

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      InsertLast();
      console.log("enter pressed");
    }
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
            />
            <br />
            <button className="list-btn" onClick={insertFirst}>
              First
            </button>
            <button className="list-btn">{"<<"}</button>
            <button className="list-btn">{"<"}</button>
            <button className="list-btn" onClick={Insert}>
              (+) Node
            </button>
            <button className="list-btn">(-) Node</button>
            <button className="list-btn">{">"}</button>
            <button className="list-btn">{">>"}</button>
            <button
              className="list-btn"
              onClick={InsertLast}
              onKeyPress={handleKeyPress}
            >
              Last
            </button>
            <div id="resultsLinkedList">
              <span>
                <strong style={{ color: "grey" }}>Nodes Listed Here:</strong>
              </span>
              <br />
              <span>{list.show()}</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LinkedListApp;
