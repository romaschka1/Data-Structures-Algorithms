/*
  ~ Tree data structure ~

  Insertion: O(n)
  Deletion: O(n)
  Lookup: O(n)

  Pros: items hierarchy
  Cons: search and insertion time
*/

class TreeNode {
  value = null;
  left = null;
  right = null;

  constructor(newValue, left, right) {
    this.value = newValue;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(1, null, null);
let leftLeaf = new TreeNode(2, TreeNode(4, null, null), TreeNode(5, null, null));
let rightLeaf = new TreeNode(3, TreeNode(6, null, null), TreeNode(7, null, null));

/*
  Created tree representation:

            (1)
           /   \
          /     \
         /       \
      (2)        (3)
      / \        / \
     /   \      /   \
   (4)   (5)  (6)   (7)
   / \   / \  / \   / \
  () () () ()() () () ()
*/