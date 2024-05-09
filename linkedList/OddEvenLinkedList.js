const oddEven = (head) => {
  if (!head || !head.next || !head.next.next) return head;
  let odd = head;
  let even = head.next;
  let even_start = head.next;

  while (odd.next && even.next) {
    odd.next = even.next
    even.next = odd.next.next
    odd = odd.next;
    even = even.next;
  }
  odd.next = even_start // Place the first even node after the last odd node.
  return head;
}

arr = [1, 2, 6, 3, 4, 5, 6]
list = arr2link(arr);
const odEv = oddEven(list);
ptr(odEv);