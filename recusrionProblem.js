// sum 1 to n

let n = 10;

function fun(x) {
  if (x > n) return;

  console.log(x);
  fun(++x);
}
fun(1);

////////////

// x to 1

function fun(n) {
  if (n < 1) return;
  console.log(n);
  fun(--n);
}
fun(10);

/// add even numbers

let arr = [5, 4, 3, 2, 0, 1];
function sum(n) {
  if (n == 0) return arr[0] % 2 === 0 ? arr[0] : 0;
  if (arr[n] % 2 == 0) {
    return arr[n] + sum(n - 1);
  } else {
    return sum(n - 1);
  }
}

console.log(sum(arr.length - 1));
