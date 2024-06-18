const excelSheetColumnTitle = (num) => {
  if (num == 0) return null;
  let result = '';
  while (num > 0) {
    let r = num % 26;
    num = parseInt(num / 26);
    if (r == 0) r = 26, num -= 1;
    result = String.fromCharCode(64 + r) + result;
  }
  return result;
}

const excelSheetColumnTitleII = (num) => {
  let result = '';
  while (num > 0){
    let code = (--num) % 26;
    result = String.fromCharCode(code + 65) + result;
    num = (num - code) / 26
  }
  return result;
}

console.log('excel', excelSheetColumnTitle(701));
console.log('excel', excelSheetColumnTitleII(701));
