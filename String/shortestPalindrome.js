const shortestPalindrome = (str) => {
  let prefix = '';
  let pos, head, tail;

  for (pos = head = tail = Math.floor(str.length / 2); pos > 0; head = tail = --pos) {
    // Checking for similarities with the immediate neighbors
    while (head != 0 && str[head - 1] == str[head]) {
      head--;
      pos--;
    }

    // console.log(tail != str.length - 1 && str[tail + 1] == str[tail], str[head] != str[tail])
    while (tail != str.length - 1 && str[tail + 1] == str[tail]) tail++;
    let isSame = true;
    while (head >= 0) {
      if (str[head] != str[tail]) {
        isSame = false;
        break;
      }
      head--;
      tail++;
    }
    if (isSame) break;
  }
  for (let k = str.length - 1; k >= tail && k != 0; k--) prefix += str[k];
  return prefix + str;
}

console.log('shortest', shortestPalindrome('abcd'));
