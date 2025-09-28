// problem 231 leetcode
// power of two if it is return true if not return false

var power = function (n) {
  if (n == 1) return true;
  else if (n % 2 !== 0 || n < 1) return false;

  return power(n / 2);
};
console.log(power(7));
