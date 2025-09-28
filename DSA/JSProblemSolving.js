function reverse(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverse("hello"));

function revString(str) {
  return str.split("").reverse().join("");
}

console.log(revString("hellowe"));

function palindrom(str) {
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }
  if (string === str) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrom("rarar"));

function pal(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(pal("rararar"));

//fizzbuzz

const fun = function fizzBuzz(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("fizzBuzz");
    } else if (i % 3 === 0) {
      result.push("fizz");
    } else if (i % 5 === 0) {
      result.push("buzz");
    } else {
      result.push(i);
    }
  }
  return result;
};
console.log(fun(15));

//Remove duplicates from an array

function duplicate(arr) {
  let result = [];
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    } else {
      duplicates.push(arr[i]);
    }
  }
  return { unique: result, duplicates: duplicates };
}

console.log(duplicate([1, 1, 2, 3, 4, 5]));

//Factorial of n

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } //base case
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(12));
