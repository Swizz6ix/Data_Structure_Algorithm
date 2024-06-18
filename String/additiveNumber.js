// An Additive NUmber is a string whose digits can form an additive sequence.
// A valid additive sequence should contain at least three numbers.
// Except fo the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.
const additiveNumber = (str) => {
  let len = str.length;
  for (let i = 1; i <= len / 2; ++i) {
    for (let j = 1; Math.max(j, i) <= len - i - j; ++j) {
      if (isValid(i, j, str)) return true;
    }
  }
  return false;

  function isValid(i, j, str) {
    if (str[0] == '0' && i > 1) return false;
    if (str[i] == '0' && j > 1) return false;

    let sum = '';
    let x1 = parseInt(str.substring(0, i));
    let x2 = parseInt(str.substring(i, i + j));

    for (let start = i + j; start != str.length; start += sum.length) {
      x2 += x1;
      x1 = x2 - x1;
      sum = x2.toString();
      if (!str.startsWith(sum, start)) return false;
    }
    return true;
  }
}

console.log('additiveNumber', additiveNumber('112358')) // 0235813 //113
