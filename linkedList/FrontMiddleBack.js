class DoubleNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class FrontMiddleBack {
  constructor() {
    this.dummyStart = new DoubleNode(0);
    this.dummyTail = new DoubleNode(0);
    this.dummyStart.next = this.dummyTail;
    this.dummyTail.prev = this.dummyStart;
    this.mid = null;
    this.size = 0;
  }

  pushFront(data) {
    let frontNode = new DoubleNode(data);
    frontNode.next = this.dummyStart.next;
    frontNode.prev = this.dummyStart;
    this.dummyStart.next.prev = frontNode;
    this.dummyStart.next = frontNode;
    this.size++;
    if (this.size == 1) return this.mid = frontNode;
    else {
      if (this.size % 2 == 0) {
        return this.mid = this.mid.prev;
      }
    }
  }

  pushMiddle(data) {
    if (this.size == 0) {
      let midNode = new DoubleNode(data);
      midNode.prev = this.dummyStart;
      midNode.next = this.dummyTail;
      this.dummyStart.next = midNode;
      this.dummyTail.prev = midNode;
      this.mid = midNode;
      this.size++;
      return;
    }
    if (this.size % 2 == 0) this.pushNext(data);
    else this.pushPrev(data);
    this.size++;
  }

  pushNext(data) {
    let midNode = new DoubleNode(data);
    midNode.next = this.mid.next;
    midNode.prev = this.mid;
    this.mid.next.prev = midNode;
    this.mid.next = midNode;
    this.mid = midNode;
  }

  pushPrev(data) {
    let midNode = new DoubleNode(data);
    midNode.next = this.mid;
    midNode.prev = this.mid.prev;
    midNode.prev.next = midNode;
    this.mid.prev = midNode;
    this.mid = midNode;
  }

  pushBack(data) {
    let backNode = new DoubleNode(data);
    backNode.prev = this.dummyTail.prev;
    backNode.next = this.dummyTail;
    this.dummyTail.prev.next = backNode;
    this.dummyTail.prev = backNode;
    this.size++;
    if (this.size == 1) this.mid = backNode;
    else if (this.size % 2 != 0) this.mid = this.mid.next
  }

  popFront() {
    if (this.size > 0) {
      let next = this.dummyStart.next;
      this.removeNode(next);
      this.size--;
      if (this.size % 2 != 0) return this.mid = this.mid.next;
      return next.data
    }
    return -1
  }
  removeNode(node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
  }

  popMiddle() {
    if (this.size > 0) {
      let val = this.mid.data;
      this.mid.next.prev = this.mid.prev;
      this.mid.prev.next = this.mid.next;
      if (this.size % 2 == 0) this.mid = this.mid.next;
      else this.mid = this.mid.prev;
      this.size--;
      return val;
    }
    return -1;
  }

  popBack() {
    if (this.size > 0) {
      let prev = this.dummyTail.prev;
      this.removeNode(prev);
      this.size--;
      if (this.size % 2 == 0) this.mid = this.mid.prev;
      return prev.data
    }
    return -1;
  }
}

const frnt = new FrontMiddleBack()
frnt.pushFront(1)
// frnt.pushBack(2);
// frnt.pushMiddle(3);
frnt.pushFront(6);
// frnt.pushMiddle(4);
// frnt.popFront();
// frnt.popMiddle();
// frnt.popMiddle()
// frnt.popBack()
// frnt.popFront();
console.log('front', frnt)



class FrontMiddleBackII {
  constructor() {
    this.A = new deque();
    this.B = new deque();
  }

  pushFront(data) {
    this.A.insertFront(data);
    this.balance();
  }

  pushMiddle(data) {
    if (this.A.size() > this.B.size()) {
      this.B.insertFront(this.A.removeBack());
    }
    this.A.insertBack(data);
  }

  pushBack(data) {
    this.B.insertBack(data);
    this.balance();
  }

  popFront() {
    let val = this.A.size() > 0 ? this.A.removeFront() : - 1;
    this.balance()
    return val;
  }

  popMiddle() {
    let val = this.A.size() > 0 ? this.A.removeBack() : - 1;
    this.balance();
    return val;
  }

  popBack() {
    let val = this.B.size() > 0 ? this.B.removeBack() : this.A.size() > 0 ? this.A.removeBack() : - 1;
    this.balance();
    return val;
  }

  AisEmpty() {
    return this.A.isEmpty();
  }

  BisEmpty() {
    return this.B.isEmpty();
  }

  // keep A.size() >= B.size()
  balance() {
    if (this.A.size() > this.B.size() + 1) {
      this.B.insertFront(this.A.removeBack());
    }
    if (this.A.size() < this.B.size()) {
      this.A.insertBack(this.B.removeFront());
    }
  }
}

class deque {
  constructor() {
    this.items = [];
  }

  insertFront(data) {
    return this.items.unshift(data);
  }

  insertBack(data){
    return this.items.push(data);
  }

  removeFront() {
    return this.items.shift()
  }

  removeBack() {
    return this.items.pop();
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.size() === 0 ? true : false;
  }
}

const midbk = new FrontMiddleBackII();
midbk.pushFront(1);
midbk.pushBack(2);
midbk.pushMiddle(3);
midbk.pushMiddle(4);
// midbk.pushMiddle(5);
midbk.popFront();
midbk.popMiddle();
midbk.popMiddle();
midbk.popBack();
midbk.popFront()
console.log('midbk', midbk);

