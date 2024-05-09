function arrayToList(arr, n) {
  let root = null;
  for (let i = 0; i < n; i++) {
    root = insert(root, arr[i]);
  }
  return root;
}
const arr = [1, 2, 3, 4, 5, 6];
const list = arrayToList(arr, arr.length);
