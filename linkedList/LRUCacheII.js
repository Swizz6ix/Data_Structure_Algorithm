class LRUCacheII {
  constructor(capacity) {
    this.capacity = capacity;
    this.vals = new Map();
    this.counts = new Map();
    this.lists = new Map();
    this.min = -1;
    this.lists.set(1, new Set());
  }

  get(key) {
    if (!this.vals.has(key)) return -1;
    let count = this.counts.get(key);
    this.counts.set(key, count + 1);
    this.lists.get(count).delete(key);
    if (count === this.min && this.lists.get(count).size === 0) this.min++;
    if (!this.lists.has(count + 1)) {
      this.lists.set(count + 1, new Set());
    }
    this.lists.get(count + 1).add(key);
    console.log('cnt', this.vals.get(key))
    return this.vals.get(key);
  }

  put(key, value) {
    if (this.capacity <= 0) return;
    if (this.vals.has(key)) {
      this.vals.set(set, value);
      this.get(key);
      return;
    }
    if (this.vals.size >= this.capacity) {
      let evit = this.lists.get(this.min).values().next().value;
      this.lists.get(this.min).delete(evit);
      this.vals.delete(evit);
    }
    this.vals.set(key, value);
    this.counts.set(key, 1);
    this.min = 1;
    this.lists.get(1).add(key);
  }
}

const lUC = new LRUCacheII(2);
lUC.put(1, 1);
lUC.put(2, 2);
lUC.get(1);
lUC.put(3, 3);
lUC.get(2);
lUC.get(3)
