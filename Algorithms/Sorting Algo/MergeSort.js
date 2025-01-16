/*
  Time: O(n*log(n))
  Memory: O(n)
*/
let mergeSort = (arr, left, right) => {
  // Base case, we need at least 2 items in range to sort them
  if (left === right) {
    return arr;
  }

  let middle = Math.floor((left + right) / 2);

  // First recessively split array in two parts
  mergeSort(arr, left, middle);
  mergeSort(arr, middle + 1, right);

  let leftArr = arr.slice(left, middle + 1);
  let rightArr = arr.slice(middle + 1, right + 1);

  let arrIndex = left;
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare items in two arrays, sort them and store in sorted array
  while (leftArr[leftIndex] !== undefined && rightArr[rightIndex] !== undefined) {
    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      arr[arrIndex] = leftArr[leftIndex];
      leftIndex++;
    } else {
      arr[arrIndex] = rightArr[rightIndex];
      rightIndex++;
    }

    arrIndex++;
  }

  // Edge case, in case arrays have different length
  while(leftArr[leftIndex] !== undefined) {
    arr[arrIndex] = leftArr[leftIndex];
    arrIndex++;
    leftIndex++;
  }
  while(rightArr[rightIndex] !== undefined) {
    arr[arrIndex] = rightArr[rightIndex];
    arrIndex++;
    rightIndex++;
  }

  return arr;
}

return mergeSort(nums, 0, nums.length - 1);
