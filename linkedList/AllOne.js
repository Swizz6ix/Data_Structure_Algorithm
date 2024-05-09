class Bucket {
  constructor (count) {
    this.count = count;
    this.keySet = new Set();
    this.next = null;
    this.prev = null;
  }
}

class AllOne {
  constructor () {
    this.head = new Bucket(Number.MIN_SAFE_INTEGER);
    this.tail = new Bucket(Number.MAX_SAFE_INTEGER);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.countBucketMap = new Map();
    this.keyCountMap = new Map();
  }
  inc(key) {
    // console.log('joy', this.keyCountMap)
    if (this.keyCountMap.has(key)) {
      this.changeKey(key, 1);
    } else {
      this.keyCountMap.set(key, 1);
      if (this.head.next.count !== 1) {
        this.addBucketAfter(new Bucket(1), this.head);
      }
      this.head.next.keySet.add(key);
      this.countBucketMap.set(1, this.head.next);
    }
  }

  dec(key) {
    if (this.keyCountMap.has(key)) {
      let count = this.keyCountMap.get(key);
      if (count === 1) {
        this.keyCountMap.delete(key);
        this.removeKeyFromBucket(this.countBucketMap.get(count), key);
      } else {
        this.changeKey(key, -1);
      }
    }
  }

  getMaxKey() {
    return this.tail.prev === this.head ? "" : Array.from(this.tail.prev.keySet)[0];
  }

  getMinKey() {
    return this.head.next === this.tail ? "" : Array.from(this.head.next.keySet)[0];
  }

  changeKey(key, offset) {
    let count = this.keyCountMap.get(key);
    this.keyCountMap.set(key, count + offset);
    let currentBucket = this.countBucketMap.get(count);
    let newBucket;
    if (this.countBucketMap.has(count + offset)) {
      newBucket = this.countBucketMap.get(count);
    } else {
      newBucket = new Bucket(count + offset);
      this.countBucketMap.set(count + offset, newBucket);
      this.addBucketAfter(newBucket, offset === 1 ? currentBucket : currentBucket.prev); 
    };
    newBucket.keySet.add(key);
    this.removeKeyFromBucket(currentBucket, key);
  }

  addBucketAfter(newBucket, preBucket) {
    newBucket.prev = preBucket;
    newBucket.next = preBucket.next;
    preBucket.next.prev = newBucket;
    preBucket.next = newBucket;
  };

  removeBucketFromList(bucket) {
    bucket.prev.next = bucket.next;
    bucket.next.prev = bucket.prev;
    bucket.next = null;
    bucket.prev = null;
  };

  removeKeyFromBucket(bucket, key) {
    bucket.keySet.delete(key);
    if (bucket.keySet.size === 0) {
      this.removeBucketFromList(bucket);
      this.countBucketMap.delete(bucket.count);
    };
  };
}

const al = new AllOne();
al.inc("hello");
al.inc("hello");
console.log(al.getMaxKey())
console.log(al.getMinKey());
al.inc("leet");
console.log(al.getMaxKey())
console.log(al.getMinKey())
