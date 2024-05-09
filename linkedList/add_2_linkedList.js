class ListNode {
  /**
   *
   * @param {number} data
   * @param {ListNode | null} next
   */
  constructor(data, next) {
    this.data = data == undefined ? 0 : data;
    this.next = next == undefined ? null : next;
  }
}
/**
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @param {number} carry
 * @returns {ListNode}
 */

// Method 11
function add2 (l1, l2, carry) {
  if (!l1 && !l2 && !carry) return null;

  const total = (l1 ? l1.data : 0) + (l2 ? l2.data : 0) + (carry || 0);
  carry = parseInt(total / 10);
  const val = total % 10;
  return new ListNode(val, add2(l1?.next, l2?.next, carry));
};


// Method 2
const ad2 = function (l1, l2) {
  // console.log("seek", l1);
  let node = null;
  const carry = arguments[2];
  if (l1 || l2) {
    const val1 = l1 ? l1.data : 0;
    const val2 = l2 ? l2.data : 0;
    const next1 = l1 ? l1.next : null;
    const next2 = l2 ? l2.next : null;
    const val = carry ? val1 + val2 + 1 : val1 + val2;

    node = new Node(val % 10);
    node.next = ad2(next1, next2, val >= 10);
  } else if (carry) {
    node = new Node(1);
    node.next = null;
  }
  return node;
};
