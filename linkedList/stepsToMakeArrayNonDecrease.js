// Algorithm: The back wave the front wave,
// the front wave ends up on the beach
const stepsToMakeArrayNonDecrease = (arr) => {
  if (arr.length <= 0) return arr;
  const len = arr.length
  let res = 0;
  let j = -1;
  let dp = new Array(len).fill(0);
  let stack = new Array(len).fill(0);
  
  for (let i = len - 1; i >= 0; --i) {
    while (j >= 0 && arr[i] > arr[stack[j]]) {
      dp[i] = Math.max(++dp[i], dp[stack[j--]]);
      res = Math.max(res, dp[i]);
    }
    stack[++j] = i;
  }
  return res;
}

const stArr = [5, 3, 4, 4, 7, 3, 6, 11, 8, 5, 11]
console.log(stepsToMakeArrayNonDecrease(stArr));
