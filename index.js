
const express = require('express');
const app = express();

const PORT = 2567
app.listen(PORT, () => {
  console.log('Server is up on', PORT)
});


// 2269945528 blessed onyebuenyi

//STRING

const zigzag = (str, numRows) => {
  // Make an array with the zigzag sequence
  const zigzag = [...new Array(numRows).keys()];
  // console.log('for', zigzag.push(...zigzag.slice(1, -1).reverse()))
  zigzag.push(...zigzag.slice(1, -1).reverse());

  // Make an array with as many strings as we need rows
  const rows = new Array(numRows).fill('');
  // Append the characters ro the row strings in zigzag sequence
  [...str].forEach((letter, index) => (
    rows[zigzag[index % zigzag.length]] += letter
    ));

  return rows.join('');
}

console.log('zigzag', zigzag('PAYPALISHIRING', 4));



const generateParenthesis = (num) => {
  const res = [];

  const go = (left, right, str) => {
  if (str.length == 2 * num) {
    res.push(str);
    return;
  }
  if (left < num) go(left + 1, right, str + '(');
  if (right < left) go(left, right + 1, str + ')');
  };

  go(0, 0, '');
  return res
}

console.log('gen', generateParenthesis(2));



const JustifyText = (words, maxWidth) => {
  let result = [];
  let line = [];
  let lineLength = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (lineLength === 0 && word.length <= maxWidth) {
      line.push(word);
      lineLength += word.length;
    } else if (lineLength + word.length + 1 <= maxWidth) {
      line.push(word);
      lineLength += (word.length + 1);
    } else {
      line = addMinSpace(line);
      let remainingSpace = maxWidth - lineLength;
      line = distributeSpace(line, remainingSpace);
      
      let temp = line.join('');
      if (line.length === 1) temp = addRemainingSpace(temp, remainingSpace);
      result.push(temp);
      
      line = [];
      lineLength = 0;
      line.push(word);
      
      lineLength += word.length;
    }
  }
  line = addMinSpace(line);
  let temp = line.join('');
  let remainingSpace = maxWidth - lineLength;
  temp = addRemainingSpace(temp, remainingSpace)
  result.push(temp);
  return result;
}

// Add space to the words in the array aside from the last word.
function addMinSpace(line) {
  for (let i = 0; i < line.length - 1; i++) line[i] += " ";
  return line
}

// Add the remaining space at the end of each line, so the lines can line up properly.
function addRemainingSpace(line, space) {
  while (space > 0) {
    line += " ";
    space--;
  }
  return line;
}

// distribute the remaining spaces
function distributeSpace(arr, spaces) {
  while (spaces > 0 && arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (spaces <= 0) break;
      arr[i] += " ";
      spaces--;
    }
    return arr;
  }
}

console.log('Justify', JustifyText(["This", "is", "an", "example", "of", "text", "justification."], 16))


const simplifyPath = (path) => {
  const stack = [];
  const directories = path.split("/");

  for (const dir of directories) {
    if (dir == '.' || !dir) continue
    else if (dir === '..') {
      if (stack.length > 0) stack.pop()
    }
    else stack.push(dir);
  }
  return '/' + stack.join('/');
}

console.log('path', simplifyPath('/.../a/../b/c/../d/./'));


// Minimum edit distance
// If they are the same just get the diagonal value
// If they are different get the minimum of three (3) and add 1.
// The 3 means the up and down number on the left and the upper right.
const editDistance = (word1, word2) => {
  let dp = Array(word1.length + 1).fill().map(() => Array(word2.length + 1));

  for (let r = 0; r <= word1.length; r++) {
    for (let c = 0; c <= word2.length; c++) {
      if (r == 0) dp[0][c] = c;
      else if (c == 0) dp[r][0] = r;
      else if (word1[r - 1] == word2[c - 1]) dp[r][c] = dp[r - 1][c - 1];
      else dp[r][c] = Math.min(dp[r][c - 1], dp[r - 1][c - 1], dp[r - 1][c]) + 1;
    }
  }
  return dp[word1.length][word2.length];
};

// Method 2
const editDistanceII = (word1, word2) => {
  const memo = new Map();
  function run(w1, w2) {
    if (memo.has(`${w1}-${w2}`)) return memo.get(`${w1}-${w2}`);
    if (w1 >= word1.length && w2 >= word2.length) return 0;

    // If it's a match
    if(word1[w1] === word2[w2]) return run(w1 + 1, w2 + 1);
    let insert = Infinity;
    let del = Infinity;
    let replace = Infinity;

    // Insert
    if (w2 < word2.length) insert = run(w1, w2 + 1);

    // Delete
    if (w1 < word1.length) del = run(w1 + 1, w2);

    // Replace
    if (w1 < word1.length && w2 < word2.length) replace = run(w1 + 1, w2 + 1);

    const res = Math.min(insert, del, replace) + 1;
    memo.set(`${w1}-${w2}`, res);
    return res;
  }
  return run(0, 0);
};


console.log('editDistance', editDistance('horse', 'ros'));
console.log('edit', editDistanceII('horse', 'ros'));



const minimumWindowSubstring = (str, tr) => {
  if (!str || !tr) return "";

  // Initialize maps to store character frequencies
  const dicTr = new Map();
  const windowCounts = new Map();

  // Populate dicT with character frequencies from string 'tr'
  for (const char of tr) {
    dicTr.set(char, (dicTr.get(char) || 0) + 1);
  }

  let required = dicTr.size;
  let left = 0;
  let right = 0;
  let formed = 0;

  // Initialize variable to store the minimum window substring
  let ans = [-1, 0, 0];
  while (right < str.length) {
    const charRight = str.charAt(right);

    // Update windowCounts with the current character at the right pointer
    windowCounts.set(charRight, (windowCounts.get(charRight) || 0) + 1);

    // Check if the current character forms a required character in the window
    if (dicTr.has(charRight) && windowCounts.get(charRight) === dicTr.get(charRight)) formed++;

    // Move the left pointer to minimize the window size
    while (left <= right && formed === required) {
      const charLeft = str.charAt(left);

      // Update ans if the current window is smaller.
      if (ans[0] === -1 || right - left < ans[0]) {
        ans[0] = right - left + 1;
        ans[1] = left;
        ans[2] = right;
      }

      // Update windowCounts and formed by moving the left pointer
      windowCounts.set(charLeft, windowCounts.get(charLeft) - 1);
      if (dicTr.has(charLeft) && windowCounts.get(charLeft) < dicTr.get(charLeft)) formed--;
      left++;
    }

    // Move the right pointer to expand the window
    right++;
  }

  // Return the minimum window substring
  return ans[0] === -1 ? "" : str.substring(ans[1], ans[2] + 1);
}
console.log('minWindow', minimumWindowSubstring('ADOBECODEBANC', 'ABC'));


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



const scrambleString = (str1, str2) => {
  return helper(str1, str2, {})
};

const helper = (str1, str2, dp) => {
  if (dp[str1, str2] !== undefined || dp[str2, str1] !== undefined) return dp[str1 + str2];
  else if (str1 === str2) return true;
  else if (str1.length !== str2.length) return false;
  else if (str1.length <= 1) return str1 === str2;

  for (let i = 1; i < str1.length; i++) {
    if ((helper(str1.slice(0, i), str2.slice(0, i), dp) && helper(str1.slice(i), str2.slice(i), dp)) ||
    helper(str1.slice(0, i), str2.slice(str1.length - i), dp) &&
    helper(str1.slice(i), str2.slice(0, str1.length - i), dp)) {
      dp[str1 + str2] = true;
      return true;
    }
  }
  dp[str1 + str2] = false;
  return false;
};

console.log('scrambleString', scrambleString('great', 'rgeat'));


const decodeWays = (str) => {
  if (str === null || str.length === 0) return 0;
  if (str[0] === '0') return 0;

  const dp = new Array(str.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= str.length; i++) {
    const a = Number(str.slice(i - 1, i)); // Last one digit
    if (a >= 1 && a <= 9) dp[i] += dp[i - 1];
    const b = Number(str.slice(i - 2, i));
    if (b >= 10 && b <= 26) dp[i] += dp[i - 2]; // Last two digit
  }
  return dp[str.length];
}

console.log('decode', decodeWays('226'));



const restoreIPAddress = (str) => {
  const result = [];

  function permute(arr, str) {
    if (arr.length === 3) {
      if (isValid(str)) result.push([...arr, str]);
      return;
    }
    for (let i = 1; i < 4; i++) {
      let subStr = str.slice(0, i);
      if (!isValid(subStr)) continue;
      permute([...arr, subStr], str.slice(i));
    }
  }
  
  function isValid(str){
    if (+str > 255 || !str.length) return false;
    if (str.length >= 2 && str[0] === '0') return false;
    return true;
  }

  permute([], str);
  return result.map(x => x.join('.'));
};

console.log('restoreIP', restoreIPAddress('25525511135'))


// 1D dynamic Programming
const stringInterLeaving = (str1, str2, str3) => {
  let len1 = str1.length, len2 = str2.length, len3 = str3.length;
  if (len1 + len2 !== len3) return false;

  let dp = new Array(len2 + 1).fill(false);

  dp[0] = true;
  for (let j = 1; j <= len2; ++j) {
    dp[j] = dp[j - 1] && str2[j - 1] == str3[j - 1]
  }

  for (let i = 1; i <= len1; ++i) {
    dp[0] = dp[0] && str1[i - 1] == str3[i - 1];
    for (let j = 1; j <= len2; ++j) {
      dp[j] = (dp[j] && str1[i - 1] == str3[i + j - 1]) ||
      (dp[j - 1] && str2[j - 1] == str3[i + j - 1]);
    }
  }
  return dp[len2];
}


console.log('InterLeaving', stringInterLeaving('aabcc', 'dbbca', 'aadbbcbcac'));

