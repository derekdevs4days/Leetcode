/*
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]
Example 2:

Input: nums = [1,1,2]
Output: [1]
Example 3:

Input: nums = [1]
Output: []

Constraints:
n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
Each element in nums appears once or twice.

Algorithm:
- declare variable final and set to an empty array.
- declare variable seen and set it to an empty object.
- iterate through input
    - if element is already in the empty object => increment value by 1
    - if not => set the value to 1
    - have a conditional that checks if the the value is > 1
        - if yes => push key to final
- return final
 */

const findDuplicates = function(nums) {
  const final = [];
  const seen = {};
  nums.forEach(el => {
    seen[el]? seen[el]++ : seen[el] = 1;
    if (seen[el] > 1) final.push(el);
  })
  return final;
}

console.log(findDuplicates([4,3,2,7,8,2,3,1]))