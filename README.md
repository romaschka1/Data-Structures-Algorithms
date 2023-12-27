# Data Structures Algorithms

## Array, Data structure <br>
List of items stored in order with a unique index.

Operations: <br>
* Search O(n) -- arr.indexOf(1) <br>
* Insertion O(1) -- arr[0] = value <br>
* Deletion O(n) -- arr.splice(indexToDelete, 1) <br>

Cons:
* Without specific index, search would be O(n) since we need to check every item inside array <br>
* Deletion would also take O(n) because we need to shift all of the items to the correct indexes.

### Examples
For the best time complexity, it's preferable to use Hashmap, arrays used to store some additional helper values.

<br>

## Hashmap, Data structure
Similar to an array but with faster access and removal. <br>

Operations: <br>
* Search O(1) -- map['item'] <br>
* Insertion O(1) -- map['item'] = value <br>
* Deletion O(1) -- map['item'] <br>

Cons:
* Some performance issues with large inputs <br>

### Example
Given an array of integers `nums` adn integer `target`, return indexes of two numbers, sum of witch would be equal to `target`.

Input:<br>
target = 9<br>
nums = [2,7,11,15]<br>

Here's the formula, we need to apply to this problem. <br>
`x + nums[i] = target`<br>

The idea here, to iterate threw nums array and dinamically add `nums[i]` inside the map, with the current index of `i` check if substraction of `target - nums[i]` is present in map. If yes we found a pair, otherwise we keep adding numbers and searching.<br>

First step: <br>
Since hashMap is empty, just add `2` item inside the map and set value of current index `0`. <br>
`{ '2': 0 }`  <br>

Second step: <br>
Next number would be `7`, firstlly we need to check if substraction is present inside the map, `target - 7 = 2`, and yes it present, we already added it in the first step, so the matching pair would be [0,1] since it's first and second items of array.

## Code
```js
  let target = 9;
  let nums = [2,7,11,15];

  // Initialisation of hashMap
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    // See the formula above
    let x = target - nums[i];

    // Check if `x` value is present in the map
    if (map[x] !== undefined) {
      // Return `x` index, and current index
      return [map[x], i];
    } else {
      // Store new value inside map with specific index
      map[nums[i]] = i;
    }
  }
```

### Problems <br>
[Two sum](https://leetcode.com/problems/two-sum/) <br>
[Top k frequent elements](https://leetcode.com/problems/top-k-frequent-elements/)

<br>

## Stack, Data structure <br>

The same realisation as an array but with a different idea. Basically, we stack items on top of each other, so the first item we store would be returned at the end. <br>
The concept of Stack is used in lots of concepts that I'll cover later: recursion, backtracking etc.

### Use cases <br>
If inside the loop we need to dynamically add/remove/check item at the end.

### Problems <br>
[Valid parentheses](https://leetcode.com/problems/valid-parentheses/)

<br>

## Two pointer, Algorithm

An algorithm that uses a two-pointer and intelligently updates each pointer depending on some condition. Uses inside the loop to reduce the number of iterations.

### Example

Given string `madam` check if this string is palindrome.

Firstly init two pointers `left` (start of the string) and `right` (end of the string) <br>

<pre>
l       r 
|       | 
v       v 
m a d a m
</pre>

After initialization run the loop to check if the left pointer, points to the same value as the right one. After comparing them, increment `left` pointer and decrement `right` pointer, to keep checking each pair. <br>

After one iteration: <br>

<pre>
  l   r 
  |   | 
  v   v 
m a d a m
</pre>

### Code

```js
let string = 'madam';
let left = 0;
let right = string.length - 1;

while (left < right) {
  if (string[left] !== string[right]) {
    return false;
  }

  left++;
  right--;
}

return true;
```

### Problems <br>
[Valid palindrome](https://leetcode.com/problems/valid-palindrome/)

<br>


## Sliding window, Algorithm
Implementation is pretty similar to two pointer algorithm. The difference is, that when we expand *window* we usually check all of the values inside *window* and with two pointers we compare only the left and right pointers.

### Example


## Binary Search, Algorithm
Binary search is the algorithm to search inside a sorter array, with time complexity O(log n)

### Example
Given a target value of `6` return `true` if it's present in the array and `false` if not. <br>

Implementation is the same as two pointer algorithm, we init `left` and `right`, and the main idea to get middle





