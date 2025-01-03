/*
  ~ Trie data structure ~

  Insertion: O(n)
  Deletion: O(n)
  Lookup: O(n)

  Pros: efficient prefix search
  Cons: high memory usage, not inefficient for small data sets
*/

class Trie {
  root = {}

  insert(word) {
    let pointer = this.root;

    for (let i = 0; i < word.length; i++) {
      if (pointer[word[i]] === undefined) {
        pointer[word[i]] = {};
      }

      pointer = pointer[word[i]];
    }
  }

  search(word) {
    let pointer = this.root;

    for (let i = 0; i < word.length; i++) {
      if (pointer[word[i]] === undefined) {
        return false;
      }

      pointer = pointer[word[i]];
    }

    return pointer.wordEnd;
  }

  startsWith(prefix) {
    let pointer = this.root;

    for (let i = 0; i < prefix.length; i++) {
      if (pointer[prefix[i]] === undefined) {
        return false;
      }

      pointer = pointer[prefix[i]];
    }

    return true;
  }
}