const atoi = (str) => {
  let i = 0;
  let sign = 1;
  let num = 0;
  let min = Math.pow(-2, 31)
  let max = (min + 1) * -1;
  console.log(min, max)
  str = str.trim();

  if (str[i] == '-' || str[i] == '+') sign = str[i++] == '-'? -1 : 1;
  while (str[i] && str[i].charCodeAt(0) - 48 <= 9 && str[i].charCodeAt(0) - 48 >= 0) {
    num = num * 10 + (str[i++].charCodeAt(0) - 48);
  }
  num = sign * num;
  return num <= min? min : num >= max? max : num;
}

console.log('atoi', atoi('  -42'));