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

