/**
 * 
 * @param {string} str 
 * @returns {number}
 */
const lengthOfLastWord = (str) => {
  let trimSpace = str.trim();
  let spt = trimSpace.split(' ')
  return spt[spt.length-1].length
}

console.log('last', lengthOfLastWord('  fly  me    to    the   Moon  '));