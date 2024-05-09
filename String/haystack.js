// Built-in function
const hay = (haystack, needle) => {
  return haystack.indexOf(needle);
}

// Regex
const hay2 = (haystack, needle) => {
  const regrex = new RegExp(needle);
  return haystack.search(regrex);
}

/**
 * Brute Force time (O(N*M)) Space - O(1)
 * Loop through the haystack, for each character loop through the needle and compare
 * if they are all equal, return the index of the haystack
 * 
 * @param {string} haystack 
 * @param {string} needle 
 * @returns {number}
 */
const hay3 = (haystack, needle) => {
  if (!needle) return 0;
  for (let i = 0; i < haystack.length; i++) {
    let isMatch = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) return i
  }
  return -1;
}

/**
 * Loop through haystack and compare substrings - Time O(N), Space O(1)
 * Loop through the haystack. For each character, loop through the needle and compare
 * If they are all equal, return the index of the haystack
 * 
 * @param {string} haystack 
 * @param {string} needle 
 * @returns {number}
 */
const hay4 = (haystack, needle) => {
  let hayLen = haystack.length;
  let nedLen = needle.length;
  if (hayLen < nedLen) return -1;

  for (let i = 0; i <= hayLen - nedLen; i++) {
    if (haystack.substring(i, nedLen) === needle) return i;
  }
  return -1;
}

/**
 * Tracking Loop Search Time: O(N) Space: O(1)
 * Loop through haystack and compare characters one by one
 * Loop through the haystack string and compare each character of the 
 * substring to the corresponding character in the haystack, 
 * if all character match, the index is returned. 
 * if the substring is not found, return -1.
 * 
 * @param {string} haystack 
 * @param {string} needle 
 * @returns {number}
 */
const hay5 = (haystack, needle) => {
  let hayLen = haystack.length;
  let nedLen = needle.length;
  if (hayLen < nedLen) return -1;

  let matchingIndex = 0;
  for (let i = 0; i < hayLen; i++) {
    if (needle[i - matchingIndex] !== haystack[i]) {
      i = matchingIndex;
      matchingIndex = i + 1;
    } else if (i - matchingIndex == nedLen - 1) return matchingIndex;
  }
  return -1;
}


/**
 * LPS - Longest Prefix Suffix / Prefix table - Time O(N + M)
 * Process the needle to form an array to store the occurs before
 * Loop through the haystack and compare with needle
 * if misMatch occurs, move the haystack index by the occurs before array
 * 
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const hay6 = (haystack, needle) => {
  let hayLen = haystack.length;
  let nedLen = needle.length;
  let i = 0;
  let j = -1;

  const lps = [-1];
  while (i < nedLen - 1) {
    if (j == -1 || needle[i] === needle[j]) {
      i++;
      j++;
      lps[i] = j;
    } else j = lps[j];
  }

  i = 0
  j = 0;
  while (i < hayLen && j < nedLen) {
    if (haystack[i] == needle[j]) {
      i++;
      j++;
    } else {
      j = lps[j];
      if (j < 0) {
        i++;
        j++;
      }
    }
  }
  if (j === nedLen) return i - j;
  return -1;
}

let haystack = 'sadbutsad'
let needle = 'sad';

console.log('hay1', hay(haystack, needle));
console.log('hay2', hay2(haystack, needle));
console.log('hay3', hay3(haystack, needle));
console.log('hay4', hay4(haystack, needle));
console.log('hay5', hay5(haystack, needle));
console.log('hay6', hay6(haystack, needle));