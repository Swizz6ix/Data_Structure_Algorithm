const linkedListCycle = (head) => {
  if (!head) return false;
  let walker = head;
  let runner = head;
  while (runner.next && runner.next.next) {
    walker = walker.next;
    runner = runner.next.next;
    if (walker === runner) return true;
  }
  return false;
}

// Method 2 (Using hash Table)
const hasCycle = (head) => {
  let visited_node = new Set();
  let current_node = head;
  while (current_node) {
    if (visited_node.has(current_node)) return true;
    visited_node.add(current_node);
    current_node = current_node.next
  }
  return false
}

// Inserts a new node at the front of the list.
let hed = null;
const push = (data) => {
  let new_data = new Node(data)
  new_data.next = hed;
  hed = new_data
  // console.log('head', hed)
}

push(-4)
push(0)
push(2)
push(3)

hed.next.next.next.next = hed
console.log('method1', linkedListCycle(hed))
console.log('method2', hasCycle(hed))