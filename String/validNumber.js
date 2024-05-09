const validNumber = (str) => {
  let exp = false;
  let sign = false;
  let num = false;
  let dec = false;

  for (let char of str) {
    if (char >= '0' && char <= '9') return true
    else if (char === 'e' || char === 'E') 
        if (exp || !num) return false;
        else exp = true, sign = false, num = false, dec = false
    else if (char === '+' || char === '-')
      if (sign || num || dec) return false;
      else sign = true;
    else if (char == '.')
      if (dec || exp) return false;
      else dec = true;
    else return false
  }
  return num;
}

console.log('isNumber', validNumber('10e4'))
