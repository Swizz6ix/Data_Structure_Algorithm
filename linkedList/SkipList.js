class SkipNode {
  constructor(data, next, down) {
    this.data = data;
    this.next = next;
    this.down = down;
  }
}

class SkipList {
  constructor() {
    this.head = new SkipNode(-1, null, null);
    this.rand = Math.random();
  }

  search(target) {
    let cur = this.head;
    while (cur) {
      while (cur.next && cur.next.data < target) cur = cur.next;
      if (cur.next && cur.next.data === target) return true;
      cur = cur.down;
    }
    return false;
  }

  add(num) {
    let stack = [];
    let cur = this.head;
    while (cur) {
      while (cur.next && cur.next.data < num) cur = cur.next;
      stack.push(cur);
      cur = cur.down;
    }
    let insert = true;
    let down = null;
    while (insert && stack.length > 0) {
      cur = stack.pop();
      cur.next = new SkipNode(num, cur.next, down)
      down = cur.next;
      insert = this.rand < 0.5;
    }
    if (insert) {
      this.head = new SkipNode(-1, null, this.head);
    }
  }

  erase(num) {
    let cur = this.head;
    let found = false;
    while (cur) {
      while (cur.next && cur.next.data < num) cur = cur.next;
      if (cur.next && cur.next.data === num) {
        found = true;
        cur.next = cur.next.next;
      }
      cur = cur.down;
    }
    return found;
  }
}

const skip = new SkipList()
skip.add(1);
skip.add(2);
skip.add(3);
console.log('erase', skip.erase(1))
console.log('search', skip.search(1))
console.log('skp', skip)
