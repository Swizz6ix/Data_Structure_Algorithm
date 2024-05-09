// Time O(n), space O(1)
const doubleIt = (head) => {
  if (head.data > 4) head = new ListNode(0, head);
  for (let node = head; node != null; node = node.next) {
    node.data = (node.data * 2) % 10;
    if (node.next != null && node.next.data > 4) node.data++;
  }
  return head;
}

class ListNode  {
  constructor(data, next) {
    this.data = data == undefined? 0 : data;
    this.next = next == undefined? null : next;
  }
}

const dou = [9, 0, 2];
const douArr = arr2link(dou);
console.log(doubleIt(douArr));
