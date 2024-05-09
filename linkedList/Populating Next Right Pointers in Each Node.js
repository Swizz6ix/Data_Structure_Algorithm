// method 1 (BFS - Right to Left)
const connect = (root) => {
  if (!root) return null;
  const q = [root]
  while (q.length > 0) {
    let rightNode = null;
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let current = q.shift();
      current.next = rightNode;
      rightNode = current;
      if (current.right) q.push(current.right)
      if (current.left) q.push(current.left)
    }
  }
  return root;
}

// method 2 (DFS)
const connect2 = (root) => {
  if (!root) return none;
  if (root.left != null) {
    root.left.next = root.right;
    if (root.next != null) root.right.next = root.next.left
    connect2(root.left);
    connect2(root.right);
  }
  return root;
}

// method 3 (BFS - Space-Optimized Approach)
const connect3 = (root) => {
  let head = root;
  while (root) {
    let current = root;
    root = root.left
    while (current) {
      if (current.left) {
        current.left.next = current.right;
        if (current.next) {
          current.right.next = current.next.left
        }
      else break;
      }
    }
    return head;
  }
}