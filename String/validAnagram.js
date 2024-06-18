// Anagram is a word or phrase formed by rearranging the letters of a different
// word or phrase letters exactly once.
const validAnagram = (str1, str2) => {
  if (str1.length != str2.length) return false;

  const freq = new Array(26).fill(0);
  for (let i = 0; i < str1.length; i++) {
    freq[str1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    freq[str2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }

  for (let j = 0; j < freq.length; j++) {
    if (freq[j] != 0) return false;
  }
  return true;
};

const validAnagramII = (str1, str2) => {
  if (str1.length != str2.length) return false;
  let map = new Map();
  for (let char of str1) map.set(char, (map.get(char) || 0) +1);
  for (let char of str2) {
    if (map.has(char)) {
      map.set(char, map.get(char) -1);
      if (map.get(char) === 0) map.delete(char);
    } else return false;
  }
  return map.size === 0;
};

console.log('validAnagram', validAnagram('anagram', 'nagaram'));
console.log('validAnagram', validAnagramII('anbgram', 'nagaram'));
