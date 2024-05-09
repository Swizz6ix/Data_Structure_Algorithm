// method 1
const sortedListToBST = (head) => {
    let current = head;
    let count = 0
    while (current) current = current.next, count++;
    const treeify = (i, j) => {
        if (j < i) return null;
        let mid = i + j >> 1;
        let node = new NodeTree()
        node.left = treeify(i, mid - 1);
        node.data = current.data
        current = current.next
        node.right = treeify(mid + 1, j)
        return node;
    }
    current = head;
    return treeify(1, count)
}

// Method 2
const sortedListToBst = (head) => {
    let arr = getArr(head);
    // console.log('seed', treeNode(arr))
    return treeNode(arr);
}
const getArr = (head) => {
    if (!head) return []
    let temp = head;
    let out = []
    while (temp) {
        out.push(temp.data);
        temp = temp.next;
    }
    return out
}

function treeNode(array,start=0, end=array.length-1) {
    if (start<=end) {
        console.log('str',start)
        let mid = start + end >> 1;
        console.log('mid', mid)
        let root = new NodeTree(array[mid]);
        root.left = treeNode(array, start, mid-1);
        root.right = treeNode(array, mid+1, end);
        // console.log('root', root)
        return root;
    }
    return null
}