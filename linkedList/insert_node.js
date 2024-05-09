/**
 *
 * @param {*} root
 * @param {*} item - each array
 * @returns
 */

// For each item in the array we create a node in the linked list and insert in at the end of the list
function insert(root, item) {
  let node = new Node();
  let ptr;
  node.data = item; // each number in the array

  if (root == null) {
    root = node;
  } else {
    ptr = root;
    while (ptr.next != null) ptr = ptr.next;
    ptr.next = node;
  }
  return root;
}
