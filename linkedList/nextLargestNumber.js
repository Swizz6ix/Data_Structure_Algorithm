// Transform linked list to an array then solve by stack
const nextLargestNumber = (head) => {
  let arr = [];

  for (let node = head; node !== null; node = node.next) {
    arr.push(node.data)
  }

  let res = new Array(arr.length).fill(0)
  let stack = []

  for (let i = 0; i < arr.length; ++i) {
    while (stack.length !== 0 && arr[stack[stack.length - 1 ]] < arr[i]) {
      res[stack.pop()] = arr[i];
    }
    stack.push(i)
  }
  return res
}

let nextHead = [2, 7, 4, 3, 5]
let nxtH = arr2link(nextHead);

console.log(nextLargestNumber(nxtH))
