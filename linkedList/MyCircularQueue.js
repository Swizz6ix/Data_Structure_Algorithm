class MyCircularQueue {
  constructor(k) {
    this.arr = new Array(k);
    this.front = 0;
    this.rear = -1;
    this.len = 0;
  }

  enQueue(data) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.arr.length;
      this.arr[this.rear] = data;
      this.len++;
      return true;
    } else return false;
  }

  deQueue() {
    if (!this.isEmpty()) {
      this.front = (this.front + 1) % this.arr.length;
      this.len--;
      return true;
    } else return false;
  }

  front() {
    return this.isEmpty() ? -1 : this.arr[this.front];
  }

  Rear() {
    return this.isEmpty() ? -1 : this.arr[this.rear];
  }

  isEmpty() {
    return this.len === 0
  }

  isFull() {
    return this.len === this.arr.length;
  }
}

const MyCir = new MyCircularQueue(3);
MyCir.enQueue(1);
MyCir.enQueue(2);
MyCir.enQueue(3);
MyCir.deQueue()
MyCir.enQueue(4);
MyCir.Rear();
