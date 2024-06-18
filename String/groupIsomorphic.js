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
        unique++;
      }
      res.push(seen[char])
    }
    return res.join('#')
  }
}

console.log('groupIsomorphic', groupIsomorphic(['aab', 'xxy', 'abc', 'def', 'xyx']));