const reverseBtw = (head, left, right) => {
  if (!head || left === right) return head;
  const dummy = new Node(0)
  dummy.next = head;
  let prev = dummy;

  for (let i = 0; i < left - 1; ++i) prev = prev.next;
  let  current = prev.next;
  for (let i = 0; i < right - left; ++i) {
    let nextNode = current.next;
    current.next = nextNode.next;
    nextNode.next = prev.next;
    prev.next = nextNode;
    }
    return dummy.next;
}
