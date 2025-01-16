const arr = [1,2,3];

// Subsets
// res = [[1,2,3],[1,2],[1,3],[1],[2,3],[2],[3],[]]
const getSubsets = (index, temp) => {
  // Base case, no more numbers available
  if (arr[index] === undefined) {
    res.push([...temp]);
    return;
  }

  temp.push(arr[index]);
  getSubsets(index + 1, temp);

  temp.pop();
  getSubsets(index + 1, temp);
}

// Permutations
// res = [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
const getPermutations = (used, temp) => {
  // Base case, no more numbers available
  if (temp.length === arr.length) {
    res.push([...temp]);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    // Number was already used
    if (used.has(i)) {
      continue;
    }

    temp.push(arr[i]);
    used.add(i);
    getPermutations(used, temp);

    temp.pop();
    used.delete(i);
  }
}
