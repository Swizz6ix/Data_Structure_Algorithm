const deleteMiddleNode = (head) => {
  if (head.next === null) return head
  let fast = head.next.next;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next;
  }
  slow.next = slow.next.next
  return head;
}

let delMd = [1, 2, 3, 4, 7, 1, 2, 6];
let delArr = arr2link(delMd);
console.log('del', deleteMiddleNode(delArr))
