class MyHashSet {
  // 1000000/32 = 31250
  constructor() {
    this.num = new Array(31251).fill(0);
  }

  // set the bit if the element is present
  add(key) {
    console.log('key', this.num[this.getIdx(key)] |= this.getMask(key))
    this.num[this.getIdx(key)] |= this.getMask(key)
  }

  // unset the bit if the key is absent
  remove(key) {
    this.num[this.getIdx(key)] &= ~this.getMask(key);
  }

  // check if the bit corresponding to the key is set or not
  contains(key) {
    return (this.num[this.getIdx(key)] & this.getMask(key)) !== 0;
  }

  // idx of null[] to which this key belongs
  // for the key = 37, it will give 1
  getIdx(key) {
    return Math.floor(key / 32);
  }

  // get mask representing the bit inside num[idx] 
  // for the key = 37, it will give
  getMask(key) {
    key % 32;
    console.log('jor', 1 << key)
    return 1 << key;
  }
}

const hash = new MyHashSet()

hash.add(1)
hash.add(2);
hash.contains(1);
hash.contains(3);
hash.add(2)
hash.remove(2)
hash.contains(2)
console.log('hash', hash)
