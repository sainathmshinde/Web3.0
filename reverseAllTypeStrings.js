/**
 * All Types of String Reversal in JavaScript
//1. Reverse the entire string (character-by-character)
 Input: "hello world"
Output: "dlrow olleh"
 */

function reverseString(str) {
  return str.split("").reverse().join("");
}
//or

function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

/**
   * ✅ 2. Reverse the order of words

Example
Input: "hello world"
Output: "world hello" */

function reverseWords(str) {
  return str.trim().split(/\s+/).reverse().join(" ");
}

function reverseWords(str) {
  let words = [];
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
    } else {
      if (word !== "") {
        words.push(word);
        word = "";
      }
    }
  }
  if (word !== "") words.push(word);

  let result = "";
  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];
    if (i > 0) result += " ";
  }
  return result;
}

/**
   ✅ 3. Reverse the characters of each word, but keep word order

Example
Input: "hello world"
Output: "olleh dlrow"
   */

function reverseEachWord(str) {
  return str
    .trim()
    .split(/\s+/)
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}
//or

function reverseEachWord(str) {
  let result = "";
  let word = "";

  for (let i = 0; i <= str.length; i++) {
    let ch = str[i] || " "; // add space at end
    if (ch !== " ") {
      word += ch;
    } else {
      if (word !== "") {
        // Reverse word manually
        for (let j = word.length - 1; j >= 0; j--) {
          result += word[j];
        }
        result += " ";
        word = "";
      }
    }
  }

  // Remove trailing space
  if (result[result.length - 1] === " ") {
    result = result.slice(0, -1);
  }

  return result;
}
