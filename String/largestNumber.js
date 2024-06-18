const largestNumber = (arr) => {
  return arr.sort((a, b) => {
    return (b + '' + a) - (a + '' + b);
  }).join('').replace(/^0*/, '') || '0';
}

console.log('LargestNumber', largestNumber([3, 30, 34, 5, 9]));
