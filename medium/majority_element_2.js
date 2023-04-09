/**

 Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Example 1:
Input: nums = [3,2,3]
Output: [3]

Example 2:
Input: nums = [1]
Output: [1]

Example 3:
Input: nums = [1,2]
Output: [1,2]
 
Constraints:
1 <= nums.length <= 5 * 104
-109 <= nums[i] <= 109
 
*/

/*
input: array of ints
output: array contanining el that repeats more than n / 3

Algorithm:
- declare 'target' and init to n / 3
- initialize hashmap
- initialize set

- iterate through the inputs
  - add to hashmap if does not exist else increment value in hashmap
  - if value is greater than target add to set

- return array with el as set

*/

const majorityElement = function(nums) {
  const target = nums.length / 3;
  const hash = new Map();
  const results = new Set();

  for (let el of nums) {
    hash.set(el, hash.get(el) + 1 || 1);
    if (hash.get(el) > target) results.add(el);
  }

  return Array.from(results);
}

console.log(majorityElement([3,2,3])) // [3]
console.log(majorityElement([1])) // [1]
console.log(majorityElement([1,2])) // [1,2]

