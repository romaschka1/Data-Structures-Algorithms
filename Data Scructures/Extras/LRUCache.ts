// Definition of double linked list (DLL)
type CacheNode = {
  value: number;
  // Points to `data` hashmap
  key: number | null;
  // Left pointer
  prev: CacheNode | null;
  // Reft pointer
  next: CacheNode | null;
};

class LRUCache {
  // Current list size
  private size: number;
  private capacity: number;
  // Hashmap to store all the keys which points to the DLL nodes
  // To keep O(1) time insertion and deletion
  private data: Map<number, CacheNode>;
  // Least used nodes
  private head: CacheNode;
  // Most used nodes
  private tail: CacheNode;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.size = 0;

    this.data = new Map();
    // Initialize dummy nodes for convenience
    this.head = { value: 0 } as CacheNode;
    this.tail = { value: 0 } as CacheNode;
    
    // Connect head and tail
    [this.tail.next, this.head.prev] = [this.head, this.tail];
  }

  remove(node: CacheNode): void {
    // Since it's DDL, we need to update two pointer, when removing `node`
    // Set prev node pointer to next node
    let [prev, next] = [node.prev, node.next];
    [prev.next, next.prev] = [next, prev];
  }

  insert(node: CacheNode): void {
    let [prev, next] = [this.head.prev, this.head];
    // Insert current current node between all nodes and head
    prev.next = next.prev = node;
    // Set current node pointers to head
    [node.next, node.prev] = [next, prev];
  }

  get(key: number): number {
    const node = this.data.get(key);
    if (!node) return -1;

    // Remove node, since it value has been used
    this.remove(node);
    // We need to move it all the way to `head`
    // Update most recent used value, by updating head
    this.insert(node);
    
    return node.value;
  }

  put(key: number, value: number): void {
    let node = this.data.get(key);

    if (!node) {
      node = { value, key } as CacheNode;
      this.data.set(key, node);

      this.size++;
    } else {
      node.value = value;
      // Remove current node
      this.remove(node);
    }
    // Insert it on the top
    this.insert(node);

    if (this.size > this.capacity) {
      this.size--;
      // Get least used node
      const node = this.tail.next;
      // Update left&right nodes pointers
      this.remove(node);

      node.prev = null;
      node.next = null;

      this.data.delete(node.key);
    }
  }
}