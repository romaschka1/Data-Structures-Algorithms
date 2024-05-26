class MinHeap {
  constructor (items) {
    this.data = [];

    for (const item of items) {
      this.push(item);
    }
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.data.length;
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.data.length;
  }

  getParent(index) {
    return this.data[this.getParentIndex(index)];
  }
  getLeftChild(index) {
    return this.data[this.getLeftChildIndex(index)];
  }
  getRightChild(index) {
    return this.data[this.getRightChildIndex(index)];
  }

  swap(firstIndex, secondIndex) {
    let temp = this.data[firstIndex];
    this.data[firstIndex] = this.data[secondIndex];
    this.data[secondIndex] = temp;
  }

  push(item) {
    this.data.push(item);
    // Sort heap from bottom(where new item was inserted) to top
    // Pass inserted node index, to get starting position
    this.heapifyUp(this.data.length - 1);
  }

  pop() {
    if (this.data.length === 0) {
      return;
    }
    // Get smallest value to return
    let node = this.data[0];
    // Replace `root` element, with the last node
    this.data[0] = this.data.pop();
    

    // Validate all heap from top to bottom
    this.heapifyDown(0);
    return node;
  }

  // Method to validate the order of heap elements from top to bottom
  heapifyDown(index) {
    // Get current parent index
    let smallest = index;

    // Two if statement to get the smallest right or left child
    if (this.hasLeftChild(index) && this.data[smallest] > this.getLeftChild(index)) {
      smallest = this.getLeftChildIndex(index);
    }
    if (this.hasRightChild(index) && this.data[smallest] > this.getRightChild(index)) {
      smallest = this.getRightChildIndex(index);
    }

    if (smallest != index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  // Method to validate the order of heap elements from bottom to top
  heapifyUp(index) {
    // If `parent` is smaller then `current node`
    if(this.hasParent(index) && this.getParent(index) > this.data[index]) {
      // Swap `parent` and `current node`
      this.swap(this.getParentIndex(index), index);
      // Recursively call `heapifyUp` to validate next parent+child pair
      // Pass new `current node` index
      this.heapifyUp(this.getParentIndex(index));
    }
  }
}



// # Default Homebrew MySQL server config
// [mysqld]
// # Only allow connections from localhost
// default_authentication_plugin=mysql_native_password
// bind-address = 127.0.0.1
// mysqlx-bind-address = 127.0.0.1
