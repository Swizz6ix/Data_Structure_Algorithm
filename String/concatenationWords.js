const concatenationWords = (str, arrWords) => {
  let map = new Map()
  let len = arrWords.length;
  let wordLen = arrWords[0].length;
  let slideWindow = wordLen * len;

  // Map the words in the arrWords
  for (let word of arrWords) {
    map.has(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1);
  }

  let leftIndex = 0;
  let rightIndex = slideWindow - 1;
  let result = [];

  while (rightIndex < str.length) {
    if (rightIndex - leftIndex + 1 == slideWindow) {
      let tempStr = str.substring(leftIndex, rightIndex + 1);
      if (helper(tempStr)) result.push(leftIndex);
      leftIndex++;
    }
    rightIndex++;
  }

  return result;

  // helper function to compare the substrings from the str and words in the array.
  function helper (tempStr) {
    let visited = new Map();
    for (let i = 0; i < tempStr.length; i+= wordLen) {
      let word = tempStr.substr(i, wordLen);
      visited.has(word) ? visited.set(word, visited.get(word) + 1) : visited.set(word, 1)
    }

    for (let [key, val] of visited) {
      if (map.get(key) != val) return false;
    }
    return true;
  }
};

let wordStr = 'barfoothefoobarman'
const arrWords = ['foo', 'bar']

console.log('word', concatenationWords(wordStr, arrWords))