// This is the combination of reverse linked 1 & 2
const reOrderList = (head) => {
  if (head == null || head.next == null) return null;

  // Find the middle of the list
  let walker = head;
  let runner = head;
  while (runner.next && runner.next.next) {
    walker = walker.next;
    runner = runner.next.next;
  }

  // Reverse the half after middle
  let mid = walker;
  let current = walker.next;
  while (current.next) {
    let curr = current.next;
    current.next = curr.next;
    curr.next = mid.next
    mid.next = curr;
  }

  // Start the reOder one by one
  walker = head;
  runner = mid.next;
  while (walker != mid) {
    mid.next = runner.next;
    runner.next = walker.next;
    walker.next = runner;
    walker = runner.next;
    runner = mid.next;
  }
  return head;
}
