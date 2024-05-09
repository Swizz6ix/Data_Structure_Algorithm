const printTree = (root) => {
  if (!root) return null;
  console.log('Node>>>>', root.data);
  printTree(root.left);
  // console.log('Node>>>>', root.data);
  printTree(root.right);
}