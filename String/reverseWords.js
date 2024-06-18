const reverseWords = (str) => {
  const split = str.trim().split(' ');
  const len = split.length;
  let word = []
  for (let i = len - 1; i >= 0; i--){
    word.push(split[i])
  }
  return word.join(' ')
}

const reverseWordsII = (str) => {
  return str.trim().split(' ').filter(Boolean).reverse().join(' '); // /\s+/
}

const reverseWordsIII = (str) => {
  const result = [];
  let word = [];
  for (let i = 0; i < str.length; ++i) {
    if (str[i] == ' ') {
      word.length > 0 && result.unshift(word.join(''))
      word = [];
    }
    else word.push(str[i]);
  }
  word.length > 0 && result.unshift(word.join(''));
  return result.join(' ');
};

const reverseWordsIV = (str) => {
  if (!str) return null;
  const words = Array.from(str);
  const len = words.length;

  function reverseWords(words, i, j) {
    while (i < j) {
      let word = words[i];
      words[i++] = words[j];
      words[j--] = word;
    }
  }

  function reverseEachWord(words, len) {
    let i = 0, j = 0;
    while (i < len) {
      while (i < j || i < len && words[i] == ' ') i++; // Skip spaces
      while (j < i || j < len && words[j] != ' ') j++; // Skip non spaces
      reverseWords(words, i, j - 1); // Reverse the word
    }
  }

  // Trim leading, trailing and multiple spaces
  function cleanSpaces(words, len) {
    let i = 0, j = 0;
    while (j < len) {
      while (j < len && words[j] == ' ') j++; // Skip spaces
      while (j < len && words[j] != ' ') words[i++] = words[j++]; // Keep non spaces
      while (j < len && words[j] == ' ') j++; // skip spaces
      if (j < len) words[i++] = ' '; // Keep only one space
    }
    // console.log(words.join(''), i)
    return words.join('');
  }

  // reverse the whole string
  reverseWords(words, 0, len - 1);

  // reverse each word
  reverseEachWord(words, len);

  // Clean up spaces
  return cleanSpaces(words, len)
}

console.log('reverse', reverseWords('the sky is blue'));
console.log('reverse', reverseWordsII('the sky is blue'));
console.log('reverse', reverseWordsIII('the sky is blue'))
console.log('reverse', reverseWordsIV('the sky is blue'))
