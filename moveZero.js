// leet code 283
// move all zeros to end of the array within maintaining relative order
let num = [0, 1, 4, 6, 3, 8, 0, 9, 20, 0, 6];
var moveZero = function (num) {
  let x = 0; //pointer to move from 0th position

  for (let i = 0; i < num.length; i++) {
    if (num[i] !== 0) {
      num[x] = num[i];
      x++;
    }
  }
  for (let i = x; i < num.length; i++) {
    num[i] = 0;
  }
};
