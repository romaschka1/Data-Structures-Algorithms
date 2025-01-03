/*
  ~ Graph data structure ~

  Insertion: O(1)
  Deletion: O(n)
  Lookup: O(n)

  Pros: items in oder, lots build-in helper functions
  Cons: search and deletion speed
*/

class GraphNode {
  value = null;
  children = {};

  constructor(newValue) {
    this.value = newValue;
  }
}

let queries = [[1,2],[1,3],[1,4], [3,2], [3,5]];
let adjList = {};

for (const [from, to] of queries) {
  if (adjList[from] === undefined) {
    adjList[from] = [];
  }
  if (adjList[to] === undefined) {
    adjList[to] = [];
  }

  // Creating two way connection between nodes
  adjList[from].push(to);
  adjList[to].push(from);
}

/*
  Created graph representation:

  (1)-------(2)
   | \     /
   |  \   /
   |   (3)   
   |      \    
  (4)      (5)
*/