/*
  Graph is the data structure similar to tree, but the difference is, that graph can have unlimited child nodes.
  Nodes can points to each other, and can form a cycle.
*/
/*
  Let's create graph, from array with parent+child pairs.
*/

let pairs = [[0,1], [0,2], [2,3], [2,1]];

// Define graph object
let graph = {};

// Then iterate through pairs array
for (const [parent, child] of pairs) {
  // Check if parent node was not initialized
  if (graph[parent] === undefined) {
    // If not assign blank array to it
    graph[parent] = [];
  }

  // Add child to parent array
  graph[parent].push(child);
}

