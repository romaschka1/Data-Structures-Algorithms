// Regular implementation for binary search
function regularBinarySearch() {
  const arr = [1,2,3,4,5,6];

  let left = 0;
  let right = arr.length - 1;

  let match = 3;

  /*
    `<=` is needed to include most left and most right elements
    in example above it's `1` and `6`
  */
  while (left <= right) {
    const mid = Math.floor((left+right)/2);

    if (arr[mid] < match) {
      left = mid + 1;
    } else if (arr[mid] > match) {
      right = mid - 1;
    } else {
      return true;
    }
  }

  return false;
}

// Finding closest to target element
function findClosest() {
  const arr = [1,2,3,4,7,8,9];
  const target = 5;

  let left = 0;
  let right = arr.length - 1;

  let closest = arr[0];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    // Check if current mid is closer to target than the closest
    if (Math.abs(arr[mid] - target) < Math.abs(closest - target)) {
      closest = arr[mid];
    }

    if (arr[mid] === target) {
      return arr[mid];
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return closest;
}
