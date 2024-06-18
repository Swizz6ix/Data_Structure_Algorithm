const basicCalculator = (str) => {
  let sign = 1, sum = 0;

  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      let num = 0;
      while (str[i] >= '0' && str[i] <= '9') {
        num = (num * 10) + (str[i] - '0');
        i++;
      }

      sum += (num * sign);
      i--;
    }
    else if (str[i] === '+') sign = 1;
    else if (str[i] === '-') sign = -1;
    else if (str[i] === '(') {
      stack.push(sum);
      stack.push(sign)
      sum = 0;
      sign = 1;
    }
    else if (str[i] === ')') {
      sum = stack.pop() * sum;
      sum += stack.pop();
    }
  }
  return sum;
}

console.log('Calculator', basicCalculator('25 - (1 + 2)'));
