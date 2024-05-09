const swapPairs = (head) => {
    let dummy = new Node();
    dummy.next = head;
    if (!head || !head.next) return head;
    let prev = dummy;
    let current = head;
    while (current && current.next) {
        prev.next = current.next;
        current.next = prev.next.next;
        prev.next.next = current
        prev = current;
        current = current.next;
    }
    return dummy.next;
}
