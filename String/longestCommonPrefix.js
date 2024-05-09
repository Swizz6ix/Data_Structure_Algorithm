const longestCommonPrefix = (arrStr) => {
  return arrStr.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  })
}

console.log('longest', longestCommonPrefix(['flower', 'flow', 'flight']));
