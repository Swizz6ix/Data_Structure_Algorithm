// MethodI
const findWords = (board, words) => {
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ];
  let res = [];

  const buildTrie = () => {
    const root = {};
    for (const word of words) {
      let node = root;
      for (const char of word) {
        if (node[char] == null) node[char] = {};
        node = node[char];
      }
      node.word = word;
    }
    return root;
  };

  const searchWord = (node, x, y) => {
    if (node.word != null) {
      res.push(node.word);
      node.word = null; // make sure only print one time for each word
    }

    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) return;
    if (node[board[x][y]] == null) return;

    const char = board[x][y];
    board[x][y] = '#'; // mark visited
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      searchWord(node[char], i, j);
    }
    board[x][y] = char // Reset
  };

  const root = buildTrie();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      searchWord(root, i, j);
    }
  }
  return res;
};

class Tried {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;

    for (const char of word) {
      if (!node[char]) node[char] = {}
      node = node[char];
      node.prefixCount = (node.prefixCount || 0) + 1;
    }
    node.word = word;
  }

  remove(word) {
    let node = this.root;
    
    for (const char of word) {
      node[char].prefixCount--;
      if (node[char].prefixCount == 0) {
        delete node[char];
        return;
      }
      node = node[char];
    }
    delete node.word
  }
}


// Method II
const findWordsI = (board, words) => {
  const rows = board.length;
  const cols = board[0].length;
  const foundWords = [];
  const trie = new Tried();

  // construct the trie
  for (const word of words) trie.insert(word);

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];

  function dfs(row, col, node) {
    let numFound1 = 0;

    if (node.word) {
      foundWords.push(node.word);
      trie.remove(node.word);
      numFound1++;
    }

    // coordinates (rows, cols) not within bounds
    if (row < 0 || row >= rows || col < 0 || col >= cols) return numFound1;

    const char = board[row][col];

    // if char continuation at (row, col) is not in trie
    if (!node[char]) return numFound1;

    // at this point, board[row][col] is a valid char continuation in trie
    board[row][col] = '#';

    // record max number of words we can find with current prefix
    const prefix_count = node[char].prefixCount;
    let numFound2 = 0;

    for (const [dr, dc] of dirs) {
      numFound2 += dfs(row + dr, col + dc, node[char]);
      
      // found all possible words with this prefix. Break early
      if (numFound2 == prefix_count) break;
    }

    board[row][col] = char;
    return numFound1 + numFound2;
  }

  // Iterate through board recursively square by square
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols;  col++) {
      dfs(row, col, trie.root);
    }
  }
  return foundWords;
}


// MethodIII
const findWordsII = (board, words) => {
  let res = [];
  const root = buildTrie(words);
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      dfs(root, row, col, board, res)
    }
  }
  return res;

  function dfs(node, row, col, board, res) {
    if (node.end) {
      res.push(node.end);
      node.end = null;
    }

    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) return;
    if (!node[board[row][col]]) return;

    const char = board[row][col];
    board[row][col] = '#';
    dfs(node[char], row + 1, col, board, res)
    dfs(node[char], row - 1, col, board, res);
    dfs(node[char], row, col + 1, board, res);
    dfs(node[char], row, col - 1, board, res)
    board[row][col] = char;
  }

  function buildTrie(words) {
    const root = {};
    for (let word of words) {
      let pointer = root;
      for (let char of word) {
        if (!pointer[char]) pointer[char] = {};
        pointer = pointer[char];
      }
      pointer.end = word
    }
    return root;
  }
};

let boardword = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v']
]

let words = ['oaths', 'pea', 'eat', 'rain']

console.log('wordSearch', findWord(boardword, words))
console.log('wordSearch', findWords(boardword, words))
console.log('wordSearch', findWordsI(boardword, words));
console.log('wordSearch', findWordsII(boardword, words));
