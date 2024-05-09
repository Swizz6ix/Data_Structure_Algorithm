// '0': '1'
// '1': '1'
// '2': '11'
// '3': '21'
// '4': '1211'
// '5': '111221'
// '6': '312211'
// '7': '13112221'
// '8': '1113213211'
// '9': '31131211131221'


const countAndSay = (n) => {
  if (n === 1) return '1';
  return countAndSay(n - 1)
    .match(/1+|2+|3+/g)
    .reduce((acc, nums) => acc += `${nums.length}${nums[0]}`, '');
}

console.log('countSay', countAndSay(4));