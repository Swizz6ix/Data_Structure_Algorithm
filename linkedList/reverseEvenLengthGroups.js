const reverseEvenLengthGroups = (head) => {
  let groupRequired = 1;
  let temp = head;
  while (temp) {
    let count = 0;
    let start = temp;
    let stack = [];
    while (count != groupRequired && temp != null) {
      stack.push(temp.data);
      temp = temp.next;
      count++;
    }
    if (count % 2 === 0) {
      while(start != temp) {
        start.data = stack.pop();
        start = start.next;
      }
    }
    groupRequired++;
  }
  return head;
}

const evenLth = [5, 2, 6, 3, 9, 1, 7, 3, 8, 4];
const EvenL = arr2link(evenLth);
console.log(reverseEvenLengthGroups(EvenL));
