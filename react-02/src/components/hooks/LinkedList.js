import React, { useState, Fragment } from "react";
import "./LinkedList.css";
import { LinkedList } from "./LinkedListFns";

let list = new LinkedList();

const LinkedListApp = () => {
  const [subject, setSubject] = useState("");
  const [amount, setAmount] = useState("");

  function pressEnter(e) {
    if (e.key === `Enter`) {
      insertLast();
      console.log("enter pressed");
    }
  }

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

  function insertLast() {
    if (subject === "" || amount === "") return;
    list.insertAtLastNode(subject, amount);
    setSubject("");
    setAmount("");
    console.log("clicked insert at last");
  }

  function insertCurrent() {
    if (subject === "" || amount === "") return;
    if (list.current === null) return;
    list.insertAfterCurrent(subject, amount);
    setSubject("");
    setAmount("");
    console.log("clicked insert at current");
  }

  function nextNode() {
    if (list.current === null) return;
    if (list.current.forwardNode === null) return;
    list.current = current.forwardNode;
  }

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
            <button className="list-btn" onClick={insertFirst}>
              First
            </button>
            <button className="list-btn">{"<<"}</button>
            <button className="list-btn">{"<"}</button>
            <button className="list-btn" onClick={insertCurrent}>
              (+) Node
            </button>
            <button className="list-btn">(-) Node</button>
            <button className="list-btn" onClick={nextNode}>
              {">"}
            </button>
            <button className="list-btn">{">>"}</button>
            <button className="list-btn" onClick={insertLast}>
              Last
            </button>
            <div id="resultsLinkedList">
              <span style={{ color: "grey" }}>Nodes Listed Here:</span>
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
