
// Brute Force
const maxProductWord = (words) => {
  let max = 0;
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      // compare words
      if (uniqueHelper(words[i], words[j])) {
        max = Math.max(max, (words[i].length * words[j].length));
      }
    }
  }
  return max;

  // Compare each char in the word;
  function uniqueHelper(a, b) {
    for (let i = 0; i < a.length; i++) {
      if (b.includes(a[i])) return false;
    }
    return true;
  };
}


// Bitwise Brute Force
const maxProductWordII = (words) => {
  let max = 0;
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      // compare words
      if (uniqueHelper(words[i], words[j])) {
        max = Math.max(max, (words[i].length * words[j].length));
      }
    }
  }
  return max;

  function uniqueHelper(a, b) {
    const intA = convertToInt(a);
    const intB = convertToInt(b);

    // AND Operations
    // 1 1 0 1 0
    // 0 0 1 1 0
    //------------
    // 0 0 0 1 0  => false;

    if ((intA & intB) == 0) return true;
    else return false
    function convertToInt(word) {
      let int = 0;
      const baseCharCode = 'a'.charCodeAt(0);
      for (let i = 0; i < word.length; i++) { // represent English alphabets in bits
        int |= 1 << (word.charCodeAt(i) - baseCharCode);  
        // Every integer has 32 bits but there are only 26 english alphabets
        // we use the lowest 26 bits to represent each letter, 
        // this means each word has different letters,
        // this means we represent the letter a as 1 (1 << 0) == 2 ** 0 = 1
        // the oder of letters in from right to left. that is zyxwvutsrqponmlkjihgfedcba
        // 
      }
      return int;
    }
  }
}
console.log('Maximum_product', maxProductWord(['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef']));
console.log('Maximum_product', maxProductWordII([ 'abcdef', 'yt']));
