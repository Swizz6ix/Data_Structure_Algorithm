const numComponents = (head, G) => {
  let setG = new Set();
  for (let i of G) setG.add(i);
  let res = 0;
  while (head !== null) {
    if (setG.has(head.data) && (head.next === null || !setG.has(head.next.data))) res++;
    head = head.next;
  }
  return res;
}

const H = [0, 1, 2, 3, 4];
const Hlink = arr2link(H);
const G = [0, 3, 1, 4];

console.log('hg', numComponents(Hlink, G));
