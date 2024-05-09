const myLinkedList = function() {
  this.head = null;
}

myLinkedList.prototype.get = function(i) {
  if (i < 0 || i >= this.getLength()) return -1
  let current = this.head;

  for (let k = 0; k < i; k++) current = current.next;
  return current.data;
}

myLinkedList.prototype.addAtHead = function(data) {
  let node = new Node(data);
  node.next = this.head;
  this.head = node;
}

myLinkedList.prototype.addAtTail = function(data) {
  if (this.head == null) {
    this.addAtHead(data);
    return;
  }
  let node = new Node(data);
  let cur = this.head;
  while (cur.next !== null) cur = cur.next
  cur.next = node;
}

myLinkedList.prototype.addIndex = function(index, data) {
  if (index == 0) {
    this.addAtHead(data);
    return;
  }

  if (index === this.getLength()) {
    this.addAtTail(data);
    return;
  }

  if (index > this.getLength()) return;

  let cur = this.head;
  let node = new Node(data);
  for (let i = 0; i < index - 1; i++) cur = cur.next;
  let next = cur.next;
  cur.next = node;
  node.next = next;
};

myLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this.getLength()) return;
  if (index == 0) {
    this.head = this.head.next;
    return;
  }

  let cur = this.head;
  for (i = 0; i < index - 1; i++) cur = cur.next;
  let next = cur.next.next;
  cur.next = next;
}

myLinkedList.prototype.getLength = function() {
  let len = 0;
  for (let node = this.head; node !== null; node = node.next) len++;
  return len;
}

const myLink = new myLinkedList()
myLink.addAtHead(1);
myLink.addAtTail(3)
myLink.addIndex(1, 2)
console.log('myLink>>>>>>>>>', myLink)
myLink.deleteAtIndex(1)
console.log(myLink)
console.log(myLink.get(1))
