const express = require('express');
const app = express();

const PORT = 2567
app.listen(PORT, () => {
  console.log('Server is up on', PORT)
});


// 2269945528 blessed onyebuenyi

//STRING
const removeVowels = (str) => {
  const map = {'a': 1, 'e': 2, 'i': 3, 'o' : 4, 'u': 5};
  const arr = str.split('');

  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (map[arr[i]] && map[arr[j]]) [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}

const removeVowelsII = (str) => {
  const match = str.match(/[aeiou]/gi);
  return str.replace(/[aeiou]/gi, () => match.pop());
}

const removeVowelsIII = (str) => {
  const vowels = str.split('').filter(el => /[aeiou]/i.test(el));
  return str.split(/[aeiou]/i).reduce((res, el) => res + el + (vowels.pop() || ''), '');
};

console.log('removeVowels', removeVowels('leetcode'));
console.log('removeVowels', removeVowelsII('leetcode'));
console.log('removeVowels', removeVowelsIII('leetcode'));


const ransomNote = (ran, mag) => {
  if (ran.length > mag.length) return false
  const map = {};

  // "~~map(char) + 1" is the same as "++map[char] || 1"
  for (let char of mag) map[char] = ~~map[char]+1;
  for (let char of ran) if (!map[char]--) return false;
  return true;
}

const ransomNoteI = (ran, mag) => {
  if (ran.length > mag.length) return false;

  for (let char of mag) ran = ran.replace(char, '');
  return !ran;
}

console.log('ransomNote', ransomNote('ransom', 'magazineransom'));
console.log('ransomNote', ransomNoteI('ransom', 'magazineransom'));



const miniParser = (str) => {
  if (!str) return null;
  str = JSON.parse(str);
  console.log(typeof(str));
  function helper(str) {
    if (Array.isArray(str)) {
      let num = new NestedInteger();
      for (let item of str) {
        let ret = helper(item)
        num.add(ret);
      }
      return num;
    }
    return new NestedInteger(str);
  }
  let ret = helper(str)
  return ret;
}

// console.log('mini_parser', miniParser("[123, [456, [789]]]"));

const firstUniqueCharacter = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) ==+ str.lastIndexOf(str[i])) return i
  }
  return -1;
}

console.log('firstUniqueCharacter', firstUniqueCharacter('loveleetcode'));


const longestPath = (path) => {
  let longest = 0;
  let pathMap = { 0: 0 }; // path depth
  let lines = path.split('\n');

  for (let line of lines) {
    let name = line.replace(/\t/g, "");
    let depth = line.length - name.length;
;
    if (name.includes('.')) {
      longest = Math.max(longest, pathMap[depth] + name.length);
    } else {
      pathMap[depth + 1] = pathMap[depth] + name.length + 1;
    }
  }
  return longest;
}

console.log('longestPath', longestPath('dir\n\tsubdir1\n\tfile1.ext\n\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext'));


const findTheDifference = (str, str2) => {
  if (str.length > str2.length) return null;
  for (let char of str) str2 = str2.replace(char, "");
  return str2
}

const findTheDifferenceI = (str, str2) => {
  if (str.length > str2.length) return null;
  let map = {}
  let add = '';
  for (let char of str) map[char] = ~~map[char] + 1;
  for (let char of str2) if (!map[char]) add += char;
  return add;
}
console.log('findTheDifference', findTheDifference('abcd', 'aebcd'));
console.log('findTheDifference', findTheDifferenceI('abcd', 'aebcd'));



const isSubsequence = (str, str2) => {
  if (str.length > str2.length) return false;
  let map = {};
  let counter = 0;

  for (let char of str2) map[char] = ~~map[char] + 1;
  for (let char of str) if (map[char]) counter++;
  return str.length == counter;
}

console.log('isSubsequence', isSubsequence('abc', 'ahbgdc'));


const decodeString = (coded) => {
  const stack = [];
  for (let char of coded) {
    if (char !== ']') {
      stack.push(char);
      continue;
    }
    let cur = stack.pop();
    let str = '';

    while (cur !== '[') {
      str = cur + str;
      cur = stack.pop();
    }

    let num = '';
    cur = stack.pop();
    while (!Number.isNaN(Number(cur))) {
      num = cur + num;
      cur = stack.pop();
    }

    if (!stack.length == 0) {
    stack.push(cur);
    }
    stack.push(str.repeat(Number(num)));
  }
  return stack.join('');
}

console.log('decodeString', decodeString('3[a2[c]]'));


// Longest substring with at least K Repeating Characters
const longestSubstring = (str, num) => {
  if (str == null || str.length == 0 || str.length < num) return 0;
  let map = {};
  let res = 0;
  let set = new Set(str)
  for (let char of str) map[char] = ~~map[char]+1
  for (let char of set) if (map[char] >= num) res += map[char];
  return res;
}

console.log('longestSubstring', longestSubstring('ababbc', 2));



// Longest substring with at most k distinct characters
// Given  a string S and an integer K, return  the length of the longest
// substring of S that contains at most k distinct characters.

// Sliding window
const longestSubstringDistinct = (str, num) => {
  if (str == null || str.length == 0 || str.length < num) return 0;
  let max = 0;
  for (let numTargetDistinct = 1; numTargetDistinct <= 26; numTargetDistinct++) {
    let len = longestSubstring(str, num, numTargetDistinct);
    max = Math.max(max, len);
  }
  return max;

  function longestSubstring(str, num, numTargetDistinct) {
    let map = new Map();
    let start = 0;
    let end = 0;
    let uniqueNum = 0;
    let noLessThanNum = 0;
    let max = 0;
    while (end < str.length) {
      let cEnd = str[end];

      map.set(cEnd, (map.get(cEnd) || 0) + 1);

      if (map.get(cEnd) === 1) uniqueNum++;
      if (map.get(cEnd) === num) noLessThanNum++
      end++;

      while (uniqueNum > numTargetDistinct) {
        let cStart = str[start];
        if (map.get(cStart) === num) noLessThanNum--;
        if (map.get(cStart) === 1) uniqueNum--;
        map.set(cStart, map.get(cStart) - 1);
        start++;
      }
      if (uniqueNum === noLessThanNum) max = Math.max(max, end - start);
    }
    return max;
  }
}

console.log('LongestDistinct', longestSubstringDistinct('ababbc', 2));

const evaluateDivision = (equations, values, queries) => {}

let equations = [
  ['a', 'b'],
  ['b', 'c']
];

let values = [2.0, 3.0];

let queries = [
  ['a', 'c'],
  ['b', 'a'],
  ['a', 'e'],
  ['a', 'a'],
  ['x', 'x']
];
console.log('evaluate', evaluateDivision(equations, values, queries));




// [A - Z] => 65 - 90; [a - z] => 97 - 122;
// 1 << 3 == 2 ** 3, 2 << 3 == 2 * (2 ** 3);
// 16 >> 1 == 16 / 2, 16 >> 3 == 16 / (2 ** 3);
// ~1 = -2, ~8 = -9;
// str.replace(/[aeiou]/gi, () => match.pop());
// ~~ turns falsy values to 0
