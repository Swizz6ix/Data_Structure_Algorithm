const generateParenthesis = (num) => {
  const res = [];

  const go = (left, right, str) => {
  if (str.length == 2 * num) {
    res.push(str);
    return;
  }
  if (left < num) go(left + 1, right, str + '(');
  if (right < left) go(left, right + 1, str + ')');
  };

  go(0, 0, '');
  return res
}

console.log('gen', generateParenthesis(2));
