/*
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

Algorithm:
- declare 'major' and set it to []
- declare 'seen' and set it to an empty hashmap

- iterate through input and build out hashmap
    - if value is greater than n/3 ... add to key to major

- return major
*/

const majorityElement = function(nums) {
  const major = [];
  const seen = new Map();
  const min = (nums.length / 3);

  for (let el of nums) {
    if (seen.has(el)) {
      const newVal = (seen.get(el) + 1);
      seen.set(el, newVal);
    } else {
      seen.set(el, 1);
    }

    if (seen.get(el) > min) major.push(el);
  }
  return [... new Set(major)];
}

console.log(majorityElement([3,2,3, 3, 3, 3,]))
console.log(majorityElement([1]))
console.log(majorityElement([1,2]))