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
* If inside the loop we need to dynamically add/remove/check items at the end.

## Problems <br>
[Valid parentheses](https://leetcode.com/problems/valid-parentheses/)

<br>

------------------------------------------------------------------------------------------------------

# 4. Two pointers<br>

An algorithm that uses a two-pointer and intelligently updates each pointer depending on some condition. Used inside the loop to reduce the number of iterations.

## Use cases
* Get two/three sum from `sorted` array
* Check if a string is palindrome

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
Implementation is pretty similar to two pointer algorithm. The difference is, that we constantly check the whole `window` value, when we shift some of the pointers.

## Use cases
* Calculate the longest unique substring, with or without replacement
* Check if one string exists inside another
* Minimum size of subarray sum

## Example

Given string `s`, find the length of the longest unique substring.

`s` = `"abcabcbb"` <br>

So the returned value should be `3`, since `abc` is our result. <br>

First, we need to create some `store` to check which characters are included inside the current `window`. <br>
For this purpose let's create HashSet `chars`, inside it we will store each char. <br>
Then initialise two pointers `left` and `right`, which will represent `start` and the `end` of the current `window` <br>

Then we need to run a loop, and with each iteration, we will expand our `window` by incrementing `right` by one. <br>
While we are expanding, we need also to check if the current char is not present in our `chars`, and update HashSet with a new char. <br>
Otherwise, that's means that `widow` substring is not unique, we will delete char from `chars`, while the current string is present in the store. <br>
With each deletion, we shift `left` pointer to shrink `window` size. <br>

For example, we start iterating `right` from index `0`: <br>

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

Then we shift `left` pointer until `a` will be not present inside current `window` <br>

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

  // `right - left + 1`, is a representation of the current `window` length
  // We add + 1, since we count from `0`
  maxLength = Math.max(maxLength, rihgt - left + 1);
}

return maxLength;
```

------------------------------------------------------------------------------------------------------

# 6. Binary Search
Binary search is the algorithm to search inside a sorter array, with time complexity `O(log n)`. <br>
We achieve this time complexity by comparing `middle` item of the array to `target` value and shifting `right` and `left` pointers according to `middle` one.

## Example
Given a `target` returns `true` if it's present in the `nums` and `false` if not. <br>

`target = 9` <br>
`nums = [-1,0,3,5,9,12]` <br>

Implementation is similar to two pointer algorithm, we init `left` - start of the array and `right` - end of the array, and the main idea is to get a middle item of the array. <br>
This formula helps with the calculation of `middle` item: <br>
`const middle = Math.floor((right+left)/2);`

We this in mind we can start by running a while loop until the `left` pointer is smaller then `right`. <br>

Here's the first iteration: <br>
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
   - `left = middle + 1`

* Please note that we do not simply shift our pointer on one position up or down, but we also include `middle` position. <br>

Next one, here's why we include `middle` pointer value to `left` and `right` pointers calculation.<br>
Since we are searching inside a sorted array, from the first step we knew that all values that go before `middle` pointer are smaller than `target`. <br>
So there is no need to include them, and that's why `left = middle + 1`.<br>
<pre>
          l     m   r
          |     |   |
          v     v   v   
  [-1, 0, 3, 5, 9, 12]
</pre> <br>

We reach our `base case` - `nums[middle] = target` so that means that `target` item exists in `nums`.

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

Linked list is a data structure, where each item has it's own value and pointer, which points to the next one. <br>

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
  // Dynamic pointer, which needed to update values
  // Set it to `head`, since `head` contains only one node 
  let pointer = head;

  let secondNode = new ListNode(2, null);
  // Add the second node, to head
  pointer.next = secondNode;
  // Update `pointer` value, to keep appending new nodes
  // If we will not update it, the second value will be overridden by the third entry
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

Implementation is pretty simple if you understand what I wrote above about the definition of LinkedList. <br>
We need to create `newHead`, which will contain a reversed list. <br>
Next is needed to iterate threw add `head`, and append each node on the start of the list `newHead`, that operation will reverse list nodes. <br>

The code will word like this: <br>
We store `head.next` value inside `next` temporary variable. <br>
Next, we update `head.next` with reversed head `newHead`, to append rersed values to the `head`. <br>
Then assign `head` to `newHead` and store all the reversed values so far. <br>

First iteration: <br>
`newHead` = `(1)` <br>
`head` = `(2)->(3)->(4)->(5)` <br>

Second Iteration: <br>
`newHead` = `(1)->(2)` <br>
`head` = `(3)->(4)->(5)` <br>

And we will keep iteration, until `head` contains some values. <br>

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

Recursion - the programming pattern, where a function calls itself multiple times. <br>
With each call, we put our current function inside `call stack` and continue calling the next functions. <br>
When you write a recursive function you must define the `base case`, some condition where a function will stop execution, to prevent `infinity loop`. <br>
After we reach a point where the last function reaches its `base case`, we look at the `call stack` and `pop` each function from the end.
When the `call stack` is empty end each function reaches its `base case` we exit the function.

Let's see the implementation of recursion on some example. <br>

## Example
Given `n` pairs of parentheses, write a function to generate all combinations of valid parentheses. <br>
Input `n` = 2 <br>
Output = `['(())', '()()']` <br>

The only catch here is `n`, you need to understand that `n` is the maximum count of each parenthesis we can use in one combination. <br>

The code is bellow, let me cover here the order of operation and the `call stack`. <br>
I changed a bit function naming for better understanding, because function `genetare`, contains two calls to `generate` with different conditions.
So i name them `generate1` for openning `parenthesis` and `generate2` for closing.

1. Step: <br>
Call `generate` function with initial params. <br>
Then append '(' to the `current` string, increase `open` counter by one, and recursively call `generate` with new parameters<br>

Here's the `call stack` so far: <br>
<pre>
  + -------------------------------- +
  |            call stack            |
  + -------------------------------- +
  |        generate1('(', 1, 0)      |
  + -------------------------------- +
</pre> <br>

2. Step: <br>
Repeat the same thing we did in the first step. <br>

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
We reached the opening parenthesis limit, so we started adding ')' on the end, and increasing `close` counter. <br>

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
Finally, we reached `base case` so we can store `current = '(())'` in `result`, and exit from this function.<br>
After calling `return`, we remove `generate2('(())', 2, 2)` from `call stack`.<br>
Then we bo back to function `generate2('(()', 2, 1)`.<br>
Since we don't have any logic, after calling `generate2`, this function is also marked as `executed` and it will be removed from `call stack`. <br>

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
So there is no other way, to keep calculation in this function, so we also remove it. <br>

Here's the final look of the `call stack`:
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
Executing `generate2`, since `open` is equal to the boundary. <br>

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
    // Base case, where we reach a limit of open and closed parenthesis
    if (open === n && close === n) {
      // Store current string inside response 
      res.push(current);
      // Exit from function, to prevent infinity loop
      return;
    }
    // First, fill current string with open parenthesis
    // Since we need to calculate `valid` combinations
    // Check if open count is inbound
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
Implementation is pretty similar to the Linked list. <br>
Except `tree` contains two pointer values `left` and `right`, those will point to each `leaf` of the current node.

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

From the code above, we can imagine that previously initialized tree will look like this:

![image](https://github.com/romaschka1/Data-Structures-Algorithms/assets/46795634/29a74228-2c56-40c5-ae7a-a1171f706ab3)

Node, that `()` is representing the `null` pointer.


## DFS (Depth first search)
DFS - recursive algorithm, to get `tree nodes` from bottom to top. <br>

There is three types of `DFS`, and what output each type returns:
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
As you can see on the image, I split `tree` to levels. <br>
If we need to group all the `node` values on each level, we use `BFS` algorithm.

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

# 9. Heap
Heap is the data structure, where values are stored in acceding order - `MinHeap` or descending `MaxHeap`.
Heap has the same functions as the stack `push`, and `pop` with the same execution time of `O(log(n))` since we store values in a binary search tree. <br>

Let's implement it! <br>

First, define the `minHeap` class. <br>

```js
class MinHeap {
  constructor () {
    // Data is the array, which represents the `binary search tree`
    // Where a left child is always smaller than the right one
    this.data = [];
  }
}
```

Then, define helper functions: <br>

Retrieves item index: <br>

```js
getParentIndex(index) {
  return Math.floor((index - 1) / 2);
}
getLeftChildIndex(index) {
  return 2 * index + 1;
}
getRightChildIndex(index) {
  return 2 * index + 2;
}
```

Check if an item is present: <br>

```js
hasParent(index) {
  return this.getParentIndex(index) >= 0;
}
hasLeftChild(index) {
  return this.getLeftChildIndex(index) < this.data.length;
}
hasRightChild(index) {
  return this.getRightChildIndex(index) < this.data.length;
}
```

Retrieves item: <br>

```js
getParent(index) {
  return this.data[this.getParentIndex(index)];
}
getLeftChild(index) {
  return this.data[this.getLeftChildIndex(index)];
}
getRightChild(index) {
  return this.data[this.getRightChildIndex(index)];
}
```

Swap nodes: <br>

```js
swap(firstIndex, secondIndex) {
  let temp = this.data[firstIndex];
  this.data[firstIndex] = this.data[secondIndex];
  this.data[secondIndex] = temp;
}
```

After we define all of the helper functions, then we need to implement:
* `HeapifyUp` - Method to validate the order of heap elements from top to bottom
* `HeapifyDown` - Method to validate the order of heap elements from bottom to top

```js
// Method to validate the order of heap elements from top to bottom
heapifyDown(index) {
  // Get current parent index
  let smallest = index;

  // Two if statement to get the smallest right or left child
  if (this.hasLeftChild(index) && this.data[smallest] > this.getLeftChild(index)) {
    smallest = this.getLeftChildIndex(index);
  }
  if (this.hasRightChild(index) && this.data[smallest] > this.getRightChild(index)) {
    smallest = this.getRightChildIndex(index);
  }

  if (smallest != index) {
    this.swap(index, smallest);
    this.heapifyDown(smallest);
  }
}
```

```js
// Method to validate the order of heap elements from bottom to top
heapifyUp(index) {
  // If `parent` is smaller than `current node`
  if(this.hasParent(index) && this.getParent(index) > this.data[index]) {
    // Swap `parent` and `current node`
    this.swap(this.getParentIndex(index), index);
    // Recursively call `heapifyUp` to validate the next parent+child pair
    // Pass new `current node` index
    this.heapifyUp(this.getParentIndex(index));
  }
}
```

And finally, define methods to store and remove items: <br>

```js
push(item) {
  this.data.push(item);
  // Sort heap from bottom(where new item was inserted) to top
  // Pass inserted node index, to get starting position
  this.heapifyUp(this.data.length - 1);
}

pop() {
  if (this.data.length === 0) {
    return;
  }
  // Get the smallest value to return
  let node = this.data[0];
  // Replace `root` element, with the last node
  this.data[0] = this.data.pop();
  

  // Validate all heaps from top to bottom
  this.heapifyDown(0);
  return node;
}
```



