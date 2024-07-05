function highestPalindrome(s, k) {
  function findPalindrome(s, left, right, k, changes) {
    if (left >= right) {
      return [s, changes];
    }

    if (s[left] !== s[right]) {
      if (k === 0) {
        return [-1, changes];
      }
      let maxChar = Math.max(s[left], s[right]);
      let newStr =
        s.substring(0, left) +
        maxChar +
        s.substring(left + 1, right) +
        maxChar +
        s.substring(right + 1);
      return findPalindrome(newStr, left + 1, right - 1, k - 1, changes + 1);
    } else {
      return findPalindrome(s, left + 1, right - 1, k, changes);
    }
  }

  function maximizePalindrome(s, left, right, k, changes) {
    if (left > right || k < 0) {
      return s;
    }

    if (s[left] !== "9") {
      if (s[left] === s[right]) {
        if (changes > 0 && k >= 2) {
          s =
            s.substring(0, left) +
            "9" +
            s.substring(left + 1, right) +
            "9" +
            s.substring(right + 1);
          return maximizePalindrome(s, left + 1, right - 1, k - 2, changes - 1);
        }
      } else {
        if (changes > 0 && k >= 1) {
          s =
            s.substring(0, left) +
            "9" +
            s.substring(left + 1, right) +
            "9" +
            s.substring(right + 1);
          return maximizePalindrome(s, left + 1, right - 1, k - 1, changes - 1);
        }
      }
    }
    return maximizePalindrome(s, left + 1, right - 1, k, changes);
  }

  let [palin, changes] = findPalindrome(s, 0, s.length - 1, k, 0);
  if (palin === -1) {
    return "-1";
  }

  return maximizePalindrome(palin, 0, s.length - 1, k, changes);
}

console.log(highestPalindrome("3943", 1));
console.log(highestPalindrome("932239", 2));
