// leetcode 121
//palindrome with ignore alphanumeric

function validatePalindrome(str) {
  // Your implementation
  let s = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

//For the purpose of user debugging.
validatePalindrome("race a car");
