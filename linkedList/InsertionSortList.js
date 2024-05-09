const insertSorted = (head) => {
  if (head == null) return head;
  let node = new Node(0);
  let current = head;
  let prev = node;
  let next = null;
  while (current) {
    next = current.next;
    // Find the place to insert
    while (prev.next && prev.next.data < current.data) {
      prev = prev.next
    }
    // insert between prev and next
    current.next = prev.next;
    prev.next = current;
    prev = node;
    // console.log('dss', prev)
    current = next;
  }
  return node.next;
}

let arr = [6, 5, 3, 1, 8, 7, 2, 4]
let list = arr2link(arr)
const ins = insertSorted(list)
// ptr(ins);
