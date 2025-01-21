class UnionFind {
  constructor(length) {
    // Initialize the ranks array, where each node initially has a rank of 1.
    this.ranks = new Array(length).fill(1);
    
    // Initialize the parents array, where each node is its own parent at the start.
    // length = 3, parents = [0,1,2]
    this.parents = Array.from(Array(length).keys());
  }

  // Find the root (representative) of the tree containing the given index.
  find(index) {
    let parent = this.parents[index];

    // Traverse up the tree until we find the root (a node that is its own parent).
    while (parent !== this.parents[parent]) {
      // Path compression: Make the current node point directly to its grandparent.
      parent = this.parents[this.parents[parent]];
    }

    return parent;
  }

  // Union two nodes by connecting their trees.
  // The smaller tree (determined by rank) is attached under the larger tree for efficiency.
  union(firstNode, secondNode) {
    // Find the roots (representatives) of both nodes.
    const firstParent = this.find(firstNode);
    const secondParent = this.find(secondNode);

    // If the roots are the same, the nodes are already in the same set.
    if (firstParent === secondParent) {
      return false;
    }

    // Compare the ranks to determine which tree should be attached under the other.
    if (this.ranks[firstParent] > this.ranks[secondParent]) {
      // Attach the smaller tree (secondParent) under the larger tree (firstParent).
      this.parents[secondParent] = firstParent;

      // Update the rank of the new root (firstParent) to reflect the union.
      this.ranks[firstParent] += this.ranks[secondParent];
    } else {
      // Attach the smaller tree (firstParent) under the larger tree (secondParent).
      this.parents[firstParent] = secondParent;

      // Update the rank of the new root (secondParent) to reflect the union.
      this.ranks[secondParent] += this.ranks[firstParent];
    }

    return true; // Return true to indicate that a union was performed successfully.
  }
}
