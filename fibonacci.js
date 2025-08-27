// fibonacci

/// return nth number only
//Recursive

function generateFibonacci(n) {
  if (n <= 1) return n;
  return generateFibonacci(n - 1) + generateFibonacci(n - 2);
}

//or

//rturn array of first n numbers with start 0,1

function fib(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const result = [0, 1];

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

console.log(fib(5)); // o/p == [0,1,1,2,3]
