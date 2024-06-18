const wordPattern = (str1, str2) => {
  let arr1 = new Array(26).fill(0);
  let arr2 = new Array(26).fill(0);
  let str = ''
  const words = str2.split(' ');

  for (let word of words) str += word[0];
  if (str1.length != str.length) return false;

  for (let i = 0; i < str1.length; i++) {
    if (arr1[str1[i]] != arr2[str[i]]) return false
    arr1[str1[i]] = i + 1;
    arr2[str[i]] = i + 1;
  }
  return true;
}

console.log('wordPattern', wordPattern('abba', 'dog cat cat dog'));