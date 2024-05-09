const convertBinaryToLinkList = (head) => {
  let sum = 0;
  while (head) {
    sum *= 2;
    sum  += head.data
    head = head.next
  }
  return sum;
}

const bi = [1, 0, 1];
const binary = arr2link(bi);
console.log(convertBinaryToLinkList(binary));
