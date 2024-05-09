const reverseKGroup = (head, k) => {
    let prevTail = null;
    let currHead = head;
    let currTail = head;
    let nextHead = null;

    while (currHead) {
        let count = 1;
        while(currTail.next && count < k) {
            currTail = currTail.next;
            count++;
        }

        if (count != k) break;
        nextHead = currTail.next;
        currTail.next = null;
        if (prevTail != null) prevTail.next = null;
        currTail = reverse(currHead);

        // attach left hand side
        if (prevTail != null) prevTail.next = currTail
        else head = currTail;

        // attach the right hand side
        currHead.next = nextHead;

        // update the pointer
        prevTail = currHead;
        currHead = nextHead;
        currTail = nextHead;
    }
    return head
}

const reverse = (head) => {
    let prev = null
    let node = head
    let nextNode = head

    while (node != null) {
        nextNode = nextNode.next
        node.next = prev;
        prev = node;
        node = nextNode;
    }
    return prev;
}