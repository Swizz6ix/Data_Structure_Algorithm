const simplifyPath = (path) => {
  const stack = [];
  const directories = path.split("/");

  for (const dir of directories) {
    if (dir == '.' || !dir) continue
    else if (dir === '..') {
      if (stack.length > 0) stack.pop()
    }
    else stack.push(dir);
  }
  return '/' + stack.join('/');
}

console.log('path', simplifyPath('/.../a/../b/c/../d/./'));