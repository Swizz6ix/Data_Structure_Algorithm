const deleteNode = (node) => {
  node.data = node.next.data;
  node.next = node.next.next;
};