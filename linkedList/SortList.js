class MergerHelper {
  constructor () {
    this.newHead = null;
    this.newTail = null;
  }
}

const sortList = (head) => {
  if (head == null || head.next == null) return null;
  const dummy = new Node(0);
  const fake = new Node(0);
  const dummySortedHead = new Node(0);
  let dummySortedTail = dummySortedHead
  let node = head;
  const mergeRst = new MergerHelper();
  let length = 0;
  let level = 0;

  while (node && node.next) {
    node = addNode(dummy, node, 1 << level);
    node = addNode(fake, node, 1 << level);
    merge(dummy.next, fake.next, mergeRst);
    dummySortedTail.next = mergeRst.newHead;
    dummySortedTail = mergeRst.newTail;
    length += 2;
  }
  if (node != null) {
    dummySortedTail.next = node;
    length++;
  }
  level ++;

  while (length > 1 << level) {
    dummySortedTail = dummySortedHead;
    node = dummySortedHead.next;
    while (node) {
      node = addNode(dummy, node, 1 << level);
      node = addNode(fake, node, 1 << level);
      merge(dummy.next, fake.next, mergeRst);
      dummySortedTail.next = mergeRst.newHead;
      dummySortedTail = mergeRst.newTail;
    }
    level ++;
  }
  return dummySortedHead.next;
}

const addNode = (head, source, count) => {
  while (count > 0 && source) {
    head.next = source;
    head = head.next;
    source = source.next;
    count--;
  }
  head.next = null;
  return source
};

const merge = (list1, list2, helper) => {
  let dummyHead = new Node(0);
  let lastNode = dummyHead;
  while (list1 && list2) {
    if (list1.data < list2.data) {
      lastNode.next = list1;
      list1 = list1.next;
    } else {
      lastNode.next = list2;
      list2 = list2.next;
    }
    lastNode = lastNode.next;
  }
  while (list1) {
    lastNode.next = list1;
    list1 = list1.next;
    lastNode = lastNode.next;
  }
  while (list2) {
    lastNode.next = list2;
    list2 = list2.next;
    lastNode = lastNode.next;
  }
  helper.newHead = dummyHead.next;
  helper.newTail = lastNode;
}

arr = [-1, 5, 3, 4, 0];
list = arr2link(arr);
const sortLL = sortList(list)
// ptr(sortLL);
