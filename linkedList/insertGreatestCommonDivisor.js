const insertGreatestCommonDivisor = (head) => {
  if (head == null) return head;
  let ptr = head;
  while (ptr.next) {
    let temp = new ListNode(gcd(ptr.data, ptr.next.data), ptr.next);
    ptr.next = temp;
    ptr = temp.next;
  }
  return head;
}

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
}

const inG = [18, 6, 10, 3];
const inGArr = arr2link(inG)
console.log(insertGreatestCommonDivisor(inGArr));