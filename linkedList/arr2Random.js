const arr2Random = (array) => {
  let root = null;
  for (i = 0; i < array.length; i++) {
    console.log("host", i)
    const arr = array[i];
    root = insertRandom(root, arr[0], arr[1])
  }
  return root;
}

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
