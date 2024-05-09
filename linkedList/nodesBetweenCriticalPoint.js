// Time Complexity O(n), Space complexity O(1)
const nodesBetweenCriticalPoint = (head) => {
  let first = Number.MAX_SAFE_INTEGER;
  let last = 0;
  let prev = head.data;
  let min = Number.MAX_SAFE_INTEGER;
  

  for (let i = 0; head.next != null; ++i) {
    // console.log('host', prev, head.data, last)
    if ((prev < head.data && head.data > head.next.data) || 
      (prev > head.data && head.data < head.next.data)) {
        if (last != 0) min = Math.min(min, i - last);
        first = Math.min(first, i);
      last = i;
      console.log(last)
      }
      prev = head.data;
      // console.log('prev', prev)
      head = head.next;
  }
  if (min === Number.MAX_SAFE_INTEGER) return [-1, -1]
  return [min, last - first];
}

let nBTW = [1, 3, 2, 2, 3, 2, 2, 2, 7]
let nBTWarr = arr2link(nBTW);
console.log('btw', nodesBetweenCriticalPoint(nBTWarr));
