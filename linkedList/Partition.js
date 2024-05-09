const partition = (head, n) => {
    let dummy = new Node();
    let temp = new Node();
    let current = head;
    let fake = dummy;
    let node = temp
    while (current) {
        if (current.data < n) {
            fake.next = current;
            fake = fake.next;
        } else {
            node.next = current;
            node = node.next;
        }
        current = current.next
    }
    node.next = null;
    fake.next = temp.next

    return dummy.next
}
