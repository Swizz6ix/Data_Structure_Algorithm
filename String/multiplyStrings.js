const multiplyStrings = (str1, str2) => {
  if (str1 === '0' || str2 === '0') return '0';

  const len1 = str1.length;
  const len2 = str2.length;
  const res = new Array(len1 + len2).fill(0);

  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      const p1 = i + j;
      const p2 = i + j + 1;
      let sum = res[p2] + Number(str1[i]) * Number(str2[j]);
      res[p2] = sum % 10;
      res[p1] += Math.floor(sum/10);
    }
  }
  if (res[0] === 0) res.shift();
  return res.join('');
}

console.log('multi', multiplyStrings('24', '39'));