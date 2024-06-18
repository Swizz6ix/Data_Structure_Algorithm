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
