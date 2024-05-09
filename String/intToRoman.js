const intToRoman = (N) => {
  let val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let ans = '';
  for (let i = 0; N; i++) {
    while (N >= val[i]) ans += roman[i], N -= val[i];
  }
  return ans;
}

console.log('roman', intToRoman(18));
