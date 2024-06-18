const minimumWindowSubstring = (str, tr) => {
  if (!str || !tr) return "";

  // Initialize maps to store character frequencies
  const dicTr = new Map();
  const windowCounts = new Map();

  // Populate dicT with character frequencies from string 'tr'
  for (const char of tr) {
    dicTr.set(char, (dicTr.get(char) || 0) + 1);
  }

  let required = dicTr.size;
  let left = 0;
  let right = 0;
  let formed = 0;

  // Initialize variable to store the minimum window substring
  let ans = [-1, 0, 0];
  while (right < str.length) {
    const charRight = str.charAt(right);

    // Update windowCounts with the current character at the right pointer
    windowCounts.set(charRight, (windowCounts.get(charRight) || 0) + 1);

    // Check if the current character forms a required character in the window
    if (dicTr.has(charRight) && windowCounts.get(charRight) === dicTr.get(charRight)) formed++;

    // Move the left pointer to minimize the window size
    while (left <= right && formed === required) {
      const charLeft = str.charAt(left);

      // Update ans if the current window is smaller.
      if (ans[0] === -1 || right - left < ans[0]) {
        ans[0] = right - left + 1;
        ans[1] = left;
        ans[2] = right;
      }

      // Update windowCounts and formed by moving the left pointer
      windowCounts.set(charLeft, windowCounts.get(charLeft) - 1);
      if (dicTr.has(charLeft) && windowCounts.get(charLeft) < dicTr.get(charLeft)) formed--;
      left++;
    }

    // Move the right pointer to expand the window
    right++;
  }

  // Return the minimum window substring
  return ans[0] === -1 ? "" : str.substring(ans[1], ans[2] + 1);
}
console.log('minWindow', minimumWindowSubstring('ADOBECODEBANC', 'ABC'));
