const removeZeroSumSublists = (head) => {
  let root = new Node(0);
  root.next = head;
  let hashMap = new Map();
  hashMap.set(0, root)
  let ac = 0;

  while (head !== null) {
    ac += head.data;

    // find value
    if (hashMap.has(ac)) {
      let prev = hashMap.get(ac);
      let start = prev;

      // Delete bad references
      let aux = ac;
      while (prev !== head) {
        prev = prev.next;
        aux += prev.data;
        if (prev !== head) hashMap.delete(aux);
      }
      start.next = head.next;
    } else hashMap.set(ac, head);
    head = head.next;
  }
  return root.next;
}

const heA = [1, 2, 3, -3, 4];
const heAarr = arr2link(heA);

console.log(removeZeroSumSublists(heAarr));
