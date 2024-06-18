// Word SearchII
const findWord = (board, words) => {
  const res = [];
  const root = buildTrie(words);

  function dfs(board, i, j, root, res) {
    const char = board[i][j];
    if (char === '#' || root.next[char.charCodeAt(0) - 'a'.charCodeAt(0)] == null) return;
    root = root.next[char.charCodeAt(0) - 'a'.charCodeAt(0)];
    if (root.word != null) { // found one
      res.push(root.word);
      root.word = null; //de - duplicate
    }

    board[i][j] = '#';
    if (i > 0) dfs(board, i - 1, j, root, res);
    if (j > 0) dfs(board, i, j - 1, root, res);
    if (i < board.length - 1) dfs(board, i + 1, j, root, res);
    if (j < board[0].length - 1) dfs(board, i, j + 1, root, res);
    board[i][j] = char;
  }

  function buildTrie(words) {
    const root = new TrieNod();
    for (let word of words) {
      let node = root;
      for (let char of word) {
        let i = char.charCodeAt(0) - 'a'.charCodeAt(0);
        if (node.next[i] === null) node.next[i] = new TrieNod();
        node = node.next[i];
      }
      node.word = word;
    }
    // console.log(root)
    return root;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(board, i, j, root, res)
    }
  }
  return res;
}

class TrieNod {
  constructor() {
    this.next = new Array(26).fill(null);
    this.word = null;
  }
}
