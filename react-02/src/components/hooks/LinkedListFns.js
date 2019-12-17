export class ListNode {
  constructor(subject, amount, forwardPointer = null, backwardPointer = null) {
    this.subject = subject;
    this.amount = amount;
    this.forwardPointer = forwardPointer;
    this.backwardPointer = backwardPointer;
  }

  showDetails() {
    return `
    subject is: ${subject}\namount is: ${amount}\nforward node: ${forwardPointer}\nbackward node: ${backwardPointer}`.trim();
  }
  /*
  deleteFromNode(newListItem) {
    let indexForDelete = newListItem.indexOfListItem(this);
    newListItem.deleteListItem(indexForDelete);
  }

  insertAfterNode(newListItem, subject, amount) {
    let indexForInsert = newListItem.indexOfListItem(this);
    newListItem.insertAfterIndex(indexForInsert, subject, amount);
  }
  */
}

export class LinkedList {
  constructor() {
    // the head attribute stores a pointer to the first node in our linked list
    this.first = null;
    this.length = 0;
  }
  /*
  first ⇒ position to the first node
  last ⇒ position to the last node
  next ⇒ move to the next node
  previous ⇒ backup one node (how are we going to do this?)
  insert ⇒ inserts a new node after the current node (which node will be the current node after the insertion?)
  delete ⇒ delete the current node (which node will be the current node after the deletion?)
*/
  insertAtFirstNode(subject, amount) {
    // A newNode object is created with property data and next = null
    let newNode = new ListNode(subject, amount);
    if (this.first !== null) {
      // The pointer forwardPointer is assigned first pointer so that both pointers now point at the same node.
      newNode.forwardPointer = this.first;
      // Point backwards too for doubly linked list
      this.first.backwardPointer = newNode;
    }
    // As we are inserting at the beginning, the first pointer needs to now point at the newNode.
    this.first = newNode;
    return;
  }

  insertAtLastNode(subject, amount) {
    let newNode = new ListNode(subject, amount);
    if (!this.first) {
      this.first = newNode;
      return;
    }
    let last = this.first;
    while (last.forwardPointer !== null) {
      last = last.forwardPointer;
    }
    last.forwardPointer = newNode;
    newNode.forwardPointer = last;
    return;
  }

  insertAfterCurrent(index, subject, amount) {
    let target = this.find(index);
    if (target === "index not found") return "index not found";
    let newNode = new ListNode(subject, amount, target.forwardPointer, target);
    if (target.forwardPointer !== null)
      target.forwardPointer.backwardPointer = newNode;
    target.forwardPointer = newNode;
    return;
  }

  find(index) {
    let target = this.first;
    for (let counter = 0; counter < index; counter++) {
      if (target.forwardPointer === null) return "index not found";
      target = target.forwardPointer;
    }
    if (target === null) return "index not found";
    return target;
  }

  show() {
    let show = [];
    let last = this.first;
    if (last === null) return null;
    while (last !== null) {
      show.push([last.subject, ": ", last.amount], ", ");
      last = last.forwardPointer;
    }
    return show;
  }

  last() {
    if (!this.first) return;
    let last = this.first;
    while (last.forwardPointer !== null) {
      last = last.forwardPointer;
    }
    return last;
  }

  indexOfListItem(listItem) {
    let last = this.first;
    if (last === null) return null;
    let counter = 0;
    while (last !== null) {
      if (last === listItem) return counter;
      last = last.forwardPointer;
      counter = counter + 1;
    }
    return counter;
  }
  /*
  findAndShow(index) {
    let target = this.find(index);
    if (target === "index not found") return "index not found";
    return target.show();
  }
  */
  deleteListItem(index) {
    let target = this.find(index);
    if (target === "index not found") return "index not found";
    if (target.forwardPointer && target.backwardPointer) {
      target.backwardPointer.forwardPointer = target.forwardPointer;
      target.forwardPointer.backwardPointer = target.backwardPointer;
      return;
    }
    if (target.forwardPointer && !target.backwardPointer) {
      target.forwardPointer.backwardPointer = null;
      this.first = target.forwardPointer;
      return;
    }
    if (!target.forwardPointer && target.backwardPointer) {
      target.backwardPointer.forwardPointer = null;
      return;
    }
    if (!target.forwardPointer && !target.backwardPointer) {
      this.first = null;
      return;
    }
  }
}
