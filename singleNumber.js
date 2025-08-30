//leetcode 136
//single number
/**
 * 
 * @param {Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

Example 3:

Input: nums = [1]

Output: 1} nums 
 * @returns 
 */

var singleNumber = function (nums) {
  let seen = new Set();

  for (let x of nums) {
    if (seen.has(x)) seen.delete(x);
    else seen.add(x);
  }
  return [...seen][0];
};
