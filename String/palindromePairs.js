// Time complexity: O(N * M^2). where N is the length of the words 
// and M is the average length of the words in words. Space Complexity: O(N) for map
const palindromePairs = (words) => {
  let map = new Map();
  let ans = [];
  for (let i = 0; i < words.length; i++) map.set(words[i], i); // storing each word in a map
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "") {
      for (let j = 0; j < words.length; j++){
        if (isPal(words[j]) && j !== i) ans.push([i, j], [j, i]);
      }
    continue;
    }
    let bw = words[i].split('').reverse().join('');
    let res = map.get(bw);

    // If the opposite of the word exist, that means it is a palindrome
    // A full word will match on either side with its backwards version
    // Eg the word 'abc' wil  match 'cba'
    if (res != undefined && res != i) ans.push([i, res]);

    for (let j = 1; j < bw.length; j++) {
      if (isPal(bw, 0, j - 1)) {
        let res = map.get(bw.slice(j));
        if (res != undefined) ans.push([i, res])
      }

      // A partial word will match its backward version on the opposite side
      // if the leftover portion of the word is a palindrome.
      // Eg the word 'abcddd' will match with the word 'cba' because 'abc' == 'cba' and 'ddd' is a palindrome
      if (isPal(bw, j)) {
        let res = map.get(bw.slice(0, j))
        if (res != undefined) ans.push([res, i])
      }
    }
  }
  return ans;

  // This function checks if a word is a palindrome.
  function isPal(word, i = 0, j = word.length - 1) {
    while (i < j) if (word[i++] != word[j--]) return false;
    return true;
  }
}

console.log('PalindromePairs', palindromePairs(['abcd', 'dcba', 'lls', 's', 'sssll']));
