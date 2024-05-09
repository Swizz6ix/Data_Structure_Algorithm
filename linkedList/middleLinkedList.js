const middleLinkedList = (head) => {
  if (head === null) return;
  let walker = head;
  let runner = head;

  while (runner && runner.next) {
    walker = walker.next;
    runner = runner.next.next;
  }

  return walker;
}

const midArr = [1, 2, 3, 4, 5, 6]
const mideLst = arr2link(midArr);

console.log('mid', middleLinkedList(mideLst))
