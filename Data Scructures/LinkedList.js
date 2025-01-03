/*
  ~ Linked list data structure ~

  Insertion: O(n)
  Deletion: O(n)
  Lookup: O(n)

  Pros: items in oder, O(1) deletion/insertion if we have item pointer
  Cons: search and deletion speed
*/

// Implementation of doubly-linked linked list
class ListNode {
  value = null;
  prev = null;
  next = null;
  
  constructor (newValue) {
    this.value = newValue;    
  }
}

let list = new ListNode(-1);
let head = list;
let tail = list;
let middleNode;

for (let i = 0; i < 5; i++) {
  const newNode = new ListNode(i);
  
  tail.next = newNode;
  newNode.prev = tail;
  
  tail = tail.next;

  if (i === 2) {
    middleNode = newNode;
  }
}

// Insert new node inside linked list
const newNode = new ListNode(9);
// Set new node pointers
newNode.next = middleNode.next;
newNode.prev = middleNode;
// Reassign pointers of left and right nodes
middleNode.next.prev = newNode;
middleNode.next = newNode;