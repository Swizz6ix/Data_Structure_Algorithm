const restoreIPAddress = (str) => {
  const result = [];

  function permute(arr, str) {
    if (arr.length === 3) {
      if (isValid(str)) result.push([...arr, str]);
      return;
    }
    for (let i = 1; i < 4; i++) {
      let subStr = str.slice(0, i);
      if (!isValid(subStr)) continue;
      permute([...arr, subStr], str.slice(i));
    }
  }
  
  function isValid(str){
    if (+str > 255 || !str.length) return false;
    if (str.length >= 2 && str[0] === '0') return false;
    return true;
  }

  permute([], str);
  return result.map(x => x.join('.'));
};

console.log('restoreIP', restoreIPAddress('25525511135'))
