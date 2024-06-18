const compareVersionNumbers = (version1, version2) => {
  let i = 0, j = 0;
  let result1 = [], result2 = [];
  while (i < version1.length || j < version2.length) {
    result1 = helper(version1, i);
    result2 = helper(version2, j);
    const v1 = result1[0], v2 = result2[0];
    i = result1[1];
    j = result2[1];
    if (v1 > v2) return 1;
    else if (v1 < v2) return -1;
  }
  function helper(str, idx) {
    let num = 0;
    while (idx < str.length) {
      if (str[idx] === '.') break;
      else num = num * 10 + parseInt(str[idx]);
      idx++;
    }
    return [num, idx + 1];
  };

  return 0;
}

const compareVersionNumbersII = (version1, version2) => {
  let i = 0, j =0;
  while (i < version1.length || j < version2.length) {
    let v1 = 0, v2 = 0;
    while (i < version1.length && version1[i] !== '.') {
      v1 = v1 * 10 + parseInt(version1[i]);
      i++;
    }
    while (j < version2.length && version2[j] !== '.') {
      v2 = v2 * 10 + parseInt(version2[j]);
      j++;
    }
    if (v1 > v2) return 1;
    else if (v1 < v2) return -1;
    i++;
    j++;
  }
  return 0;
}

console.log('compareVersion', compareVersionNumbers('1.01', '1.001'))
console.log('compareVersion', compareVersionNumbersII('1.2', '1.10'));
