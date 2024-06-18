const JustifyText = (words, maxWidth) => {
  let result = [];
  let line = [];
  let lineLength = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (lineLength === 0 && word.length <= maxWidth) {
      line.push(word);
      lineLength += word.length;
    } else if (lineLength + word.length + 1 <= maxWidth) {
      line.push(word);
      lineLength += (word.length + 1);
    } else {
      line = addMinSpace(line);
      let remainingSpace = maxWidth - lineLength;
      line = distributeSpace(line, remainingSpace);
      
      let temp = line.join('');
      if (line.length === 1) temp = addRemainingSpace(temp, remainingSpace);
      result.push(temp);
      
      line = [];
      lineLength = 0;
      line.push(word);
      
      lineLength += word.length;
    }
  }
  line = addMinSpace(line);
  let temp = line.join('');
  let remainingSpace = maxWidth - lineLength;
  temp = addRemainingSpace(temp, remainingSpace)
  result.push(temp);
  return result;
}

// Add space to the words in the array aside from the last word.
function addMinSpace(line) {
  for (let i = 0; i < line.length - 1; i++) line[i] += " ";
  return line
}

// Add the remaining space at the end of each line, so the lines can line up properly.
function addRemainingSpace(line, space) {
  while (space > 0) {
    line += " ";
    space--;
  }
  return line;
}

// distribute the remaining spaces
function distributeSpace(arr, spaces) {
  while (spaces > 0 && arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (spaces <= 0) break;
      arr[i] += " ";
      spaces--;
    }
    return arr;
  }
}

console.log('Justify', JustifyText(["This", "is", "an", "example", "of", "text", "justification."], 16));
