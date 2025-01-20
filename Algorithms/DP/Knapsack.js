/*
  Use cases:
  - When we have list of weights
  - When there is some target we need to reach using given weights
  - When there is some boundary we can't exceed

  Time: O(weights.length * target)
  Memory: O(target)
*/

const weights = [2,3,5];
// Variable needed only for `Case 2` example
const sum = weights.reduce((total, item) => total + item, 0);
const target = 10;

// Init cache to store most optimized result for each number in capacities
// target + 1 needed to cover 0 index case
const dp = Array(target+1).fill(0);
// Set base case, if needed
dp[0] = 1;

// Generate values for each weights
for (const weight of weights) {
  // Case 1. (Unbounded Knapsack)
  // Count all ways to reach `target` with numbers in `weights` (numbers can be used `multiple` times)
  for (let current = weight; current <= target; current++) {
    // Update count of `current` value if we computed `current-weight` before
    // That means there is the way to reach `current` with `weight`
    dp[current] += dp[current-weight];
  }
  // Case 2. (0/1 Knapsack)
  // Check if it's possible to reach `target` with numbers in `weights` (numbers can be used only `one` time)
  for (let current = sum; current >= weight; current--) {
    // Check if there is the way to reach `current`
    // If we succeed before with `current-weight` then `current` is also reachable
    dp[current] = (dp[current] | dp[current-weight]);
  }
}

// Case 1. just returns all ways we can count to `target`
// Case 2. 1 - means we can reach `target`, 0 - we can't
return dp[target];

