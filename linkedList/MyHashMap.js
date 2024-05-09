class HashList {
  constructor(key, val, next) {
    this.key = key;
    this.val = val;
    this.next = next;
  }
}

class HashMap {
  constructor() {
    this.size = 19997;
    this.mult = 12582917;
    this.data = new Array(this.size);
  }

  hash(key) {
    return key * this.mult % this.size;
  }

  put(key, val) {
    this.remove(key);
    let hash = this.hash(key);
    let node = new HashList(key, val, this.data[hash]);
    this.data[hash] = node;
  }

  get(key) {
    let hash = this.hash(key);
    let node = this.data[hash];
    for (; node; node = node.next) if (node.key === key) return node.val;
    return -1;
  }

  remove(key) {
    let hash = this.hash(key);
    let node = this.data[hash];
    if (!node) return;
    if (node.key === key) this.data[hash] = node.next
    else for (; node.next; node = node.next)
      if (node.next.key === key) {
        node.next = node.next.next;
        return;
      }
  }
}

// W/ Array
class MyHashMap {
  constructor() {
    this.data = new Array(1000001);
  }

  put(key, val) {
    this.data[key] = val
  }

  get(key) {
    let val = this.data[key];
    return val !== undefined ? val : -1;
  }

  remove(key) {
    delete this.data[key];
  }
}
