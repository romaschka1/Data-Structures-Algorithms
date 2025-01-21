/*
  Use cases:
  - When tasks or courses have dependencies

  Time: O(n + edges.length)
  Memory: O(n + edges.length)
*/

const n = 6;
const edges = [
  [5, 2],
  [5, 0],
  [4, 0],
  [4, 1],
  [2, 3],
  [3, 1]
];

let visiting = new Set(); // Helper to check if we inside a cycle
let visited = new Set(); // Helper to check if path was visited
let adjList = new Map();

const order = [];

// Fill adjacent list
for (let i = 0; i < n; i++) {
  adjList.set(i, []);
}
for (const [from, to] of edges) {
  adjList.get(from).push(to);
}

const dfs = (current) => {
  // Node was checked before
  if (visited.has(current)) return true;
  // Cycle detected
  if (visiting.has(current)) return false;
  visiting.add(current);

  // Check if we can reach to all of the child nodes
  for (const childNode of adjList.get(current)) {
    if (!dfs(childNode)) {
      return false;
    }
  }

  // All children was checked and we can insert it in order
  visited.add(current);
  order.push(current);

  return true;
}

for (const node of adjList.keys()) {
  if (!dfs(node)) {
    // Cycle detected, can't form topological order
    return [];
  }
}

return order;