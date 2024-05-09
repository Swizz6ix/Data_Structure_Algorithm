const removeElements = (head, data) => {
  if (head == null) return null;
  head.next = removeElements(head.next, data);
  return head.data == data? head.next : head;
}

arr = [1, 2, 6, 3, 4, 5, 6]
list = arr2link(arr)
const remove = removeElements(list, 6);
// ptr(remove);
