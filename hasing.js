// Write function to find hashed binary number starts with 00000

const crypto = require("crypto");

// function to find an input string that produce a hash starting with '00000'

function findHashwithPrefix(prefix) {
  let input = 0;
  while (true) {
    let inputString = input.toString();
    let hash = crypto.createHash("sha256").update(inputString).digest("hex");

    if (hash.startsWith("prefix")) {
      return { input: inputString, hash: hash };
    }
    input++;
  }
}

const result = findHashwithPrefix("00000");

console.log(`input : ${result.input}`);

console.log("red");
