// Moving zeros to the left
let next = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    // Swap
    [arr[next], arr[i]] = [arr[i], arr[next]];
    next++;
  }
}