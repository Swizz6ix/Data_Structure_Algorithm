const mergeInBtw = (list1, a, b, list2) => {
  let ptr = list1;
  for (let i = 0; i < a - 1; ++i) ptr = ptr.next;

  let qtr = ptr.next;
  for (i = 0; i < b - a + 1; ++i) qtr = qtr.next;

  ptr.next = list2;
  while (list2.next) list2 = list2.next;
  list2.next = qtr;

  return list1;
}

let arr1 = [10, 1, 13, 6, 9, 5];
let arr2 = [1000000, 1000001, 1000002];
let a = 3;
let b = 4;

let lst1 = arr2link(arr1);
let lst2 = arr2link(arr2);
console.log('btw', mergeInBtw(lst1, a, b, lst2));
