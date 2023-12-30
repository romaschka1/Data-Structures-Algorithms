Data structures + Algorithms
=============================

- [1. Array](#1-array)
- [2. Hashmap](#2-hashmap)
- [3. Stack](#3-stack)
- [4. Two pointers](#4-two-pointers)
- [5. Sliding window](#5-sliding-window)
- [6. Binary search](#6-binary-search)
- [7. Linked list](#7-linked-list)
- [8. Recusrsion](#8-recursion)
- [9. Tree](#-tree)

----------------------------------


# 1. Array<br>
Array is a list of items stored in order with a unique index, which represents the position in a list.

Operations: <br>
* Search O(n), where n is the length of array -- arr.indexOf(1) <br>
* Insertion O(1) -- arr[0] = value <br>
* Deletion O(n), where n is the length of removed substring -- arr.splice(indexToDelete, 1) <br>

Cons:
* Without specific index, search would be O(n) since we need to check every item inside array <br>
* Deletion would also take O(n) because we need to shift all of the items to the correct indexes.

### Examples
For the best time complexity, it's preferable to use Hashmap, arrays primarily used to store some additional helper values.

### Triks
* Get sub array from array
```js
  let arr = [1,2,3,4];
  // Return new array starting from the index `1` to the end on the index `3`
  // Note we add +1 to the end because the end index is not included
  arr.slice(1, 3+1);
```
* Creating a new Array
```js
  let arr = Array(3).fill(0);
  // New array will look like this
  // [0, 0, 0];
```
* Get every value in array
```js
  for (const num of nums) {
    //...
  }
```

------------------------------------------------------------------------------------------------------

# 2. Hashmap
Similar idea as an array but with faster access and removal. <br>

Operations: <br>
* Search O(1) -- map['item'] <br>
* Insertion O(1) -- map['item'] = value <br>
* Deletion O(1) -- map['item'] <br>

Cons:
* Some performance issues with large inputs <br>

### Example
Given an array of integers `nums` and integer `target`, return indexes of two numbers, sum of which would be equal to `target`.

Input:<br>
target = 9<br>
nums = [2,7,11,15]<br>

Here's the formula, we need to apply to this problem. <br>
`x + nums[i] = target`<br>

The idea here, is to iterate through a nums array and dynamically add `nums[i]` inside the map, with the current index of `i` check if subtraction of `target - nums[i]` is present in map. If yes we found a pair, otherwise we keep adding numbers and searching.<br>

First step: <br>
Since hashMap is empty, just add `2` item inside the map and set value of current index `0`. <br>
`{ '2': 0 }`  <br>

Second step: <br>
Next number would be `7`, firstlly we need to check if substraction is present inside the map, `target - 7 = 2`, and yes it present, we already added it in the first step, so the matching pair would be [0,1] since it's first and second items of array.

## Code
```js
  // O(n) - time
  // O(n) - memory

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

### Triks
* Count every element if even it not present
```js
  for (let i = 0; i < length; i++) {
    map[i] = (map[i] || 0) + 1;
  }
```
* Check if item in map
```js
  if (item in map) {
    // item is present inside the map
  }
```
* Get first item of the hashmap
```js
  map.keys().next().value
```
------------------------------------------------------------------------------------------------------

# 3. Stack<br>

The same realisation as an array but with a different idea. Basically, we stack items on top of each other, so the first item we store would be returned at the end. <br>
The concept of Stack is used in lots of concepts that I'll cover later: recursion, backtracking etc.

## Use cases <br>
* If inside the loop we need to dynamically add/remove/check item at the end.

## Problems <br>
[Valid parentheses](https://leetcode.com/problems/valid-parentheses/)

<br>

------------------------------------------------------------------------------------------------------

# 4. Two pointers<br>

An algorithm that uses a two-pointer and intelligently updates each pointer depending on some condition. Used inside the loop to reduce the number of iterations.

## Use cases
* Get two/three sum from `sorted` array
* Check if string is palindrome

## Example

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
// O(n) - time
// O(1) - memory

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

------------------------------------------------------------------------------------------------------

# 5. Sliding window
Implementation is pretty similar to two pointer algorithm. The difference is, we constantlly check whole `window` value, when we shift some of the pointers.

## Use cases
* Calculate the longest unique substring, with or without replacement
* Check if one string exist inside another
* Minimum size of subarray sum

## Example

Given string `s`, find length of the longest unique substring.

`s` = `"abcabcbb"` <br>

So the returned value should be `3`, since `abc` is our result. <br>

First we need to create some `store` to check whitch characters is included inside current `window`. <br>
For this purpose let's create hashset `chars`, inside it we will store each char. <br>
Then initialisate two pointers `left` and `right`, thouse will represent `start` and the `end` of current `window` <br>

Then we need to run loop, and with each iteration we will expand our `window` by incrementing `right` by one. <br>
While we are expanding, we need to also check if current char is not present in our `chars`, and update hashset with new char. <br>
Otherwise that's means that `widow` substring is not unique, we will delete char from `chars`, while current string is present in store. <br>
With each deletion we shift `left` pointer to shrink `window` size. <br>

For example we start iterating `right` from index `0`: <br>

<pre>
 l,r 
  |    
  v   
  a b c a b c b b
</pre>

End keep going until we find the second `a` <br>

<pre>
  l     r
  |     |
  v     v   
  a b c a b c b b
</pre>

Then we shift `left` pointer unill `a` will be not present iside current `window` <br>

<pre>
    l   r
    |   |
    v   v   
  a b c a b c b b
</pre>


### Code

```js
// O(n) - time
// O(n) - memory

let maxLength = 0;
let left = 0;
let chars = new Set();

// Edge cases
if (s.length === 0) return 0;
if (s.length === 1) return 1;

for (let right = 0; right < s.length; right++) {
  // Shift left pointer while current char is present inside `window`
  while (chars.has(s[right])) {
    chars.delete(s[left]);

    left++;
  }

  // Store new unique char
  char.add(s[right]);

  // `right - left + 1`, is representation of current `window` length
  // We add + 1, since we count from `0`
  maxLength = Math.max(maxLength, rihgt - left + 1);
}

return maxLength;
```

------------------------------------------------------------------------------------------------------

# 6. Binary Search
Binary search is the algorithm to search inside a sorter array, with time complexity `O(log n)`. <br>
We achive this time complexity by comparing `middle` item of array to `target` value, and shift `right` and `left` pointers according to `middle` one.

## Example
Given a `target` returns `true` if it's present in the `nums` and `false` if not. <br>

`target = 9` <br>
`nums = [-1,0,3,5,9,12]` <br>

Implementation is the same as two pointer algorithm, we init `left` - start of array and `right` - end of array, and the main idea to get middle item of array. <br>
This formula helps with calculation of `middle` item: <br>
`const middle = Math.floor((right+left)/2);`

We this in mind we can start by running while loop, unill `left` pointer is smaller then `right`. <br>

Here's the fist iteration: <br>
<pre>
   l      m         r
   |      |         |
   v      v         v   
  [-1, 0, 3, 5, 9, 12]
</pre> <br>

The `middle` points to value `3`. <br>
Then we have three cases:
1. (Base case) `nums[middle] = target` - we found a match!;
2. `nums[middle] > target` - shift `right` pointer to make `middle` value smaller
   - `right = middle - 1`
3. `nums[middle] < target` - shift `left` pointer to make `middle` value bigger
   - `right = left + 1`

* Please note taht we are not simplly shift our pointer on one position up or down, but we also includes `middle` position. <br>

Next one, here's why we include `middle` pointer value to `left` and `right` pointers calculation.<br>
Since we are searching inside sorted array, from the first step we knew that all values that goes before `middle` pointer are smaller than `target`. <br>
So there are no need to include them, and then's why `left = middle + 1`.<br>
<pre>
          l     m   r
          |     |   |
          v     v   v   
  [-1, 0, 3, 5, 9, 12]
</pre> <br>

We reach our `base case` - `nums[middle] = target` so that means that `target` item exist in `nums`.

## Code

```js
// O(log n) - time
// O(1) - memory

let left = 0;
let right = 0;

while (left < right) {
  const middle = Math.floor((left+right)/2);

  // Base case
  if (nums[middle] === target) {
    return middle;

  } else if (nums[middle] > target) {
    // Reduce `middle` value
    right = middle - 1;
  } else {
    // Incerease `middle` value
    left = middle + 1;
  }
}

// `Target` is not present in `nums` array
return -1;
```

------------------------------------------------------------------------------------------------------

# 7. Linked list

Linked list is the data structure, where each item have it's own value and pointer, which is pointing to the next one. <br>

Implementation:
```js
  function ListNode(val, next) {
    // Value of the current node
    this.val = (val===undefined ? 0 : val);
    // Pointer, that points to the next node
    this.next = (next===undefined ? null : next);
  };

  // Start of the linked list
  let head = new ListNode(1, null);
  // Dyncamic pointer, which needed to update values
  // Set it to `head`, since `head` contains only one node 
  let pointer = head;

  let secondNode = new ListNode(2, null);
  // Add second node, to head
  pointer.next = secondNode;
  // Update `pointer` value, to keep appending new nodes
  // If we will not update it, second value will be overrided by the third entry
  pointer = pointer.next;

  let thirdNode = new ListNode(3, null);
  pointer.next = thirdNode;

  // Will return smth like this:
  // FirstNode -> SecondNode -> ThirdNode
  console.log(head);
  // ListNode {
  //   val: 1,
  //   next: ListNode { val: 2, next: ListNode { val: 3, next: null } }
  // }
```

## Example
Given the `head` of a singly linked list, reverse the list, and return the `reversed list`.

Input = `head` = `(1)->(2)->(3)->(4)->(5)`
Output = `newHead` = `(5)->(4)->(3)->(2)->(1)`

Implementation is pretty simple, if you understand what I writte above about diffenition of LinkedList. <br>
We need to create `newHead`, that will contain reversed list. <br>
Next is needed to iterate threw add `head`, and append each node on the start of the list `newHead`, that operation will reverse list nodes. <br>

Code will word like this: <br>
We store `head.next` value inside `next` temporary variable. <br>
Next we update `head.next` with reversed head `newHead`, to append rersed values to the `head`. <br>
Then assign `head` to `newHead` and store all the reversed values so far. <br>

First iteration: <br>
`newHead` = `(1)` <br>
`head` = `(2)->(3)->(4)->(5)` <br>

Second Iteration: <br>
`newHead` = `(1)->(2)` <br>
`head` = `(3)->(4)->(5)` <br>

And we will keep iteration, untill `head` contains some values. <br>

## Code

```js
  // New reversed head
  let newHead = null;
  // Temp variable to store current next
  let next = null;

  while(head) {
    // Store next
    next = head.next;

    // Reverse
    // Current item will point to reversed linked list
    head.next = newHead;

    // Update reversed head
    newHead = head;
    // Set current item to next, to keep the iteration
    head = next;
  }

  return newHead;
```

------------------------------------------------------------------------------------------------------

# 8. Recursion
Before covering more advanced topics let's review recursion. <br>

Resursion - the programming pattern, where function call itself multiple times. <br>
With each call we put our current function inside `call stack` and continue calling next functions. <br>
When you writting recursive function you must define the `base case`, some condition where function will stop execution, to prevent `infinity loop`. <br>
After we reach point where last function reach it's `base case`, we look at the `call stack` and `pop` each function from the end.
When the `call stack` is empty end each function reach it's `base case` we exit the function.

Let's see the implementation of recursion on some example. <br>

## Example
Given `n` pairs of parentheses, write a function to generate all combinations of valid parentheses. <br>
Input `n` = 2 <br>
Output = `['(())', '()()']` <br>

Only cath here is `n`, you need to understand that `n` is maximum count of each parenthesis we can use in one combination. <br>

Code is bellow, let me cover here the order of operation and the `call stack`. <br>
I changed a bit function naming for better understanding, because function `genetare`, contains two call to `generate` with different conditions.
So i name them `generate1` for openning `parenthesis` and `generate2` for closing.

1. Step: <br>
Call `generate` function with initial params. <br>
Then append '(' to the `current` string, incarease `open` counter by one, and recursively call `generate` with new parameters<br>

Here's the `call stack` so far: <br>
<pre>
  + -------------------------------- +
  |            call stack            |
  + -------------------------------- +
  |        generate1('(', 1, 0)      |
  + -------------------------------- +
</pre> <br>

2. Step: <br>
Repeat same thing we did in the first step. <br>

`Call stack` situation:
<pre>
  + -------------------------------- +
  |            call stack            |
  + -------------------------------- +
  |        generate1('(', 1, 0)      |
  + -------------------------------- +
  |       generate1('((', 2, 0)      |
  + -------------------------------- +
</pre> <br>

3. Step: <br>
We reach the oppening parenthesis limit, so we started to adding ')' one the end, and increasing `close` counter. <br>

`Call stack` situation:
<pre>
  + -------------------------------- +
  |            call stack            |
  + -------------------------------- +
  |        generate1('(', 1, 0)      |
  + -------------------------------- +
  |       generate1('((', 2, 0)      |
  + -------------------------------- +
  |      generate2('(()', 2, 1)      |
  + -------------------------------- +
</pre> <br>

4. Step: <br>
Do the the same thing. <br>

`Call stack` situation:
<pre>
  + -------------------------------- +
  |            call stack            |
  + -------------------------------- +
  |        generate1('(', 1, 0)      |
  + -------------------------------- +
  |       generate1('((', 2, 0)      |
  + -------------------------------- +
  |      generate2('(()', 2, 1)      |
  + -------------------------------- +
  |     generate2('(())', 2, 2)      |
  + -------------------------------- +
</pre> <br>

5. Step: <br>
Finally we reached `base case` so we can store `current = '(())'` in `result`, and exit from this function.<br>
After calling `return`, we removing `generate2('(())', 2, 2)` from `call stack`.<br>
Then we bo back to function `generate2('(()', 2, 1)`.<br>
Since we don't have any logic, after calling `generate2`, this function is also me marked as `executed` and it will be removed from `call stack`. <br>

Now call stack is looking like this: <br>
<pre>
  + -------------------------------- +
  |            call stack            |
  + -------------------------------- +
  |        generate1('(', 1, 0)      |
  + -------------------------------- +
  |       generate1('((', 2, 0)      |
  + -------------------------------- +
</pre> <br>

But we are not done with it, all of the `generate2` function of `generate1('((', 2, 0)` is executed <br>
So there is no other ways, to keep calculation in this function, so we also remove it. <br>

Our final look of the `call stack` is:
<pre>
  + -------------------------------- +
  |            call stack            |
  + -------------------------------- +
  |        generate1('(', 1, 0)      |
  + -------------------------------- +
</pre> <br>

By executing `generate1('((', 2, 0)` we can move to `generate2` function, and keep calculation. <br>

6. Step:
Executing `generate2`. <br>

`Call stack` situation:
<pre>
  + -------------------------------- +
  |            call stack            |
  + -------------------------------- +
  |        generate1('(', 1, 0)      |
  + -------------------------------- +
  |       generate2('()', 1, 1)      |
  + -------------------------------- +
</pre> <br>

6. Step:
Executing `generate1`. <br>

`Call stack` situation:
<pre>
  + -------------------------------- +
  |            call stack            |
  + -------------------------------- +
  |        generate1('(', 1, 0)      |
  + -------------------------------- +
  |       generate2('()', 1, 1)      |
  + -------------------------------- +
  |       generate1('()(', 2, 1)     |
  + -------------------------------- +
</pre> <br>

7. Step:
Executing `generate2`, since `open` is equal to boundary. <br>

`Call stack` situation:
<pre>
  + -------------------------------- +
  |            call stack            |
  + -------------------------------- +
  |        generate1('(', 1, 0)      |
  + -------------------------------- +
  |       generate2('()', 1, 1)      |
  + -------------------------------- +
  |       generate1('()(', 2, 1)     |
  + -------------------------------- +
  |       generate1('()()', 2, 2)    |
  + -------------------------------- +
</pre> <br>

8. Step:
Second `base case` is reached, so we can store `()()` inside `result`.
Since, all of the function was executed for `generate1('(', 1, 0)`.
This means that we can clear all of the remaining items from `call stack` and exit `generate` function.

## Code
```js
 // Output array
  const res = [];
  
  // Recursive function, that holds three arguments
  // Current - current parenthesis sequence that we are creating:
  // Open - count of opened parenthesis
  // Close - count of closed parenthesis
  const generate = (current, open, close) => {
    // Base case, where we reach limit of open and closed parenthesis
    if (open === n && close === n) {
      // Store current string inside responce 
      res.push(current);
      // Exit from function, to prevent infinity loop
      return;
    }
    // First, fill current string with open parenthesis
    // Since we need to calculate `valid` combinations
    // Check if open count is in bound
    if (open < n) {
      // If yes, append '(' on top of the current string
      // And increate `open` counter, since we add open parenthesis
      generate(current+'(', open+1, close);
    }
    if (close < open) {
      // Same here, but we adding ')' and increasing `close` counter
      generate(current+')', open, close+1);
    }
  }
  
  // Call function with initial values
  generate('', 0, 0);
```

------------------------------------------------------------------------------------------------------

# 9. Tree
Implementation is pretty similar to Linked list. <br>
Exept `tree` contains two pointer values `left` and `right`, thouse will point on the each `leaf` of current node.

## Implementation:
```js
  function TreeNode(val, left, right) {
    // Value of current node
    this.val = (val===undefined ? 0 : val)
    // Pointer to the left `leaf`
    this.left = (left===undefined ? null : left)
    // Pointer to the right `leaf`
    this.right = (right===undefined ? null : right)
  }

  // Init start `root` of the tree
  let root = new TreeNode(1, null, null);
  // Init left `leaf`
  let leftLeaf = new TreeNode(2, TreeNode(4, null, null), TreeNode(5, null, null);
  // Init right `leaf`
  let rightLeaf = new TreeNode(3, TreeNode(6, null, null), TreeNode(7, null, null));

  // Set pointers for `root` value
  root.left = leftLeaf;
  root.right = rightLeaf;

  console.log(root);
/*
  TreeNode {
    val: 1,
    left: TreeNode {
      val: 2,
      left: TreeNode { val: 4, left: null, right: null },
      right: TreeNode { val: 5, left: null, right: null }
    },
    right: TreeNode {
      val: 3,
      left: TreeNode { val: 6, left: null, right: null },
      right: TreeNode { val: 7, left: null, right: null }
    }
  }
*/

```
<br>

From code above, we can imagine that previoslly innited tree will look like this:

![image](https://github.com/romaschka1/Data-Structures-Algorithms/assets/46795634/29a74228-2c56-40c5-ae7a-a1171f706ab3)

Node, that `()` is represending the `null` pointer.


## DFS (Depth first search)
DFS - recursive algorithm, to get `tree nodes` from bottom to top. <br>

Thre is three types of `DFS`, and what output each type returns:
* Inorder (left.val, node.val, right.val) ->  4, 2, 5, 1, 6, 3, 7 
* Preorder (node.val, left.val, right.val) ->  1, 2, 4, 5, 3, 6, 7
* Postorder (left.val, right.val, node.val) ->  4, 5, 2, 6, 7, 3, 1

### Every DFS implementation:
```js
  let inorderDFS = (node) => {
    // Base case
    if (!node) {
      return;
    }

    search(node.left);
    // Return `left` -> `root` -> `right`, values
    console.log(node.val);
    search(node.right);
  };
////////////////////////////////////////////////
  let preorderDFS = (node) => {
    // Base case
    if (!node) {
      return;
    }
    // Return `root` -> `left` -> `right`, values
    console.log(node.val);
    search(node.left);
    search(node.right);
  };
////////////////////////////////////////////////
  let postorderDFS = (node) => {
    // Base case
    if (!node) {
      return;
    }

    search(node.left);
    search(node.right);

    // Return `left` -> `right` -> `root`, values
    console.log(node.val);
  };
```


## BFS (Breath first search)
As you can saw on the image, I split `tree` to levels. <br>
If we need group all the `node` values on each levels, we use `BFS` algorithm.

### BFS implementation
```js
let res = [];
  // Queue repsents each `tree` level
  let queue = [root];

  while (queue.length !== 0) {
    // Hold queue level length we need to iterate,
    // Since we will add other entries
    let queueLength = queue.length;
    let currentLevel = [];

    // Iteratation of whole queue level
    for (let i = 0; i < queueLength; i++) {
      // Get first value
      let node = queue.shift();

      if (node) {
        // Fill queue with items for the next level
        queue.push(node.left);
        queue.push(node.right);
        // Append current node to current level array
        currentLevel.push(node.val);
      }
    }
 
    if (currentLevel.length) {
      // Store whole level
      res.push(currentLevel);
    }
  }

  console.log(res);
  // [ [ 1 ], [ 2, 3 ], [ 4, 5, 6, 7 ] ]
```
