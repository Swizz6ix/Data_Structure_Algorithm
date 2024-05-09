const mergeInBtwZeors = (head) => {
  if (head.next == null) return head;
  let start = head;
  while (start) {
    let end = start;
    let sum = 0;
    while (end.data != 0) sum += end.data, end = end.next;
    start.data = sum;
    start.next = end.next;
    start = start.next;
  }
  return head.next;
}

const mergeInBtwZeorsII = (head) => {
  if (!head.next) return null;

  let temp = head.next;
  let sum = 0;
  while (temp?.data != 0) sum += temp?.data, temp = temp?.next;
  head.next.data = sum;
  head.next.next = mergeInBtwZeorsII(temp)
  return head.next;
}

const mergB = [0, 1, 0, 3, 0, 2, 2, 0];
const mergBarr = arr2link(mergB);

// console.log(mergeInBtwZeors(mergBarr));
// console.log(mergeInBtwZeorsII(mergBarr));
