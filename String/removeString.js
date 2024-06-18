const removeString = (arr) => {
  return arr.reverse().join(',').split('');
}

const removeStringI = (arr) => {
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

console.log('removeString',removeString(['h', 'e', 'l', 'l', 'o' ]));
console.log('removeString',removeStringI(['h', 'e', 'l', 'l', 'o' ]));
