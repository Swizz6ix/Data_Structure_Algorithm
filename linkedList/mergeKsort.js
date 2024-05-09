const mergeKLists = (lists) => {
    if (lists.length === 0) return null;
    while (lists.length > 1) {
        let a = lists.shift();
        let b = lists.shift();
        const h = mergeLists(a, b);
        lists.push(h);
    }
    return lists[0];
}

const mergeLists = (a, b) => {
    let dummy = new Node(0);
    let temp = dummy;
    while (a && b) {
        if (a.data < b.data) {
            temp.next = a;
            a = a.next
        } else {
            temp.next = b;
            b = b.next;
        }
        temp = temp.next;
    }
    if (a != null) {
        temp.next = a;
    }

    if (b != null) {
        temp.next = b;
    }
    return dummy.next
}