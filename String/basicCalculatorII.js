const basicCalculatorII = (str) => {
  if (str == null || str.length == 0) return null;

  str = str.replace(/\s/g, '');

  let stack = [];
  let num = 0;
  let sign = '+';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (/\d/.test(char)) num = num * 10 + char - '0';
    if (/\D/.test(char) || i == str.length - 1) {
      switch(sign) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop() * num);
          break
        case '/':
          stack.push(~~(stack.pop() / num));
          break;
      }
      sign = char;
      num = 0;
    }
  }
  return stack.reduce((a, b) => a + b);
}

console.log('basic_Calculator', basicCalculatorII('3 + 5 / 2'))
