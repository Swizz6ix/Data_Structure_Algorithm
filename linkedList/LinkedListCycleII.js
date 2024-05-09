// Floyd's Cycle-finding algorithm
const linkedListCycleII = (head) => {
  if (!head) return null;
  let walker = head;
  let runner = head;
  while(runner && runner.next) {
    walker = walker.next;
    runner = runner.next.next;
    if (walker === runner) {
      walker = head
      while (walker != runner) {
        walker = walker.next;
        runner = runner.next;
      }
      return walker;
    }
  }
  return null;
}
