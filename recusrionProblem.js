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
