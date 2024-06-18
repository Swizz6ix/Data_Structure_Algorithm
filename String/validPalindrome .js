const validPalindrome = (str) => {
  str = str.toLowerCase().replace(/[^a-z0-9]/gi, ''); // replace(/[_\W]/g, '') is also valid
  console.log(str)
  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if (str[i] !== str[j]) return false;
  }
  return true;
}

const validPalindromeII = (str) => {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return str.split('').slice(0, Math.floor(str.length / 2)).every((letter, idx) => letter === str[str.length - 1 - idx])
};

console.log('palindrome', validPalindrome('A man, a plan, a canal: Panama'));
console.log('palindrome', validPalindromeII('A man, a plan, a canal: Panama'));
