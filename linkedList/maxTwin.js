const maxTwin = (head) => {
  if (head.next === null) return head
  let dummy = head;
  let stack = [];
  let max = 0;
  while (dummy) {
    stack.push(dummy.data)
    dummy = dummy.next
  }
  
  for (let i = 0; i < stack.length; i++) {
    max = Math.max(max, stack[i] + stack.pop())
  }
  return max
}

const maxt = [4, 2, 2, 3];
const maxtarr = arr2link(maxt);

console.log(maxTwin(maxtarr))
