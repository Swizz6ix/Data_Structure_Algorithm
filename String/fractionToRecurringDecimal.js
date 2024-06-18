const fractionToRecurringDecimal = (numerator, denominator) => {
  let str = '';
  const map = new Map();
  if (numerator == 0) return 0;
  if (Math.sign(numerator) != Math.sign(denominator)) str += '-';
  const nume = Math.abs(numerator);
  const deno = Math.abs(denominator);
  let rem = nume % deno;
  if (!rem) return str;
  str += (Math.floor(nume / deno) + '.');
  const len = str.length;
console.log(670%333)
  while (rem != 0) {
    map.set(rem, len);
    rem *= 10;
    str += Math.floor(rem/deno);
    rem %= deno

    if (map.has(rem)) {
      const idx = map.get(rem);
      return str.slice(0, idx) + `(${str.slice(idx)})`
    }
  }
  return str;
}

console.log('fraction', fractionToRecurringDecimal(4, 333));
