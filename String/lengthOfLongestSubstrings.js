const lengthOfLongestSubstrings = (str) => {
  let result = 0;
  let cache = new Array(128);
  for (let i = 0, j = 0; i < str.length; i++) {
    // j only increases if a letter is repeated
    j = (cache[str.charAt(i)] > 0) ? Math.max(j, cache[str.charAt(i)]) : j;
    cache[str.charAt(i)] = i + 1;
    result = Math.max(result, i - j + 1);
  }
  return result;
}

console.log('str', lengthOfLongestSubstrings('abcabcbb'));
