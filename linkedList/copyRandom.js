const copyRandom = (head) => {
  if (!head) return null;
  let dummy = head;

  // First round: Make copy of each node, and link them together
  // side-by-side-by in a single list
  while (dummy !== null) {
    let next = dummy.next;
    let copy = new RandomNode(dummy.data)
    copy.next = next;
    dummy.next = copy;
    dummy = copy.next;
  }

  // Second round: Assign random pointers for the copy nodes
  dummy = head;
  while (dummy !== null) {
    if (dummy.random !== null) {
      dummy.next.random = dummy.random.next;
    }
    dummy = dummy.next.next
  }

  // Third round: restore the original list and extract the copy list. 
  dummy = head;
  let pseudoHead = new RandomNode(0);
  let copy, copyDummy = pseudoHead;

  while (dummy) {
    let next = dummy.next.next;
    copy = dummy.next;
    copyDummy.next = copy;
    copyDummy = copy;
    dummy.next = next;
    dummy = next;
  }
  return pseudoHead.next;
}



// method 2 (hashmap)
const copyRandomList = (head) => {
  if (!head) return null;
  const clones = new Map();
  let dummy = head;
  while (dummy) {
    clones.set(dummy, new RandomNode(dummy.data))
    dummy = dummy.next;
  }

  dummy = head;
  while (dummy) {
    clones.get(dummy).next = clones.get(dummy.next) || null;
    clones.get(dummy).random = clones.get(dummy.random) || null;
    dummy = dummy.next;
  }
  return clones.get(head);
}

function printLt(head) {
  process.stdout.write(head.data + " (" + (head.random + ")"));
  head = head.next;
  while (head !== null) {
    process.stdout.write(" -> " + head.data + "(" + (head.random.data + ")"));
    head = head.next;
  }
  console.log();
}

const head = new RandomNode(7);
head.next = new RandomNode(13);
head.next.next = new RandomNode(11)
head.next.next.next = new RandomNode(10)
head.next.next.next.next = new RandomNode(1);
head.random = head.next.next.next.next.next;
head.next.random = head;
head.next.next.random = head.next.next.next.next;
head.next.next.next.random = head.next.next;
head.next.next.next.next.random = head;
// console.log("The original linked list:");
// printLt(head)
// Function Call
// const cp = copyRandom(head)
// const cp2 = copyRandomList(head)
// console.log("The cloned linked list:")
// printLt(cp)
// printLt(cp2)

// const list = [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]];
// const arr = arr2Random(list);
// const cpy = copyRandom(arr);
// const cpy2 = copyRandomList(arr)

const l1 = [1, 2, 3, 4, 5]
const link = arr2link(l1);
// const l2 = [1, 2, 3, 4, 5, null, 7]
// const tree = buildTree(l2);
// printTree(tree)

// const fl = flatten(tree)
// printTree(fl)

// const conn = connect(tree)
// printTree(conn)

// const conn2 = connect2(tree);
// printTree(conn2);

// const conn3 = connect3(tree);
// printTree(conn3)

// const connII = connectII(tree);
// printTree(connII)

// const linkList = arr2link(l2)
// const revBtw = reverseBtw(linkList, 2, 4)
// ptr(revBtw)

// const reOder = reOrderList(link)
// ptr(reOder);