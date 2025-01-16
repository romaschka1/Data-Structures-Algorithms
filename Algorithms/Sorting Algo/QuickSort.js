/*
  Quick sort (simplified version)
  Time: Average case - O(n*log(n)), Worst case - O(n^2)
  Memory: O(n)
*/
function quicksort(array) {
  // Base case, array have 0 or 1 element
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[0];
  
  // Store items smaller that pivot
  const left = []; 
  // Store items greater that pivot
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  // Recursively sort array
  // Combine everything in the end
  return [...quicksort(left), pivot, ...quicksort(right)];
};

// ---------------------------------------------------------------

/*
  Quick sort (memory optimized version)
  Time: Average case - O(n*log(n)), Worst case - O(n^2)
  Memory: O(log*n)
*/
function quicksort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    // Find pivot and swap items in place from left to right side
    const pivot = partition(array, left, right);

    // Recursively sort the elements before and after the pivot
    quicksort(array, left, pivot - 1);
    quicksort(array, pivot + 1, right);
  }

  return array;
}

function partition(array, left, right) {
  const pivot = array[right];
  let i = left - 1; // Index of the smaller element

  for (let j = left; j < right; j++) {
    // If the current element is less than or equal to the pivot
    if (array[j] <= pivot) {
      i++;
      // Swap array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Swap the pivot element with the element at index i + 1
  [array[i + 1], array[right]] = [array[right], array[i + 1]];

  return i + 1; // Return the pivot index
}