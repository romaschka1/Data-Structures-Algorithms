var networkDelayTime = function(times, n, k) {
  let edges = {};

  // Assign child nodes with time to source node
  for (const [source, target, time] of times) {
    if (edges[source] === undefined) {
      edges[source] = [];
    }
    edges[source].push([target, time]);
  }

  let minHeap = new MinHeap();
  // Starting point
  minHeap.push([k, 0]);

  let history = new Set();
  let sum = 0;

  while(minHeap.size) {
    // Get the next node with minimum time
    let [node, time] = minHeap.pop();

    if (history.has(node)) {
        continue;
    }

    sum = time;
    // console.log(sum, time);
    history.add(node);

    // Run BFS for each child node
    if (edges[node] !== undefined) {
      for (const [childNode, childTime] of edges[node]) {
        if (!history.has(childNode)) {
          // Updating new node time, to get the whole path time
          minHeap.push([childNode, childTime + time]);
        }
      }
    }
  }

  // Check if all nodes are visited
  return history.size === n ? sum : -1;
};