class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  iterate() {
    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }

  search(data) {
    let idx = 0;
    let node = this.head;
    while (node) {
      if (node.data === data) return idx;
      node = node.next;
      idx += 1;
    }
    return -1;
  }
}

let ari = new ListNode("Ari");
let malcolm = new ListNode("Malcolm", ari);
let pete = new ListNode("Pete", malcolm);
let ricky = new ListNode("Ricky", pete);
let sean = new ListNode("Sean", ricky);

class LinkedList {
  constructor() {
    // the head attribute stores a pointer to the first node in our linked list
    this.head = null;
    this.length = 0;
  }

  insert(data) {
    // inserts to the beginning of the linked list
    // what used to be  the head becomes the second element
    this.head = new Node(data, this.head);
    this.length++;
  }

  remove_value(value) {
    // remove any data value from the linked list

    // we need to store a pointer to a node and it's predecessor
    // so that when we remove the value we can just change the pointer!
    let prevNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === value) {
        if (prevNode) {
          // Set the previous node's next value to the node we're deleting's next attribute
          // effectively removing it from our sequence
          prevNode.next = currentNode.next;
        } else {
          this.head = currentNode.next;
        }
        currentNode = null;
        this.length--;
        return true;
      }
      // move to the next nodes
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }
}

let thankUNext = new LinkedList();
thankUNext.insert("Ari");
thankUNext.insert("Malcolm");
thankUNext.insert("Pete");
thankUNext.insert("Ricky");
thankUNext.insert("Sean");

thankUNext.remove_value("Ricky");
