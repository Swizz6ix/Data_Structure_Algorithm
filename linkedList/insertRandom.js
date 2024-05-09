class RandomNode {
  constructor (data) {
    this.data = data;
    this.random = null
    this.next = null;
  }
}

const insertRandom = (root, item, random) => {
  let node = new RandomNode();
  node.data = item;
  node.random = random;
  let ptr;
  if (root === null) root = node;
  else {
    ptr = root;
    while (ptr.next) ptr = ptr.next;
    ptr.next = node;
  }
  return root;
}
