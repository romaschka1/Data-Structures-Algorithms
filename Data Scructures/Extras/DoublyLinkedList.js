class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    
    // Case for empty list
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    // Append to the end
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;

    return node;
  }

  remove(node) {
    // Only one node left
    if (!node.next && !node.prev) {
      this.head = null;
      this.tail = null;
    // If node is tail
    } else if (!node.next) {
      this.tail = node.prev;
      this.tail.next = null;
    // If node is head
    } else if (!node.prev) {
      this.head = node.next;
      this.head.prev = null;
    // Node is in between
    } else {
      const prev = node.prev;
      const next = node.next;

      prev.next = next;
      next.prev = prev;
    }

    this.length--;
  }
}
