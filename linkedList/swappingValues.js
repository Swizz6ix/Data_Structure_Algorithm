const swappingValues = (head, n) => {
  let node1 = null;
  let node2 = null;

  for (let p = head; p != null; p = p.next) {
    node2 = node2 == null ? null : node2.next;
    if (--n == 0) {
      node1 = p;
      node2 = head;
    }
  }
  let temp = node1.data;
  node1.data = node2.data;
  node2.data = temp
  return head;
}

const ed = [7, 9, 6, 6, 7, 8, 3, 0, 9, 5];
const edh = arr2link(ed);

console.log('swap', swappingValues(edh, 5))
