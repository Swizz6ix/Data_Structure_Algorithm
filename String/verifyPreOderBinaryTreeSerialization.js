const verifyPreOderBinaryTreeSerialization = (preOder) => {
  let nodes = preOder.split(',');
  let diff = 1;
  for (let node of nodes) {
    if (--diff < 0) return false;
    if (node != '#') diff +=2;
  }
  return diff == 0;
}
console.log('verify_preOrder', verifyPreOderBinaryTreeSerialization('9,3,4,#,#,1,#,#,2,#,6,#,#'));
