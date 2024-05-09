const addBinary = (str1, str2) => {
  let result = "";
  let carry = 0;

  if (str1.length > str2.length)
  console.log('0'.repeat(str1.length - str2.length)+str2),
    str2 = '0'.repeat(str1.length - str2.length) + str2;
  else {
    str1.length = str2.length;
    str1 = '0'.repeat(str2.length - str1.length) + str1;
  }

  for (let i = str1.length - 1; i >= 0; i--) {
    sum = parseInt(str1[i]) + parseInt(str2[i]) + carry;
    result = (sum % 2) + result;
    carry = sum >= 2 ? 1 : 0;
  }
  if (carry) {
    result = "1" + result;
  }
  return result;
}


const addBinary2 = (str1, str2) => {
  const sum = BigInt(`0b${str1}`) + BigInt(`0b${str2}`);
  return sum.toString(2)
}

const addBinary3 = (str1, str2) => {
  // Truth Table
  // 1st + 2nd + carry = sum, new carry, decimal sum
  // 0 + 0 = 0, 0 (0)
  // 0 + 1 = 1, 0 (1)
  // 1 + 1 = 0, 1 (2)
  // 1 + 1 = 1, 1 (3)

  let carry = 0;
  let result = '';
  let len1 = str1.length - 1;
  let len2 = str2.length - 1;

  for (; len1 >= 0 || len2 >= 0 || carry > 0; len1--, len2--) {
    let sum = (+str1[len1] || 0) + (+str2[len2] || 0) + carry;
    if (sum > 1) {
      sum = sum % 2;
      carry = 1
    } else carry = 0;
    result = `${sum}${result}`;
  }
  return result;
}

console.log('addBinary', addBinary('1010', '101'));
console.log('addBinary', addBinary2('1010', '1011'));
console.log('addBinary', addBinary3('1010', '1011'));