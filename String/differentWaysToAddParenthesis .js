const differentWaysToAddParenthesis = (input) => {
  input = input.replace(/\s/g, '')
  let res = [];
  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      let left = differentWaysToAddParenthesis(input.slice(0, i));
      let right = differentWaysToAddParenthesis(input.slice(i + 1));
      for (let lft of left) {
        for (let rit of right) {
          lft = Number(lft);
          rit = Number(rit);

          if (input[i] == '+') res.push(lft + rit);
          else if (input[i] == '-') res.push(lft - rit);
        else res.push(lft * rit);
        }
      }
    }
  }
  if (res.length != 0) return res;
  return [input];
}

console.log('different', differentWaysToAddParenthesis('2 * 3 - 4 * 5'));
