const removeInvalidParentheses = (str) => {
  let output = [];
  removeHelper(str, 0, 0, ['(', ')']);
  return output;

  function removeHelper(str, last_i, last_j, par) {
    let stack = 0;
    for (let i = last_i; i < str.length; ++i) {
      if (str[i] == par[0]) stack++;
      if (str[i] == par[1]) stack--;
      if (stack >= 0) continue;
      for (let j = last_j; j <= i; ++j) {
        if (str[j] == par[1] && (j == last_j || str[j - 1] != par[1])) {
          removeHelper(str.substring(0, j) + str.substring(j + 1, str.length), i, j, par);
        }
      }
      return;
    }
    const revStr = str.split('').reverse().join('');
      if (par[0] == '(') removeHelper(revStr, 0, 0, [')', '(']);
      else output.push(revStr);
  }
}

console.log('removeInvalidParentheses', removeInvalidParentheses('()())()'));
