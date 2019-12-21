export class ListNode {
  constructor(subject, amount, forwardPointer = null) {
    this.subject = subject;
    this.amount = amount;
    this.forwardPointer = forwardPointer;
  }

  showDetails() {
    return `subject: ${this.subject}\namount: ${this.amount}`.trim();
  }
}

export class LinkedList {
  constructor() {
    // the head attribute stores a pointer to the first node in our linked list
    this.head = null;
    this.current = null;
  }
  /*
  first ⇒ position to the first node
  last ⇒ position to the last node
  next ⇒ move to the next node
  previous ⇒ backup one node (how are we going to do this?)
  insert ⇒ inserts a new node after the current node (which node will be the current node after the insertion?)
  delete ⇒ delete the current node (which node will be the current node after the deletion?)
*/
  first() {
    this.current = this.head;
  }

  last() {
    while (this.current.forwardPointer) {
      this.next();
    }
  }

  next() {
    if (this.current.forwardPointer) {
      this.current = this.current.forwardPointer;
    }
  }

  previous() {
    let previousNode = this.head;
    while (
      this.current !== this.head &&
      previousNode.forwardPointer !== this.current
    ) {
      previousNode = previousNode.forwardPointer;
    }
    this.current = previousNode;
  }

  insert(subject, amount) {
    if (!this.head) {
      this.head = new ListNode(subject, amount);
      this.current = this.head;
    } else {
      const newNode = new ListNode(subject, amount);
      newNode.forwardPointer = this.current.forwardPointer;
      this.current.forwardPointer = newNode;
      this.current = newNode;
    }
  }

  delete() {
    if (this.current === this.head) {
      this.head = this.head.forwardPointer;
      this.current = this.head;
    } else {
      this.previous();
      this.current.forwardPointer = this.current.forwardPointer.forwardPointer;
    }
  }

  total() {
    let total = 0;
    let node = this.head;
    while (node) {
      total += Number(node.amount);
      node = node.forwardPointer;
    }
    return total;
  }
}
