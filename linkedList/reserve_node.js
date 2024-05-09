let head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  };
};

function reverse(node) {
  let prev = null;
  let current = node;
  let next = null;
  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  node = prev;
  return node;
}

head = new Node(85);
head.next = new Node(30);
head.next.next = new Node(20);
head.next.next.next = new Node(10);
head.next.next.next.next = new Node(5);
ptr(head);
const pt = reverse(head);
ptr(pt);

// Method 2
const reverse = (head, prev = null) => {
  return head ? reverse(head.next, (head.next = prev, head)):prev;
}

arr = [1, 2, 3, 4, 5, 6]
list = arr2link(arr)
const rev = reverse(list)
// ptr(rev)

