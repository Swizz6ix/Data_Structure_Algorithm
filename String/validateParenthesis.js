const validateParenthesis = (str) => {
  if (str.length % 2 !== 0) return false;
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    switch (char) {
      case '(':
        stack.push(')');
        break;
    
      case '[':
        stack.push(']');
        break;

      case '{':
        stack.push('}');
        break;

      default:
        if (char !== stack.pop()) return false;
    };

  }
  return !stack.length
}

console.log('goff', validateParenthesis('()[]{}'))