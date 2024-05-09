class MyCircularDeque {
  constructor(k) {
    this.buffer = new Array(k).fill(0);
    this.count = 0;
    this.k = k;
    this.front = k - 1;
    this.rear = 0;
  }

  insertFront(value) {
    if (this.count == this.k) return false;
    this.buffer[this.front] = value;
    this.front = (this.front - 1 + this.k) % this.k;
    this.count++;
    return true;
  }

  insertLast(value) {
    if (this.count === this.k) return false;
    this.buffer[this.rear] = value;
    this.rear = (this.rear + 1) % this.k;
    this.count++;
    return true
  }

  deleteFront() {
    if (this.count === 0) return false;
    this.front = (this.front + 1) % this.k;
    this.count--;
    return true;
  }

  deleteLast() {
    if (this.count === 0) return false;
    this.rear = (this.rear - 1 + this.k) % this.k;
    this.count--;
    return true;
  }

  getFront() {
    if (this.count === 0) return -1;
    return this.buffer[(this.front + 1) % this.k];
  }

  getRear() {
    if (this.count === 0) return -1;
    return this.buffer[(this.rear - 1 + this.k) % this.k];
  }

  isEmpty() {
    return this.count === 0;
  }

  isFull() {
    return this.count === this.k;
  }
}

const myDQ = new MyCircularDeque(3);
myDQ.insertLast(1);
myDQ.insertLast(2);
myDQ.insertFront(3);
myDQ.deleteFront();
myDQ.insertFront(4);
console.log('rrr', myDQ.getRear())
console.log('front', myDQ.getFront())
console.log(myDQ)
