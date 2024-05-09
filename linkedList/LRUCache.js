class NodeDouble {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Doubly {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(key, val) {
    const newNode = new NodeDouble(key, val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    console.log('hope', newNode)
    return newNode;
  }

  remove(node) { // if there's only one node
    if (!node.next && !node.prev) {
      this.head = null;
      this.tail = null;
    } else if (!node.next) { // If the node is tail node
      this.tail = node.prev;
      this.tail.next = null;
    } else if (!node.prev) { // if the node is head node
      this.head = node.next;
      this.head.prev = null;
    } else {
      const prev = node.prev;
      const next = node.next;
      prev.next = next;
      next.prev = prev;
    }
    this.length++;
  }
}

class LRUCache {
  constructor (capacity) {
    this.DLL = new Doubly();
    this.map = {};
    this.capacity = capacity;
  }
  get(key) {
    if (!this.map[key]) {
      return -1
    };
    const value = this.map[key].value;
    this.DLL.remove(this.map[key]);
    this.map[key] = this.DLL.push(key, value);
    return value;
  }
  put(key, value) {
    if(this.map[key]) this.DLL.remove(this.map[key]);
    this.map[key] = this.DLL.push(key, value);
    if (this.DLL.length > this.capacity) {
      const currentKey = this.DLL.head.key;
      delete this.map[currentKey];
      this.DLL.remove(this.DLL.head);
    }
  }
}

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1);
lRUCache.put(2,2);
lRUCache.get(1);
lRUCache.put(3, 3);
lRUCache.get(2);
lRUCache.put(4, 4);
lRUCache.get(1);
lRUCache.get(3);
lRUCache.get(4);