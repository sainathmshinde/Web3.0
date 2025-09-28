// problem 344 leetcode
// Write a function that reverses a string.
// The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory

let n = ["s", "a", "i", "n", "a", "t", "h"];

var revStr = function (n) {
  let len = n.length;
  let halfLen = Math.floor(len / 2);

  for (let i = 0; i < halfLen; i++) {
    let temp = n[i];
    n[i] = n[len - 1 - i];
    n[len - 1 - i] = temp;
  }
};
revStr(n);
console.log(n);

let s = ["h", "e", "l", "l", "o"];
var strRev = function (s) {
  let a = 0;
  b = s.length - 1;
  while (a < b) {
    [s[a], s[b]] = [s[b], s[a]];
    a++;
    b--;
  }
};
strRev(s);
console.log(s);
