// Time O(n), space O(1);
const removeNode = (head) => {
  if (head == null) return null;
  head.next = removeNode(head.next);
  return head.next != null && head.data < head.next.data ? head.next : head
}

const rm = [5, 2, 13, 3, 8];
const rmArr = arr2link(rm);
console.log(removeNode(rmArr));