class Tree {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
    this.next = null;
  }
}

const arr2tree = (arr) => {
  if (arr.length == 0) return null;
  let root = new Tree(arr[0]);
  let q = [root];
  let i = 1;

  while (i < arr.length) {
    let cur = q.shift();
    if (i < arr.length) {
      cur.left = new Tree(arr[i++]);
      q.push(cur.left);
    }
    if (i < arr.length) {
      cur.right = new Tree(arr[i++]);
      q.push(cur.right)
    }
  }
  return root;
}

console.log('Tree', arr2tree([1, 2, 3, null, 5]));
