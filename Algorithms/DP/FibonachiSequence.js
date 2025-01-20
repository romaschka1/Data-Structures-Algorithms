/*
  Use cases:
  - When solution depends on smaller problems
  - When we don't need whole cache, and can rely only on couple of values

  Formula: F(n) = F(n−1) + F(n−2)
  To reach `F(n)` we need only two values, so simplified formula will look like this:
  third = second + first

  Time: O(n)
  Memory: O(1)
*/

const fib = (n) => {
  // Base case, since fib(0) = 0 and fib(1) = 1
  if (n <= 1) return n;

  let first = 0; // F(n-2)
  let second = 1; // F(n-1)
  let third = 0; // F(n)

  for (let i = 2; i <= n; i++) {
    // Get F(i)
    third = first + second;
    // Shift (n-2) to (n-1)
    first = second;
    // Shift (n-1) to (n)
    second = third;
  }

  return third;
};