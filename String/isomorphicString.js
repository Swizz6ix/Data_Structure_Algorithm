// Isomorphic string - are strings which have the same form. (Eg. Daddy - Mummy)
//    ISO - means the same.
//    MORPHIC - means form
const isomorphicString = (str1, str2) => {
  const arr1 = new Array(256).fill(0);
  const arr2 = new Array(256).fill(0);
  const len = str1.length;

  // iterate and compare the number of times a char appear
  for (let i = 0; i < len; i++) {
    if (arr1[str1[i]] != arr2[str2[i]]) return false;
    arr1[str1[i]] = i + 1;
    arr2[str2[i]] = i + 1;
  }
  return true;
}

console.log('isomorphicString', isomorphicString('egg', 'bar'))
