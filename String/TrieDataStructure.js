// Implement Trie - Used to implement autocomplete, text prediction, spellchecker etc.
class TrieNode {
  constructor(child = {}, end_of_word = false) {
    this.child = child;
    this.end_of_word = end_of_word;
  }
}

const Trie = function() {
  this.root = new TrieNode();
}

Trie.prototype.insert = function(word) {
  let current = this.root;

  for (const char of word) {
    if (!current.child[char]) current.child[char] = new TrieNode();
    current = current.child[char];
  }
  current.end_of_word = true;
}

Trie.prototype.search = function(word) {
  let current = this.root;

  for (const char of word) {
    if (!current.child[char]) return false
    else current = current.child[char];
  }
  return current.end_of_word;
}

Trie.prototype.startsWith = function(prefix) {
  let current = this.root;

  for (const char of prefix) {
    if (!current.child[char]) return false;
    current = current.child[char]
  }
  return true;
}

const trie = new Trie();
trie.insert('apple');
trie.search('apple');
trie.startsWith('ap')
