const printTree = (root) => {
  const result = []
  dfs(root, []);
  return result;

  function dfs(node, path) {
    if (!node || !Number(node.data)) return;

    path.push(node.data.toString());
    if (!node.left && !node.right) result.push(path.join('->'));
    else {
      dfs(node.left, path.slice());
      dfs(node.right, path.slice());
    }
  }
}

console.log('PrintTree', printTree(arr2tree([1, 2, 3, null, 5])));
