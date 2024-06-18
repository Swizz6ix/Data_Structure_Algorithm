// Serialization is the process of converting a data structure or object into a sequence of bits
// so that it can be stored in a file or memory buffer, or transmitted across a network
// connection link to be reconstructed later in the same or another computer environment.
const serializeAndDeserializeBinaryTree = (arr) => {
  const root = Deserialize(arr);
  return Serialize(root);
  
  function Deserialize(arr) {
    let root = new Tree(arr[0]);
    let q = [root]
    let i = 1;

    while (i < arr.length) {
      let cur = q.shift();
      cur.left = new Tree(arr[i++]);
      q.push(cur.left);

      cur.right = new Tree(arr[i++]);
      q.push(cur.right);
    }
    return root;
  };

  function Serialize(root) {
    let res = [];
    function helper(root) {
      if (!root) return
    res.push(root.data + '')
    helper(root.left);
    helper(root.right);
    }
    helper(root);
    return res;
  }
}

console.log(serializeAndDeserializeBinaryTree([1, 2, 3, null, null, 4, 5]));
