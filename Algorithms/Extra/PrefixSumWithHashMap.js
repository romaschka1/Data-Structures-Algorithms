// Count number of subarrays with sum equal to k
const arr = [1,1,2,3];
const k = 2;

// Init with 0:1 ensures to count subarray which starts at 0 index
const map = {0:1};
let res = 0;
let sum = 0;

for (const num of arr) {
  sum += num;

  res += (map[sum-k] | 0);
  map[sum] = (map[sum] | 0) + 1;
}

// 2
return res;