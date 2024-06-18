const longestValidParenthesis = (str) => {
  let longest = 0; 
  let leftCount = 0;
  let rightCount = 0;

  // left to right pass
  for (let i = 0; i < str.length; i++) {
    if(str[i] == '(') leftCount++;
    else rightCount++;

    if (leftCount === rightCount) {
      longest = Math.max(longest, leftCount + rightCount)
    } else if (leftCount < rightCount) {
      leftCount = 0;
      rightCount = 0;
    }
  }

  // right to left pass
  leftCount = 0;
  rightCount = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] == '(') leftCount++;
    else rightCount++;

    if (leftCount == rightCount) {
      longest = Math.max(longest, leftCount + rightCount)
    } else if (leftCount > rightCount) {
      leftCount = 0;
      rightCount = 0;
    }
  }

  return longest;
}

//method 2
const longestValidParenthesis2 = (str) => {
  let longest = 0;
  let stack = [-1];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(') {
      stack.push(i);
      continue;
    }

    stack.pop();
    if (!stack.length) stack.push(i);
    else longest = Math.max(longest, (i - stack[stack.length - 1]));
  }
  return longest;
}

console.log('longest', longestValidParenthesis('()())'));
console.log('longest', longestValidParenthesis2('()())'));
