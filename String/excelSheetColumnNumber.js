const excelSheetColumnNumber = (str) => {
  if (str == null) return null;
  let num  = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    const word = str.charCodeAt(i) - 64;
    const pos = Math.pow(26, str.length - i - 1);
    num += (word * pos)
  }
  return num;
}

const excelSheetColumnNumberII = (str) => {
  let num = 0;
  for (char in str) {
    let word = str.charCodeAt(char) - 65 + 1;
    num = num * 26 + word;
  }
  return num;
}


console.log('excelNumber', excelSheetColumnNumber('ZY'));
console.log('excelNUmber', excelSheetColumnNumberII('ZY'));
