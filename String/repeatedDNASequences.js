const repeatedDNASequences = (str) => {
  let current = str.slice(0, 10);
  const seen = new Set([current]);
  const res = new Set();

  for (let i = 10; i < str.length; i++) {
    current = current.slice(1) + str[i];
    if (seen.has(current)) res.add(current);
    seen.add(current);
  }
  return [...res];
}

console.log('DNA', repeatedDNASequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'));