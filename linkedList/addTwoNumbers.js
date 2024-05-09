const addTwoNumbers = (l1, l2) => {
  // We will use sizes to understand which list's
  // nodes should be frozen for a while
  let size1 = size(l1);
  let size2 = size(l2);
  console.log('de', size1, size2)
  let resHead = null;
  let node = null;

  while (l1 !== null || l2 !== null) {
    let val1 = 0;
    let val2 = 0;
    
    if (size1 >= size2) {
      val1 = l1 !== null ? l1.data : 0;
      l1 = l1.next;
      size1--;
    }

    // Comparing with size1 + 1 since size1 might be decremented previously
    if (size2 >= size1 + 1) {
      val2 = l2 !== null ? l2.data : 0;
      l2 = l2.next;
      size2--;
    }

    // Creating the resulting list in the reversed order.
    node = new Node(val1 + val2);
    node.next = resHead;
    resHead = node;
  }

  let carry = 0;
  resHead = null;

  // Now, let's perform the normalization.
  while (node !== null) {
    node.data += carry;;

    if (node.data >= 10) {
      node.data = node.data % 10;
      carry = 1;
    } else carry = 0;

    let buf = node.next;
    node.next = resHead;
    resHead = node;
    node = buf;
  }

  if (carry > 0) {
    node = new Node(1);
    node.next = resHead;
    resHead = node;
  }

  return resHead;
}

const size = (node) => {
  let len = 0;
  while (node !== null) {
    node = node.next;
    len++
  }
  return len;
}

const li1 = [7, 2, 4, 3];
const li2 = [5, 6, 4];

const lt1 = arr2link(li1);
const lt2 = arr2link(li2);

const add = addTwoNumbers(lt1, lt2)
console.log("forMe", add)
