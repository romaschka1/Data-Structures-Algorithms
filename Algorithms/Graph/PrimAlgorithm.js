var minCostConnectPoints = function(points) {
  let sum = 0;
  let visited = new Array(points.length).fill(false);
  // Array of min distances
  let distances = new Array(points.length).fill(Infinity);
  // Set starting point
  distances[0] = 0;

  let getMinDistance = () => {
    let minDist = Infinity;
    let minEdge = -1;

    for (let i = 0; i < distances.length; i++) {
      if (!visited[i] && distances[i] < minDist) {
        minDist = distances[i];
        minEdge = i;
      }
    }

    return minEdge;
  }

  for (let i = 0; i < points.length; i++) {
    // Get next new poin with the smallest distance
    let minEdge = getMinDistance();

    visited[minEdge] = true;
    sum += distances[minEdge];

    // Check every new distance of new point, and compare it to present distances
    // If new distance is smaller then the present one, override it
    // Expand minimum spanning tree (Prim algo)
    for (let j = 0; j < points.length; j++) {
      if (!visited[j]) {
        const dist = Math.abs(points[minEdge][0] - points[j][0]) + Math.abs(points[minEdge][1] - points[j][1]);
        // Override distance with smaller value
        distances[j] = Math.min(distances[j], dist);
      }
    }
  }

  return sum;
};