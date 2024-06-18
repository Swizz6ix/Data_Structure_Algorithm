const bullsAndCows = (secret, guess) => {
  let bulls = 0;
  let cows = 0;
  let num = new Array(10).fill(0);

  for (let i = 0; i < secret.length; i++) {
    if (secret.charCodeAt(i) == guess.charCodeAt(i)) bulls++;
    else {
      if (num[secret.charAt(i) - '0']++ < 0) cows++;
      if (num[secret.charAt(i) - '0']-- > 0) cows++;
    }
  }
  return bulls + 'A' + cows + 'B';
}

const bullsAndCowsII = (secret, guess) => {
  let bull = 0;
  let cow = 0;
  const map = {};

  for (let i = 0; i < secret.length; i++) {
    if (secret.charAt(i) == guess.charAt(i)) bull++;
    else {
      if (map[secret.charAt(i)] < 0) cow++;
      if (map[guess.charAt(i)] > 0) cow++;
      map[secret.charAt(i)] = parseInt(map[secret.charAt(i)] || '0') + 1;
      map[guess.charAt(i)] = parseInt(map[guess.charAt(i)] || '0') - 1;
    }
  }
  return `${bull}A${cow}B`
}

console.log('bulls_cows', bullsAndCows('1807', '7810'));
console.log('bulls_cows', bullsAndCowsII('1807', '7810'));
