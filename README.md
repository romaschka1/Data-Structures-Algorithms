# Data Structures Algorithms

## Array, Data structure <br>
List of items stored in order with a unique index.

Operations: <br>
* Search O(n) -- arr.indexOf(1) <br>
* Insertion O(1) -- arr[0] = value <br>
* Deletion O(1) -- arr.splice(indexToDelete, 1) <br>

Cons:
* Without specific index, search in would be O(n) since we need to check every item inside array <br>
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

### Examples
You can use hashmap everywhere, the best cases are: 
* Given array and target, find if the target is present

### Problems <br>
[two-sum](https://leetcode.com/problems/two-sum/)

<br>

## Stack, Data structure <br>

The same realisation as an array but with a different idea. Basically, we stack items on top of each other, so the first item we store would be returned at the end.

### Use cases <br>
If inside the loop we need to dynamically add/remove/check item at the end.

### Problems <br>
https://leetcode.com/problems/valid-parentheses/
[valid-parentheses](https://leetcode.com/problems/valid-parentheses/)

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

## Code

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







