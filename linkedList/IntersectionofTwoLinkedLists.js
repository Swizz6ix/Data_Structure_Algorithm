const intersection = (headA, headB) => {
  if (headA == null || headB == null) return null;
  let a = headA;
  let b = headB;

  while (a != b) {
    a = a == null? headB : a.next;
    b = b == null? headA : b.next;
  }
  return a;
}

arr = [4, 1, 8, 4, 5];
let arr2 = [5, 6, 1, 8, 4, 5];
let lL1 = new Node(4)
lL1.next = new Node(1)
lL1.next.next = new Node(8)
lL1.next.next.next = new Node(4);
lL1.next.next.next.next = new Node(5)
let lL2 = new Node(5);
lL2.next = new Node(6);
lL2.next.next = new Node(1);
lL2.next.next.next = lL1.next.next
const intersect = intersection(lL1, lL2);
// ptr(intersect);
