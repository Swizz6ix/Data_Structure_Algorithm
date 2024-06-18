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
