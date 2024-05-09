const deleteDuplicates = (head) => {
    if (!head) return null;
    let prev = head;
    let next = head.next;

    while (next) {
        if (prev.data == next.data) {
            prev.next = next.next
        } else {
            prev = prev.next
        }
        next = next.next
    }
    return head
}

// Method 2
const deleteRecur = (head) => {
    if (!head) return null;
    while (head.next && head.data === head.next.data) {
        head.next = head.next.next;
    }

    head.next = deleteRecur(head.next);
    return head;
}