/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

Algorith:
  - declare an empty obj
  - iterate through input 
      - add elements to obj and the time they appear as values
      - if value is greater than (length of input) / 2 => return key
 */

const majorityElement = function(nums) {
  const seen = {};
  for (let el of nums) {
    seen[el]? seen[el]++ : seen[el] = 1;
    const isMajority = seen[el] > nums.length / 2;
    if (isMajority) return el; 
  }
} 

console.log(majorityElement([2,2,1,1,1,2,2]))