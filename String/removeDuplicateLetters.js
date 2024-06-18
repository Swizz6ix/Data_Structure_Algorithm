class Stack {
    constructor() {
      this.stack = [];
    }

    push(item) {
      return this.stack.push(item);
    }

    pop() {
      return this.stack.pop();
    }

    isEmpty() {
      return this.stack.length === 0;
    }

    peek() {
      return this.stack[this.stack.length - 1];
    }

    getLength() {
      return this.stack.length;
    }
  }

const removeDuplicateLetters = (str) => {
  let lastIndex = new Array(26).fill(0);
  let seen = new Array(26).fill(false); // Keep track of seen letter
  let stack = new Stack();

  // Track the last index of character presence.
  for (let i = 0; i < str.length; i++) lastIndex[str.charCodeAt(i) - 'a'.charCodeAt(0)] = i;

  // Add and remove from stack
  for (let i = 0; i < str.length; i++) {
    let current = str.charCodeAt(i) - 'a'.charCodeAt(0);

    if (seen[current]) continue;
    while (!stack.isEmpty() && stack.peek() > current && i < lastIndex[stack.peek()]) {
      seen[stack.pop()] = false // pop out and mark seen
    }
    stack.push(current); // add into stack;
    seen[current] = true; // mark as seen
  }
  let word = '';
  while (!stack.isEmpty()) word = String.fromCharCode(stack.pop() + 'a'.charCodeAt(0)) + word;
  return word
}

console.log('removeDuplicateLetters', removeDuplicateLetters('cbacdcbc'))
