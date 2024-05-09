const longestPalindrome = (str) => {
  let maxLen = 0; // The length of the longest Palindrome
  let lo = 0; // tracks the starting index of longest Palindrome
  let len = str.length;
  const extendPalindrome = (str, j, k) => {

    // While we have a palindrome, "extend" the length of the string bring
    // checked by decreasing the value of hte beginning char index "j"
    // and increasing the value of ending char index "k"
  while (j >= 0 && k < str.length && str.charAt(j) === str.charAt(k)) {
    j--;
    k++;
  }
  if (maxLen < k - j - 1) { // Check if the length of the current palindrome is greater than the previous palindrome
    lo = j + 1; // Store the beginning index of the palindrome
    maxLen = k - j - 1; // how long the string is
  }
}

  if (len < 2) return str;

  for (let i = 0; i < len - 1; i++) {
    (extendPalindrome(str, i, i)) // assume odd length, try to extend Palindrome as possible eg "aba"
    extendPalindrome(str, i, i + 1) // assume even length, eg "abba"
  }
  return str.substring(lo, lo + maxLen); //return the part of the input string starting at "lo" index, length of maxLen
}


console.log('palindrome', longestPalindrome('babad'));
