/*
  Use cases:
  - Given grid
  - Find shortest path
  - Find all count of all ways

  Time: O(rows * cols)
  Memory: O(rows * cols)
*/

const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
];
const rows = grid.length;
const cols = grid[0].length;

const dp = Array(rows).fill(null).map(() => Array(cols).fill(0));

// Base case, initialize the first cell
dp[0][0] = grid[0][0];

// Fill the first row (if traversal from top-left)
for (let i = 1; i < cols; i++) {
  dp[0][i] = dp[0][i - 1] + grid[0][i];
}

// Fill the first column (if traversal from top-left)
for (let i = 1; i < rows; i++) {
  dp[i][0] = dp[i - 1][0] + grid[i][0];
}

// Fill the rest of the DP table
for (let x = 1; x < rows; x++) {
  for (let y = 1; y < cols; y++) {
    // Example: Take the minimum of the top or left cell and add the current grid value
    dp[x][y] = Math.min(dp[x - 1][y], dp[x][y - 1]) + grid[x][y];
  }
}

return dp[rows - 1][cols - 1];