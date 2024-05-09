const letterCombination = (digits) => {
  if (digits == null || digits.length == 0) return [];

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };

  const res = [];
  const go = (i, str) => {
    if (i == digits.length) {
      res.push(str);
      return;
    }

    for (const char of map[digits[i]]) go(i + 1, str + char);
  }
  go(0, '');
  return res;
}

console.log('letter', letterCombination('23'));
