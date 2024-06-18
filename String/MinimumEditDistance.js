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
