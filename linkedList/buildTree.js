class NodeTree {
    constructor (data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.next = null;
    }
}


const buildTree = (array) => {
  if (array.length === 0) return null;
  let root = new NodeTree(array[0]);
  let q = [root];
  let i = 1;

  while (i < array.length) {
    let current = q.shift();
    if (i < array.length) {
      current.left = new NodeTree(array[i++]);
      q.push(current.left);
    }
    if (i < array.length) {
      current.right = new NodeTree(array[i++]);
      q.push(current.right)
    }
  }
  return root;
}

const printTree = (root) => {
  if (!root) return null;
  console.log('Node>>>>', root.data);
  printTree(root.left);
  // console.log('Node>>>>', root.data);
  printTree(root.right);
}
