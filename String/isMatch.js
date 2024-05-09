const isMatch = (str, pat) => {
  // return true when string and pattern are empty
  // return false when string contains chars with empty pattern
  if (!pat) return !str;

  // check if the current char of the string and pattern match when the string has chars
  const hasFirstCharMatch = Boolean(str) && (pat[0] === '.' || pat[0] === str[0]);

  // Track when the next character * is next in line in the pattern
  if (pat[1] === '*') {
    // if next pattern match (after *) if fine with current string, then 
    // proceed with it (s, p+2). that's because the current pattern may be skipped.
    // Otherwise check that hasFirstCharMatch. That's because if we want to proceed 
    // with the current pattern, we must be sure that the current pattern char matches the char.
    // If hasFirstCharMatch is true, then do the recursion with next char and
    // current pattern (s+1, p). That's because current char matches the pattern char.
    return (
      isMatch(str, pat.slice(2)) || (
        hasFirstCharMatch && isMatch(str.slice(1), pat)
      )
    );
  }

  // now we know fo sure that we need to do 2 simple actions
  // check the current pattern and string chars
  // If so, then we can proceed with next string and pattern chars (s+1, p+)
  return hasFirstCharMatch ? isMatch(str.slice(1), pat.slice(1)) : false;
}

console.log('regrex', isMatch('ab', '.*'))
