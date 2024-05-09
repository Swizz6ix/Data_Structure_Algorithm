const deleteDup = (head) => {
    let dummy = new Node(0);
    dummy.next = head;
    let curr = head;
    let node = dummy;

    while (curr) {
        while (curr.next && node.next && node.next.data === curr.next.data) curr = curr.next;
        if (node.next === curr) node = node.next
        else node.next = curr.next
        curr = curr.next 
    }
    return dummy.next
}
