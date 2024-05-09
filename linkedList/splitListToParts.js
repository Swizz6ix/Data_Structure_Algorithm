const splitListToParts = (head, k) => {
  let parts = new Array(k);
  let len = 0;
  
  for (let node = head; node != null; node = node.next) {
    len++
  }
  let n = Math.floor(len / k)
  let r = len % k;
  let node = head;
  let temp = null;
  
  for (let i = 0; node != null && i < k; i++, r--) {
    parts[i] = node;
    for (let j = 0; j < n + (r > 0 ? 1 : 0); j++) {// 3
      temp = node;
      node = node.next;
    }
    temp.next = null;
  }
  return parts
}

const rt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const rtl = arr2link(rt);
console.log('split', splitListToParts(rtl, 3))
