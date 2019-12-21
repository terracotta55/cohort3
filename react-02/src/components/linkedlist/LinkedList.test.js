import { ListNode, LinkedList } from "./LinkedListFns.js";

describe("testing LinkedList class methods", () => {
  test(".showDetails() returns subject and amount", () => {
    let newNode = new ListNode("One", 100);
    expect(newNode.showDetails()).toEqual(`subject: One\namount: 100`);
  });

  test(".insert() inserts new node after current", () => {
    let newList = new LinkedList();
    newList.insert("One", 100);
    expect(newList.head.subject).toEqual("One");
    expect(newList.current.forwardPointer).toEqual(null);
    newList.insert("Two", 200);
    expect(newList.head.subject).toEqual("One");
    expect(newList.current.subject).toEqual("Two");
    expect(newList.current.forwardPointer).toEqual(null);
  });

  test(".first() moves current node to head", () => {
    let newList = new LinkedList();
    newList.insert("One", 100);
    newList.insert("Two", 200);
    newList.first();
    expect(newList.current.subject).toEqual("One");
    expect(newList.current.forwardPointer.subject).toEqual("Two");
  });

  test(".last() moves current node to tail", () => {
    let newList = new LinkedList();
    newList.insert("One", 100);
    newList.insert("Two", 200);
    newList.insert("Three", 300);
    newList.last();
    expect(newList.current.subject).toEqual("Three");
    expect(newList.current.forwardPointer).toEqual(null);
  });

  test(".next() makes next node the current node", () => {
    let newList = new LinkedList();
    newList.insert("One", 100);
    newList.insert("Two", 200);
    newList.insert("Three", 300);
    newList.first();
    newList.next();
    expect(newList.current.amount).toEqual(200);
    expect(newList.current.forwardPointer.amount).toEqual(300);
  });

  test(".previous() makes previous node the current node", () => {
    let newList = new LinkedList();
    newList.insert("One", 100);
    newList.insert("Two", 200);
    newList.insert("Three", 300);
    newList.insert("Four", 400);
    newList.previous();
    expect(newList.current.amount).toEqual(300);
    expect(newList.current.forwardPointer.amount).toEqual(400);
  });

  test(".delete() deletes current, makes previous new current", () => {
    let newList = new LinkedList();
    newList.insert("One", 100);
    newList.insert("Two", 200);
    newList.insert("Three", 300);
    newList.insert("Four", 400);
    newList.previous();
    newList.delete();
    expect(newList.current.amount).toEqual(200);
    expect(newList.current.forwardPointer.amount).toEqual(400);
  });

  test(".total() returns total amount in list", () => {
    let newList = new LinkedList();
    newList.insert("One", 100);
    newList.insert("Two", 200);
    newList.insert("Three", 300);
    expect(newList.total()).toEqual(600);
  });

  test("final tests all methods", () => {
    let newList = new LinkedList();
    newList.insert("One", 100);
    newList.insert("Two", 200);
    newList.insert("Three", 300);
    newList.last();
    newList.next(); //no next since there's forwardpointer is null
    expect(newList.current.amount).toEqual(300);
    newList.insert("Four", 400);
    newList.insert("Five", 500);
    newList.previous();
    expect(newList.current.amount).toEqual(400);
    newList.delete();
    expect(newList.current.amount).toEqual(300);
    expect(newList.current.forwardPointer.subject).toEqual("Five");
    expect(newList.current.forwardPointer.forwardPointer).toEqual(null);
    newList.first();
    newList.delete();
    expect(newList.head.subject).toEqual("Two");
    newList.last();
    newList.insert("Six", 100);
    newList.insert("Seven", 400);
    expect(newList.total()).toEqual(1500);
  });
});
