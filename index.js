
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
// Time O(m * n) Space O(min(m,n))
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


// 2D Dynamic Programming
// Time O(m * n) Space O(m * n)
const stringInterLeavingII = (str1, str2, str3) => {
  let len1 = str1.length;
  let len2 = str2.length;
  let len3 = str3.length;

  if (len1 + len2 != len3) return false;

  const dp = new Array(len2 + 1).fill().map(() => new Array(len1 + 1).fill(false));
  dp[0][0] = true;
  // console.log(dp)

  for (let i = 1; i < len1 + 1; ++i) {
    dp[i][0] = dp[i - 1][0] && str1[i - 1] == str3[i - 1];
  }

  for (let j = 1; j < len2 + 1; ++j) {
    dp[0][j] = dp[0][j - 1] && str2[j - 1] == str3[j - 1];
  }

  for (let i = 1; i < len1 + 1; ++i) {
    for (let j = 1; j < len2 + 1; j++) {
      dp[i][j] = (dp[i - 1][j] && str1[i - 1] == str3[i + j - 1]) ||
      (dp[i][j - 1] && str2[j - 1] == str3[i + j - 1])
    }
  }
  return dp[len1][len2]
}


// Recursion with Memoization 
// Time = O(m * n). Space O(m * n)
// Memoization is the technique used to store and reuse the results of expensive
// function calls to avoid redundant calculations.
const stringInterLeavingIII = (str1, str2, str3) => {
  let len1 = str1.length;
  let len2 = str2.length;
  let len3 = str3.length;

  if (len1 + len2 != len3) return false;

  const memo = new Map();
  // console.log(len3)

  function helper(i, j, k) {
    // console.log(i, j, k)
    if (k == len3) return true;

    if (memo.has(i, j))  return memo[(i, j)]

    let ans = false;
    if (i < len1 && str1[i] == str3[k]) {
      ans = ans || helper(i + 1, j, k + 1);
      // console.log(ans)
    }
    if (j < len2 && str2[j] == str3[k]) {
      ans = ans || helper(i, j + 1, k + 1)
    }
    memo[(i, j)] = ans
    // console.log('End')
    return ans
  }
  return helper(0, 0, 0)
}


console.log('InterLeaving', stringInterLeaving('aabcc', 'dbbca', 'aadbbcbcac'));
console.log('InterLeaving', stringInterLeavingII('aabcc', 'dbbca', 'aadbbcbcac'));
console.log('InterLeaving', stringInterLeavingIII('aabcc', 'dbbca', 'aadbbcbcac'));



const distinctSubsequence = (str1, str2) => {
  function helper(str1, str2, idx1, idx2) {
    // console.log(idx1, idx2, str1.length, str2.length)
    if (idx2 === str2.length) return 1;
    if (idx1 === str1.length) return 0;

    let take = 0;
    let notTake = 0;
    if (str1[idx1] === str2[idx2]) take = helper(str1, str2, idx1 + 1, idx2 + 1);
    notTake = helper(str1, str2, idx1 + 1, idx2);
    return take + notTake;
  }
  return helper(str1, str2, 0, 0);
}


const distinctSubsequenceII = (str1, str2) => {
  const dp = new Array(str1.length).fill().map(() => new Array(str2.length).fill(-1));

  function helper(idx1, idx2) {
    if (idx2 == str2.length) return 1;
    if (idx1 == str1.length) return 0;

    if (dp[idx1][idx2] !== -1) return dp[idx1][idx2];
    
    let take = 0;
    let notTake = 0;

    if (str1[idx1] == str2[idx2]) take = helper(idx1 + 1, idx2 + 1);
    notTake = helper(idx1 + 1, idx2);

    dp[idx1][idx2] = take + notTake;
    return dp[idx1][idx2];
  }
  return helper(0, 0);
}

const distinctSubsequenceIII = (str1, str2) => {
  const dp = new Array(str1.length + 1).fill().map(() => new Array(str2.length + 1).fill(0));

  for (let i = 0; i <= str1.length; i++) dp[i][str2.length] = 1;

  for (let idx1 = str1.length - 1; idx1 >= 0; idx1--) {
    for (let idx2 = str2.length - 1; idx2 >= 0; idx2--) {
      dp[idx1][idx2] = dp[idx1 + 1][idx2];
      if (str1[idx1] == str2[idx2]) {
        dp[idx1][idx2] += dp[idx1 + 1][idx2 + 1];
      }
    }
  }
  return dp[0][0];
}

const distinctSubsequenceIV = (str1, str2) => {
  const dp = new Array(str2.length + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < str1.length; i++) {
    for (let j = str2.length; j >= 0; j--) {
      if (str1[i] == str2[j]) dp[j + 1] += dp[j];
    }
  }
  return dp[str2.length];
}

const distinctSubsequenceV = (str1, str2) => {
  if (str1.length < str2.length || str2.length == 0 || str1.length == 0) return 0;
  else if (str1 == str2) return 1;
  else {
    const dp = Array.apply(null, new Array(str1.length)).map(Number.prototype.valueOf, 0);
    let prev = dp.slice();
    let current = dp.slice();
    for (let i = 0; i < str2.length; i++) {
      let sum = 0;
      for (let j = 0; j < str1.length; j++) {
        if (str2[i] === str1[j]) current[j] = i === 0 ? 1 : sum;
        sum += prev[j];
      }
      prev = current.slice();
      current = dp.slice();
    }
    return prev.reduce((a, b) => { return a + b });
  }
}

const distinctSubsequenceVI = (str1, str2) => {
  const CACHE = {};
  function dfs(i, j) {
    if (j == str2.length) return 1;
    if (i == str1.length) return 0;
    const key = `${i}, ${j}`;
    if (CACHE[key] != undefined) return CACHE[key];
    const S = str1[i];
    const T = str2[j];

    let value
    if (S == T) value = dfs(i + 1, j) + dfs(i + 1, j + 1);
    else value = dfs(i + 1, j);
    CACHE[key] = value;
    return value
  }
  return dfs(0, 0)
}


console.log('distinct', distinctSubsequence('rabbbit', 'rabbit'));
console.log('distinct', distinctSubsequenceII('rabbbit', 'rabbit'));
console.log('distinct', distinctSubsequenceIII('rabbbit', 'rabbit'));
console.log('distinct', distinctSubsequenceIV('rabbbit', 'rabbit'));
console.log('distinct', distinctSubsequenceV('rabbbit', 'rabbit'));
console.log('distinct', distinctSubsequenceVI('rabbbit', 'rabbit'));



const validPalindrome = (str) => {
  str = str.toLowerCase().replace(/[^a-z0-9]/gi, ''); // replace(/[_\W]/g, '') is also valid
  console.log(str)
  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if (str[i] !== str[j]) return false;
  }
  return true;
}

const validPalindromeII = (str) => {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return str.split('').slice(0, Math.floor(str.length / 2)).every((letter, idx) => letter === str[str.length - 1 - idx])
};

console.log('palindrome', validPalindrome('A man, a plan, a canal: Panama'));
console.log('palindrome', validPalindromeII('A man, a plan, a canal: Panama'));


const wordLadder = (beginWord, endWord, wordList) => {
  if (!wordList.includes(endWord)) return [];
  if (beginWord === endWord) return [[beginWord]]
  wordList.push(beginWord);
  const wordToShortest = new Map();
  const shortestLen = findShortestLen(beginWord, endWord);
  const ladders = [];
  const currentLadder = [beginWord]

  function helper(currentWord, currentShortest) {
    if (currentShortest == 0) {
      ladders.push([...currentLadder]);
      return;
    }
    const neighbors = findAllNeighbors(currentWord);
    for (let neighbor of neighbors) {
      if (!wordToShortest.has(neighbor)|| wordToShortest.get(neighbor) != currentShortest - 1)
        continue;
      currentLadder.push(neighbor);
      helper(neighbor, currentShortest - 1)
      currentLadder.pop();
    }
  }

  function findShortestLen(beginWord, endWord) {
    const queue = [];
    queue.push(endWord);
    let count = 0;
    wordToShortest.set(endWord, count);
    while (queue.length !== 0) {
      count++;
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const currentFirst = queue.shift();
        
        // get all the word differ bu 1 to the currentFirst
        const neighbors = findAllNeighbors(currentFirst);
        for (let neighbor of neighbors) {
          if (wordToShortest.has(neighbor)) continue;
          wordToShortest.set(neighbor, count);
          if (neighbor === beginWord) return count;
          queue.push(neighbor);
        }
      }
    }
    return -1;
  }

  // Look fo all the words that are differ by 1 letter to the given word.
  function findAllNeighbors(word) {
    const wordToNeighbors = new Map();
    if (wordToNeighbors.has(word)) return wordToNeighbors.get(word);
    let neighbors = [];
    for (let w of wordList) {
      if (isNeighbor(word, w)) neighbors.push(w);
    }
    wordToNeighbors.set(word, neighbors);
    return neighbors;
  }

  // check for the nearest neighbor whose letters are differ by 1 letter
  function isNeighbor(w1, w2){
    if (w1.length !== w2.length) return false;
    let diff = 0;
    for (let i = 0; i < w1.length; i++) {
      if (w1[i] !== w2[i]) {
        diff++;
        if (diff > 1) return false;
      }
    }
    return diff === 1;
  }

  helper(beginWord, shortestLen);
  return ladders;
}

console.log('wordLadder', wordLadder('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));


// Breath-First-Search = BFS
const wordLadderII = (beginWord, endWord, wordList) => {
  const wordSet = new Set(wordList);
  let queue = [beginWord];
  let steps = 1;

  while (queue.length) {
    const next = [];

    // Loop over each word in the queue
    for (let word of queue) {
      // console.log(word)
      if (word == endWord) return steps;

      // Loop over each char of the word
      for (let i = 0; i < word.length; i++) {

        // and replace the char with letter from [a - z] and 97 ->
        for (let j = 0; j < 26; j++) {
          const newWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);
          // if the new word exist in the word list add it to the queue
          if (wordSet.has(newWord)) {
            next.push(newWord);
            wordSet.delete(newWord);
          }
        }
      }
    }
    queue = next;
    steps++;
  }
  return 0;
}

console.log('wordLadderII', wordLadderII('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']))

const palindromePartition = (str) => {
  // Buffer for partition id DFS
  let partition = [];

  // Final output of palindrome substrings
  let result = [];

  function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }

  function dfs(str, partition, result) {
    // Base Case: Empty string must be palindrome;
    if (str.length == 0) {
      result.push([...partition]);
      return;
    }

    // General Cases
    for (let i = 1; i <= str.length; i++) {
      let prefix = str.substring(0, i);
      let postfix = str.substring(i);

      // Current prefix is palindrome, keep trying to make more partition in postfix by dfs
      if (isPalindrome(prefix)) {
        partition.push(prefix);

        dfs(postfix, partition, result);
        partition.pop();
      }
    }
    return;
  }

  dfs(str, partition, result);
  return result;
}

console.log('palindromePartition', palindromePartition('aab'));


// DP with Memoization
const palindromePartitionII = (str) => {
  let len = str.length;

  // Create a 2D array to store whether substring are palindrome
  let isPalindrome = new Array(len).fill().map(() => new Array(len).fill(false));

  // Initialize the isPalindrome array for single-char substrings
  for (let i = 0; i < len; i++) isPalindrome[i][i] = true;

  // Populate the isPalindrome array for substrings of length greater than 1
  for (let i = 2; i <= len; i++) {
    for (let j = 0; j <= len - i; j++) {
      const end = j + i - 1;
      if (j === 2) 
        // check if the substring of length 2 is a palindrome
        isPalindrome[j][end] = (str[j] == str[end]);
      else
        // Check if the current substring is a palindrome based on inner substring palindromes.
      isPalindrome[j][end] = (str[j] === str[end] && isPalindrome[j + 1][end + 1]);
    }
  }

  // Create an array to store the minimum cuts needed for each substring.
  let dp = new Array(len).fill(Number.MAX_VALUE);

  // Iterate through each substring to calculate the minimum cuts.
  for (let end = 0; end < len; end++) {
    if (isPalindrome[0][end])
      // If the entire substring is a palindrome, no cuts are needed
      dp[end] = 0;
    else {
      // Iterate through possible starting points to find the minimum cuts
      for (let start = 1; start <= end; start++) {
        if (isPalindrome[start][end]) dp[end] = Math.min(dp[end], dp[start - 1] + 1);
      }
    }
  }
  // Return the minimum cuts needed for the entire string.
  console.log(dp)
  return dp[len - 1];
}

//
const palindromePartitionIII = (str) => {
  let len = str.length;
  let cut = new Array(len + 1).fill(0);
  console.log(cut)
  for (let i = 0; i <= len; i++) cut[i] = i - 1;
  for (let i = 0; i < len; i++) {
    for (let j = 0; i - j >= 0 && i + j < len && str[i - j] == str[i + j]; j++)
      // Odd length palindrome
      cut[i + j + 1] = Math.min(cut[i + j + 1], 1 + cut[i - j]);
    for (let j = 1; i - j + 1 >= 0 && i + j < len && str[i - j + 1] === str[i + j]; j++)
      // Even length palindrome
      cut[i + j + 1] = Math.min(cut[i + j + 1], 1 + cut[i - j + 1]);
  }
  console.log(cut)
  return cut[len];
}

console.log('palindromePartition', palindromePartitionII('aab'));
console.log('palindromePartition', palindromePartitionIII('aab'));


// Dynamic programming method
const wordBreak = (str, dict) => {
  const len = str.length;
  const dp = new Array(len + 1).fill(false);
  dp[0] = true;

  // Get the longest word in the dictionary
  let maxWord = Math.max(...dict.map((word) => word.length));

  // Iterate through the string
  for (let i = 1; i <= len; i++) {
    for (let j = i - 1; j >= Math.max(i - maxWord - 1, 0); j--) {
      if (dp[j] && dict.includes(str.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[len];
}


// Depth-First Search = DFS with Memoization
const wordBreakII = (str, dict) => {
  let memo = {};
  let wordSet = new Set(dict);

  function dfs (str, wordSet, memo) {
    if (str in memo) return memo[s];
    if (wordSet.has(str)) return true;
    for (let i = 1; i < str.length; i++) {
      let prefix = str.substring(0, i);
      if (wordSet.has(prefix) && dfs(str.substring(i), wordSet, memo)) {
        memo[str] = true;
        return true
      }
    }
    memo[str] = false;
    return false;
  }
  return dfs(str, wordSet, memo)
}

console.log('wordBreak', wordBreak('applepenapple', ['apple', 'pen']));
console.log('wordBreak', wordBreakII('applepenapple', ['apple', 'pen']));



const reverseWords = (str) => {
  const split = str.trim().split(' ');
  const len = split.length;
  let word = []
  for (let i = len - 1; i >= 0; i--){
    word.push(split[i])
  }
  return word.join(' ')
}

const reverseWordsII = (str) => {
  return str.trim().split(' ').filter(Boolean).reverse().join(' '); // /\s+/
}

const reverseWordsIII = (str) => {
  const result = [];
  let word = [];
  for (let i = 0; i < str.length; ++i) {
    if (str[i] == ' ') {
      word.length > 0 && result.unshift(word.join(''))
      word = [];
    }
    else word.push(str[i]);
  }
  word.length > 0 && result.unshift(word.join(''));
  return result.join(' ');
};

const reverseWordsIV = (str) => {
  if (!str) return null;
  const words = Array.from(str);
  const len = words.length;

  function reverseWords(words, i, j) {
    while (i < j) {
      let word = words[i];
      words[i++] = words[j];
      words[j--] = word;
    }
  }

  function reverseEachWord(words, len) {
    let i = 0, j = 0;
    while (i < len) {
      while (i < j || i < len && words[i] == ' ') i++; // Skip spaces
      while (j < i || j < len && words[j] != ' ') j++; // Skip non spaces
      reverseWords(words, i, j - 1); // Reverse the word
    }
  }

  // Trim leading, trailing and multiple spaces
  function cleanSpaces(words, len) {
    let i = 0, j = 0;
    while (j < len) {
      while (j < len && words[j] == ' ') j++; // Skip spaces
      while (j < len && words[j] != ' ') words[i++] = words[j++]; // Keep non spaces
      while (j < len && words[j] == ' ') j++; // skip spaces
      if (j < len) words[i++] = ' '; // Keep only one space
    }
    // console.log(words.join(''), i)
    return words.join('');
  }

  // reverse the whole string
  reverseWords(words, 0, len - 1);

  // reverse each word
  reverseEachWord(words, len);

  // Clean up spaces
  return cleanSpaces(words, len)
}

console.log('reverse', reverseWords('the sky is blue'));
console.log('reverse', reverseWordsII('the sky is blue'));
console.log('reverse', reverseWordsIII('the sky is blue'))
console.log('reverse', reverseWordsIV('the sky is blue'))


const compareVersionNumbers = (version1, version2) => {
  let i = 0, j = 0;
  let result1 = [], result2 = [];
  while (i < version1.length || j < version2.length) {
    result1 = helper(version1, i);
    result2 = helper(version2, j);
    const v1 = result1[0], v2 = result2[0];
    i = result1[1];
    j = result2[1];
    if (v1 > v2) return 1;
    else if (v1 < v2) return -1;
  }
  function helper(str, idx) {
    let num = 0;
    while (idx < str.length) {
      if (str[idx] === '.') break;
      else num = num * 10 + parseInt(str[idx]);
      idx++;
    }
    return [num, idx + 1];
  };

  return 0;
}

const compareVersionNumbersII = (version1, version2) => {
  let i = 0, j =0;
  while (i < version1.length || j < version2.length) {
    let v1 = 0, v2 = 0;
    while (i < version1.length && version1[i] !== '.') {
      v1 = v1 * 10 + parseInt(version1[i]);
      i++;
    }
    while (j < version2.length && version2[j] !== '.') {
      v2 = v2 * 10 + parseInt(version2[j]);
      j++;
    }
    if (v1 > v2) return 1;
    else if (v1 < v2) return -1;
    i++;
    j++;
  }
  return 0;
}

console.log('compareVersion', compareVersionNumbers('1.01', '1.001'))
console.log('compareVersion', compareVersionNumbersII('1.2', '1.10'));



const fractionToRecurringDecimal = (numerator, denominator) => {
  let str = '';
  const map = new Map();
  if (numerator == 0) return 0;
  if (Math.sign(numerator) != Math.sign(denominator)) str += '-';
  const nume = Math.abs(numerator);
  const deno = Math.abs(denominator);
  let rem = nume % deno;
  if (!rem) return str;
  str += (Math.floor(nume / deno) + '.');
  const len = str.length;
console.log(670%333)
  while (rem != 0) {
    map.set(rem, len);
    rem *= 10;
    str += Math.floor(rem/deno);
    rem %= deno

    if (map.has(rem)) {
      const idx = map.get(rem);
      return str.slice(0, idx) + `(${str.slice(idx)})`
    }
  }
  return str;
}

console.log('fraction', fractionToRecurringDecimal(4, 333));


const excelSheetColumnTitle = (num) => {
  if (num == 0) return null;
  let result = '';
  while (num > 0) {
    let r = num % 26;
    num = parseInt(num / 26);
    if (r == 0) r = 26, num -= 1;
    result = String.fromCharCode(64 + r) + result;
  }
  return result;
}

const excelSheetColumnTitleII = (num) => {
  let result = '';
  while (num > 0){
    let code = (--num) % 26;
    result = String.fromCharCode(code + 65) + result;
    num = (num - code) / 26
  }
  return result;
}

console.log('excel', excelSheetColumnTitle(701));
console.log('excel', excelSheetColumnTitleII(701));


const excelSheetColumnNumber = (str) => {
  if (str == null) return null;
  let num  = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    const word = str.charCodeAt(i) - 64;
    const pos = Math.pow(26, str.length - i - 1);
    num += (word * pos)
  }
  return num;
}

const excelSheetColumnNumberII = (str) => {
  let num = 0;
  for (char in str) {
    let word = str.charCodeAt(char) - 65 + 1;
    num = num * 26 + word;
  }
  return num;
}


console.log('excelNumber', excelSheetColumnNumber('ZY'));
console.log('excelNUmber', excelSheetColumnNumberII('ZY'));


const largestNumber = (arr) => {
  return arr.sort((a, b) => {
    return (b + '' + a) - (a + '' + b);
  }).join('').replace(/^0*/, '') || '0';
}

console.log('LargestNumber', largestNumber([3, 30, 34, 5, 9]));



const repeatedDNASequences = (str) => {
  let current = str.slice(0, 10);
  const seen = new Set([current]);
  const res = new Set();

  for (let i = 10; i < str.length; i++) {
    current = current.slice(1) + str[i];
    if (seen.has(current)) res.add(current);
    seen.add(current);
  }
  return [...res];
}

console.log('DNA', repeatedDNASequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'));



// Isomorphic string - are strings which have the same form. (Eg. Daddy - Mummy)
//    ISO - means the same.
//    MORPHIC - means form
const isomorphicString = (str1, str2) => {
  const arr1 = new Array(256).fill(0);
  const arr2 = new Array(256).fill(0);
  const len = str1.length;

  // iterate and compare the number of times a char appear
  for (let i = 0; i < len; i++) {
    if (arr1[str1[i]] != arr2[str2[i]]) return false;
    arr1[str1[i]] = i + 1;
    arr2[str2[i]] = i + 1;
  }
  return true;
}

console.log('isomorphicString', isomorphicString('egg', 'bar'))


const groupIsomorphic = (arr) => {
  let mp = new Map();
  for (str of arr) {
    let key = helper(str);
    if (!mp.has(key)) mp.set(key, []);
    mp.get(key).push(str);
  }
  return Array.from(mp.values());

  function helper(str) {
    const res = [];
    const seen = {};
    let unique = 0;

    // Increase unique only if the char does not exist in the object.
    for (char of str) {
      if (!(char in seen)) {
        seen[char] = unique;
        unique += 1;
      }
      res.push(seen[char])
    }
    return res.join('#')
  }
}

console.log('groupIsomorphic', groupIsomorphic(['aab', 'xxy', 'abc', 'def', 'xyx']));


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


class wordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let current = this.root;

    for (char of word) {
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
      console.log(node)
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

const findWords = (board, words) => {
  const dir = [
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
        if (node[char]) {}
      }
    }
  }
}

let boardword = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v']
]

let words = ['oaths', 'pea', 'eat', 'rain']

console.log('wordSearch', findWord(boardword, words))