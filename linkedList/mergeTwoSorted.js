const mergeTwo = (list1, list2) => {
    let dummy = new Node(0);
    let temp = dummy;
    if (!list1) return list2;
    if (!list2) return list1;
    while (list1 && list2) {
        if (list1.data < list2.data) {
            temp.next = list1;
            list1 = list1.next;
        } else {
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;
    }
    if (list1 != null) temp.next = list1;
    if (list2 != null) temp.next = list2;
    return dummy.next;
}
