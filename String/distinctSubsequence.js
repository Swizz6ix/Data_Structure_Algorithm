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
    return prev.reduce((a, b) => a + b );
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
