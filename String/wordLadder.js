const wordLadder = (beginWord, endWord, wordList) => {
  if (!wordList.includes(endWord)) return [];
  if (beginWord === endWord) return [[beginWord]]
  wordList.push(beginWord);
  const wordToShortest = new Map();
  const shortestLen = findShortestLen(beginWord, endWord);
  const ladders = [];
  const currentLadder = [beginWord]

  function helper(currentWord, currentShortest) {
    if (currentShortest == 0) {
      ladders.push([...currentLadder]);
      return;
    }
    const neighbors = findAllNeighbors(currentWord);
    for (let neighbor of neighbors) {
      if (!wordToShortest.has(neighbor)|| wordToShortest.get(neighbor) != currentShortest - 1)
        continue;
      currentLadder.push(neighbor);
      helper(neighbor, currentShortest - 1)
      currentLadder.pop();
    }
  }

  function findShortestLen(beginWord, endWord) {
    const queue = [];
    queue.push(endWord);
    let count = 0;
    wordToShortest.set(endWord, count);
    while (queue.length !== 0) {
      count++;
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const currentFirst = queue.shift();
        
        // get all the word differ bu 1 to the currentFirst
        const neighbors = findAllNeighbors(currentFirst);
        for (let neighbor of neighbors) {
          if (wordToShortest.has(neighbor)) continue;
          wordToShortest.set(neighbor, count);
          if (neighbor === beginWord) return count;
          queue.push(neighbor);
        }
      }
    }
    return -1;
  }

  // Look fo all the words that are differ by 1 letter to the given word.
  function findAllNeighbors(word) {
    const wordToNeighbors = new Map();
    if (wordToNeighbors.has(word)) return wordToNeighbors.get(word);
    let neighbors = [];
    for (let w of wordList) {
      if (isNeighbor(word, w)) neighbors.push(w);
    }
    wordToNeighbors.set(word, neighbors);
    return neighbors;
  }

  // check for the nearest neighbor whose letters are differ by 1 letter
  function isNeighbor(w1, w2){
    if (w1.length !== w2.length) return false;
    let diff = 0;
    for (let i = 0; i < w1.length; i++) {
      if (w1[i] !== w2[i]) {
        diff++;
        if (diff > 1) return false;
      }
    }
    return diff === 1;
  }

  helper(beginWord, shortestLen);
  return ladders;
}

console.log('wordLadder', wordLadder('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));


// Breath-First-Search = BFS
const wordLadderII = (beginWord, endWord, wordList) => {
  const wordSet = new Set(wordList);
  let queue = [beginWord];
  let steps = 1;

  while (queue.length) {
    const next = [];

    // Loop over each word in the queue
    for (let word of queue) {
      // console.log(word)
      if (word == endWord) return steps;

      // Loop over each char of the word
      for (let i = 0; i < word.length; i++) {

        // and replace the char with letter from [a - z] and 97 ->
        for (let j = 0; j < 26; j++) {
          const newWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);
          // if the new word exist in the word list add it to the queue
          if (wordSet.has(newWord)) {
            next.push(newWord);
            wordSet.delete(newWord);
          }
        }
      }
    }
    queue = next;
    steps++;
  }
  return 0;
}

console.log('wordLadderII', wordLadderII('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
