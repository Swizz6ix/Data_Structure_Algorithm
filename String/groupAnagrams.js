const groupAnagrams = (strs) => {
  // Create a Map to store anagrams where keys are s3orted and values are arrays of anagrams
  const anagrams = new Map();

  // Iterate through each word in the input array.
  for (const word of strs) {
    // Sort the characters of the word to form a key for the anagram map
    const sortedWord = sortWord(word);

    // If the sorted word is not present in the Map, initialize an empty array for it
    if (!anagrams.has(sortedWord)) anagrams.set(sortedWord, []);

    // Push the original word to the array of anagrams corresponding to its sorted version
    anagrams.get(sortedWord).push(word);
  }

  // Return an array of arrays containing groups of anagrams
  return Array.from(anagrams.values());
}

// Helper function to sort characters of a string
const sortWord = (word) => {
  // Convert the string to an array of characters, sort them, and join them back into a string.
  return [...word].sort().join('');
}

console.log('anagrams', groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
