const removeNthFromEnd = (head, n) => {
    let fast = head;
    let slow = head;
    while (n >= 1) {
        fast = fast.next;
        n--;
    }
    if (fast === null) head = head.next; // if n is the length of list.
    else {
        while (fast.next) {
            slow = slow.next;
            fast = fast.next;
        }
        slow.next = slow.next.next;
    }
    return head;
}