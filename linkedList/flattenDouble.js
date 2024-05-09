const flattenDouble = (head) => {
  if (head == null) return head;
  let p = head;
  while (p != null) {

    // if no child proceed
    if (p.child == null) {
      p = p.next;
      continue;
    }

    // If there's a child find the tail of the child and link it the pointer.next
    let temp = p.child;
    
    // Find the the tail of the child
    while (temp.next != null) temp = temp.next;

    // connect the tail to pointer.next, if it not null;
    temp.next = p.next;

    if (p.next != null) p.next.prev = temp;

    // connect p with p.child and remove p.child
    p.next = p.child;
    p.child.prev = p;
    p.child = null;
  }
  return head;
}

class NodeDoubleChild {
  constructor (data) {
    this.data = data;
    this.next = null;
    this.prev = null;
    this.child = null;
  }
}

const front = new NodeDoubleChild(1);
front.next = new NodeDoubleChild(2)
front.next.prev = front;
front.next.next = new NodeDoubleChild(3);
front.next.next.prev = front.next;
front.next.next.next = new NodeDoubleChild(4)
front.next.next.next.prev = front.next.next;
front.next.next.next.next = new NodeDoubleChild(5);
front.next.next.next.next.prev = front.next.next.next
front.next.next.next.next.next = new NodeDoubleChild(6);
front.next.next.next.next.next.prev = front.next.next.next.next

front.next.next.child = new NodeDoubleChild(7);
front.next.next.child.next = new NodeDoubleChild(8);
front.next.next.child.next.prev = front.next.next.child
front.next.next.child.next.next = new NodeDoubleChild(9);
front.next.next.child.next.next.prev = front.next.next.child.next
front.next.next.child.next.next.next = new NodeDoubleChild(10);
front.next.next.child.next.next.next.prev = front.next.next.child.next.next;

front.next.next.child.next.child = new NodeDoubleChild(11);
front.next.next.child.next.child.next = new NodeDoubleChild(12);
front.next.next.child.next.child.next.prev = front.next.next.child.next.child


// console.log('head', flattenDouble(front))
const ft = flattenDouble(front)

const printDouble = (head) => {
  while (head != null) {
    console.log('node', head.data);
    console.log('prev', head.prev?.data)
    head = head.next;
  }
}
printDouble(ft)
