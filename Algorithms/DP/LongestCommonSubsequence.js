/*
  Use cases:
  - Find a subsequence that appears in the same order in both sequences

  Time: O(first.length * second.length)
  Memory: O(first.length * second.length)
*/

const first = 'hello';
const second = 'peoples';

// Create a cache, + 1 needed to not exceed the boundaries
const dp = Array(first.length + 1).fill(null)
  .map(() => Array(second.length + 1).fill(0));

// Build the DP table iteratively
for (let x = 1; i <= first.length; x++) {
  for (let y = 1; j <= second.length; y++) {
    // Characters match, extend the subsequence
    if (first[x - 1] === second[y - 1]) {
      dp[x][y] = dp[x - 1][y - 1] + 1;
    } else {
      // Characters don't match, take the maximum of excluding one character
      dp[x][y] = Math.max(dp[x - 1][y], dp[x][y - 1]);
    }
  }
}

// Length is: 2
return dp[first.length][second.length];

/*
  Diagram of `dp` cache in the end:

      ""    p    e    o    p    l    e    s
  ""   0    0    0    0    0    0    0    0
  h    0    0    0    0    0    0    0    0
  e    0    0    1    1    1    1    1    1
  l    0    0    1    1    1    2    2    2
  l    0    0    1    1    1    2    2    2
  o    0    0    1    2    2    2    2    2
*/