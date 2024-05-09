const linkInBinary = (head, root) => {
  let arr = new Array();
  let dp = new Array().fill(0);
  let i = 0;
  arr.push(head.data);
  head = head.next;
  while (head) {
    while (i > 0 && head.data != arr[i]) i = dp[i - 1];
    if (head.data == arr[i]) i++;
    arr.push(head.data);
    dp.push(i);
    head = head.next;
  }
  return dfs(root, 0, arr, dp);
}

const dfs = (root, i, arr, dp) => {
  if (root === null) return false;
  while (i > 0 && root.data != arr[i]) i = dp[i = 1];
  if (root.data === arr[i]) i++;
  return i == dp.length || dfs(root.left, i, arr, dp) || dfs(root.right, i, arr, dp);
}

const biTr = [1, 4, 4, null, 2, 2, null, null, null, 1, null, 6, 8, null, null, null, null, null, null, null, null, null, null, null, null, 1, 3,];
const btr = buildTree(biTr)
console.log(btr)
let hod = [1, 4, 2, 6]
console.log('linked', linkInBinary(hod, btr));
