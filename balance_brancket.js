function isBalanced(str) {
  let stack = [];
  let brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let char of str) {
    if (brackets[char]) {
      stack.push(char);
    } else if (Object.values(brackets).includes(char)) {
      if (stack.length === 0 || brackets[stack.pop()] !== char) {
        return "NO";
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

console.log(isBalanced("{ [ ( ) ] }"));
console.log(isBalanced("{ [ ( ] ) }"));
console.log(isBalanced("{ ( ( [ ] ) [ ] ) [ ] }"));
