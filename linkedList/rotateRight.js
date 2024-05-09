const rotateRight = (head, n) => {
    if (!head) return head;
    let len = 0;
    let dummy = head;
    let temp;

    while (dummy) {
        len++
        dummy = dummy.next
    }
    
    if (len < 2) return head;
    n = n % len // since k can range to 2x10^9 while max len is 500, the number of rotations are restricted within limits
    if (!n) return head;
    n++
    dummy = head
    while (len - n++) 
        head = head.next;
    [head.next, head] = [null, head.next]
    // the above line is the same as 
    // temp = head.next
    // head.next = null
    // head = temp
    temp = head;
    while (temp.next) temp = temp.next;
    temp.next = dummy;
    return head
}