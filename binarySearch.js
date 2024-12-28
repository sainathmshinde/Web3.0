/* const binSearch = (arr, value, low = 0, high = arr.length - 1, count) => {
  //if already exists
  if (low <= high) {
    //print the no. of times function called

    console.log(count++);

    //get mid
    const mid = Math.ceil((low + high) / 2);

    //if element found
    //return index
    if (value === arr[mid]) {
      return mid;
    }
    //if value is less than mid then search in lower range

    if (value < arr[mid]) {
      return binSearch(arr, value, low, mid - 1, count);
    } else {
      //else value is greater than mid
      return binSearch(arr, value, mid + 1, high, count);
    }
  }
  //if ot found
  return -1;
};

//Input
let arr = [];
for (let i = 1; i <= 1000000; i++) {
  arr.push(i);
}

console.log(binSearch(arr, 231232));
 */

const leftMost = (arr, value, low = 0, high = arr.length - 1, result) => {
  //if already exists
  if (low <= high) {
    //print the no. of times function called

    console.log(result);

    //get mid
    const mid = Math.ceil((low + high) / 2);

    //if element found
    //return index
    if (value === arr[mid]) {
      result = mid;
      leftMost(arr, value, low, mid - 1, result);
    }
    //if value is less than mid then search in lower range

    if (value < arr[mid]) {
      return leftMost(arr, value, low, mid - 1, result);
    } else {
      //else value is greater than mid
      return leftMost(arr, value, mid + 1, high, result);
    }
  }
  //if ot found
  return -1;
};

//Input
const arr = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 10];

console.log(leftMost(arr, 5));
