/*
  Use cases:
  - Problem requires splitting the string into substrings or subsequences
  - You need to optimize some property over these partitions
  - There's a need to consider different ways of partitioning the string

  Time: O(n^3)
  Memory: O(s.length + wordDict.size + average-word-size)
*/

// Example: word break
const wordDict = ['hello', 'world'];
const wordSet = new Set(wordDict);

const s = 'helloworld';
const n = s.length;

const dp = Array(n + 1).fill(false);
dp[0] = true; // Base case: Empty string can be segmented

// Fill the DP array
for (let x = 1; x <= n; x++) {
  for (let y = 0; y < i; y++) {
    const substring = s.substring(y, x);

    // Comparing logic
    // Example: word break
    if (dp[y] && wordSet.has(substring)) {
      dp[x] = true;
      break; 
    }
  }
}

return dp[n];