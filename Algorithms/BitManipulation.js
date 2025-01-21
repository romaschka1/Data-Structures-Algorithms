// Get binary representation on a number
const toBinary = (num) => num.toString(2);

// i-th Bit
const getBit = (num, i) => (num & (1 << i)) !== 0;
const setBit = (num, i) => num | (1 << i); // Set i-th Bit to 1
const clearBit = (num, i) => num & ~(1 << i); // Set i-th Bit to 0
const toggleBit = (num, i) => num ^ (1 << i); // Toggle i-th (from 1 => 0, 0 => 1)

// Check if a Number is a Power of 2
const isPowerOfTwo = (num) => num > 0 && (num & (num - 1)) === 0;

// Count the Number of 1 Bits (Hamming Weight)
const countSetBits = (num) => {
  let count = 0;
  while (num) {
    count += num & 1;
    num >>= 1;
  }
  return count;
};

// Reverse Bits
const reverseBits = (num) => {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (num & 1);
    num >>= 1;
  }
  return result >>> 0; // Ensure the result is unsigned
};

// Find XOR of All Numbers from 1 to n
const xorUptoN = (n) => {
  if (n % 4 === 0) return n;
  if (n % 4 === 1) return 1;
  if (n % 4 === 2) return n + 1;
  return 0;
};