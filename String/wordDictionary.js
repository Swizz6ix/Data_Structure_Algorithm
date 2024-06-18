class wordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let current = this.root;

    for (let char of word) {
      if (!current.child[char]) current.child[char] = new TrieNode()
      current = current.child[char]; // Move on to the next node.
    }
    current.end_of_word = true;
  }

  searchWord(word) {
    // dfs
    function helper(current, i) {
      // If we reach the i that's the length of word 
      // and current node is a word ending, word exists.
      if (i === word.length) return current.end_of_word

      const char = word[i];

      // If char is a dot, that means we can match it with any letter
      // console.log(Object.keys(current.child))
      if (char === '.') {
        for (const char of Object.keys(current.child)) {
          const child = current.child[char]
          if (helper(child, i + 1)) return true;
        }
        return false;
      } else {
        // Looking for a letter that should come after another and can't find it
        // that means the word doesn't exist in our dictionary return false
        if (!(char in current.child)) return false;

        // Go to the next node in our dictionary and the next letter  in the word
        return helper(current.child[char], i + 1)
      }
    }
    return helper(this.root, 0)
  }
}

const wordDic = new wordDictionary()
wordDic.addWord('add')
wordDic.searchWord('.dd')
