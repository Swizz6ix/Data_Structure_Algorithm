class Solution {
  constructor (data) {
    this.head = data;
    this.next = null;
  }
  getRandom() {
    let scope = 1;
    let randVal = this.head.data;
    let current = this.head;

    while (current) {
      if (Math.random() < 1 / scope) randVal = current.data;
      current = current.next;
      scope += 1;
    }
    return randVal;
  }
}

const hd = [1, 2, 3, 4, 5];
const arrLink = arr2link(hd)
const obj = new Solution(arrLink);
console.log(obj.getRandom());
console.log(obj.getRandom());
