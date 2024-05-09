const connectII = (root) => {
  let head = root;
  let tail = new NodeTree(0);
  let dummy = tail;
  while (root) {
    tail.next = root.left;
    if (tail.next != null) tail = tail.next;
    tail.next = root.right
    if (tail.next != null) tail = tail.next;
    root = root.next;
    if (!root) {
      tail = dummy;
      root = dummy.next;
    }
  }
  // console.log('seed', head.left.next)
  return head;
}