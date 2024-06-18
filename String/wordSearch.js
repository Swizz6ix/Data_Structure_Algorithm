const wordSearch = (board, word) => {
  const m = board.length;
  const n = board[0].length;

  function backtrack(i, j, k) {
    if (k === word.length) return true;

    if (i < 0 || i >= m || j >= n || board[i][j] !== word.charAt(k)) return false;

    const temp = board[i][j];
    board[i][j] = '\0'; // marked as visited

    const result = backtrack(i + 1, j, k + 1) || backtrack(i - 1, j, k + 1) ||
    backtrack(i, j + 1, k + 1) || backtrack(i, j - 1, k + 1);

    board[i][j] = temp; // Reset board
    return result;
  };

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (backtrack(i , j, 0)) return true;
    }
  }
  return false;
}


// Method2
const wordSearchII = (board, word) => {
  if (board.length === 0) return false;

  const h = board.length;
  const w = board[0].length;
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ];

  function go(x, y, k) {
    if (board[x][y] !== word[k]) return false;
    if (k == word.length - 1) return true;

    board[x][y] = '*' // Mark as visited
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      if (i >= 0 && i < h && j >= 0 & j < w) {
        if (go(i, j, k + 1)) return true;
      }
    }
    board[x][y] = word[k]; // reset
    return false;
  }
  
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (go(i, j, 0)) return true;
    }
  }
  return false;
};

let board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
]

console.log('wordSearch', wordSearch(board, 'ABCCED'));
console.log('wordSearch', wordSearchII(board, 'ABCCED'));
