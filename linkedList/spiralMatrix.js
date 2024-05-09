const spiralMatrix = (m, n, head) => {
  let i = 0;
  let j = 0;
  let cur_d = 0;
  let d = [0, 1, 0, -1, 0];
  let res = Array.from({length: m}, () => Array(n).fill(-1));

  while (head) {
    res[i][j] = head.data;
    let ni = i + d[cur_d];
    let nj = j + d[cur_d + 1];

    if (Math.min(ni, nj) < 0 || ni >= m || nj >= n || res[ni][nj] !== -1) {
      cur_d = (cur_d + 1) % (n - 1);
    }
    i += d[cur_d];
    j += d[cur_d + 1];
    head = head.next;
  }
  return res;
}

let m = 3;
let n = 5;
let node = [3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0]
let nodeArr = arr2link(node);
console.log(spiralMatrix(m, n, nodeArr))
