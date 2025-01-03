/*
  ~ Array data structure ~

  Insertion: O(n)
  Deletion: O(n)
  Lookup: O(n)

  Pros: items in oder, lots build-in helper functions
  Cons: search and deletion speed
*/

const array = [1,2,3];

// Find max element
const max = Math.max(...array);

// Copy array
const copy = [...array];

// Find sum of all array items
const sum = array.reduce((sum, current) => sum + current, 0);