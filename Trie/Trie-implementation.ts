class TrieNode {
  children: TrieNode;
  wordEnd: boolean;

  constructor() {
    this.children = {} as TrieNode;
    this.wordEnd = false;
  }
}
class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let pointer = this.root;

    for (let i = 0; i < word.length; i++) {
      if (pointer.children[word[i]] === undefined) {
        pointer.children[word[i]] = new TrieNode();
      }

      pointer = pointer.children[word[i]];
    }

    pointer.wordEnd = true;
  }

  search(word: string): boolean {
    let pointer = this.root;

    for (let i = 0; i < word.length; i++) {
      if (pointer.children[word[i]] === undefined) {
        return false;
      }

      pointer = pointer.children[word[i]];
    }

    return pointer.wordEnd;
  }

  startsWith(prefix: string): boolean {
    let pointer = this.root;

    for (let i = 0; i < prefix.length; i++) {
      if (pointer.children[prefix[i]] === undefined) {
        return false;
      }

      pointer = pointer.children[prefix[i]];
    }

    return true;
  }
}
