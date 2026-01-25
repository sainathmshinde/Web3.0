const crypto = require("node:crypto");

let a = 10;
let b = 20;
console.log("started");

//Password Based Key Derivstion Function 2

// syncronous blocking code ==> not handle bu libuv because it is syncronous

crypto.pbkdf2Sync("Password", "salt", 5000000, 50, "sha512");

console.log("First Key is generated");

//Async code  Non Blocking => over to libuv to handle it

crypto.pbkdf2("Password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("Key Geneated");
});

function multiplyFn(x, y) {
  let result = a * b;
  return result;
}

let c = multiplyFn(a, b);
console.log("multi", c);
