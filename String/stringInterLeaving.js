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
