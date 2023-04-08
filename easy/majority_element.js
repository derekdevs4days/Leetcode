/**
 * 
 Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 
Follow-up: Could you solve the problem in linear time and in O(1) space?
 */

/*
input: array of int
output: int that repeats more than n / 2

algorithm:

- initialize hashmap
- variable to hold majority number

- iterate through input
  - if el is in hashmap
    - increment
  - if el is not in hashmap
    - add to hashmap

  - if el is greater than majority number return el
*/

const majorityElement = function(nums) {
  const hash = new Map();
  const majority = nums.length / 2;

  for (let el of nums) {
    hash.set(el, hash.get(el) + 1 || 1);
    if (hash.get(el) > majority) return el;
  }
}

console.log(majorityElement([3,2,3]) === 3);
console.log(majorityElement([2,2,1,1,1,2,2]) === 2);
