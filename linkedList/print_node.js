function ptr(node) {
  while (node != null) {
    console.log("node -->", node.data);
    node = node.next;
  }
}
