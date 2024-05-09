const flatten = (root) => {
  let current = root;
  let ptr = new NodeTree()
  while (current) {
    if (current.left != null) {
      ptr = current.left
      while (ptr.right) ptr = ptr.right;
      ptr.right = current.right
      current.right = current.left
      current.left = null
    }
    current = current.right;
  }
  return root
}

class NodeTree {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}
