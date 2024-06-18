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
