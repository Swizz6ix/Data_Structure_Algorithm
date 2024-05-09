const wildCardMatching = (str, path) => {
  let s = 0;
  let p = 0;
  let starIndex = -1;
  let pointer = -1;

  while (s < str.length) {
    if ((str[s] === path[p]) || path[p] === "?") {
      s++;
      p++;
    }
    else if (path[p] === "*") {
      starIndex = p;
      pointer = s;
      p++;
    }
    else if (starIndex === -1) return false;
    else {
      p = starIndex + 1;
      pointer++;
      s = pointer
    }
  }

  // if after traversing the chars there isn't a asterisk return false
  for (let idx = p; idx < path.length; idx++) {
    if (path[idx] !== "*") return false;
  }
  return true;
};

console.log('wildCard', wildCardMatching('aa', '?a'))
