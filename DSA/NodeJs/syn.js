const fs = require("fs");
const https = require("https");

console.log("hellow");

var a = 122;
var b = 234;

const data = fs.readFileSync("file.txt", "utf8"); // ⛔ Blocking call
console.log("File contents:", data);

/**
 👉 Here, fs.readFileSync blocks the entire program until the file is read completely.
Nothing else can run during that time (not even timers or HTTP requests).
 */

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched dat successfully");
});

setTimeout(() => {
  console.log("setTimeout called");
}, 5000);

fs.readFile("./file.txt", "utf8", (err, data) => {
  // Non-Blocking
  console.log("filedata : ", data);
});

function multiply(x, y) {
  const result = a * b;
  return result;
}

const c = multiply(a, b);
console.log("multiplied value", c);
