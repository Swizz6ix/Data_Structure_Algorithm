const isPalindrome = (head) => {
  let walker = head;
  let runner = head;
  let temp, prev;
  while (runner && runner.next) {
    walker = walker.next;
    runner = runner.next.next;
  }
  prev = walker;
  walker = walker.next;
  prev.next = null;
  while (walker) {
    temp = walker.next;
    walker.next = prev;
    prev = walker;
    walker = temp;
  }
  runner = head;
  walker = prev;
  while (walker) {
    if (runner?.data !== walker.data) {
      console.log('false', false)
      return false
    }
    else {
      runner = runner.next;
      walker = walker.next;
    }
  }
  console.log('true', true)
  return true;
}

arr = [1, 2, 2, 1]
list = arr2link(arr)
isPalindrome(list)
