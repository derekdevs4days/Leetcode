/*
You are given an integer array nums and two integers indexDiff and valueDiff.

Find a pair of indices (i, j) such that:

i != j,
abs(i - j) <= indexDiff.
abs(nums[i] - nums[j]) <= valueDiff, and
Return true if such pair exists or false otherwise.

Example 1:
Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
Output: true
Explanation: We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --> 0 != 3
abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0

Example 2:
Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
Output: false
Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.

Constraints:
2 <= nums.length <= 105
-109 <= nums[i] <= 109
1 <= indexDiff <= nums.length
0 <= valueDiff <= 109

Algorithm:
- declare a hashmap (mapIndex) that has element and its index
- declare a hashmap (mapValue) that has element and its value

- iterate through input
    -return true if ...
        - mapIndex contains current element
        - mapIndex value - current index <= indexDiff
        - mapValue value - current value <= valueDiff
      - set current element and index to mapIndex
      - set current element and value to mapValue
- return false
 */

const containsNearbyAlmostDuplicates = function(nums, indexDiff, valueDiff) {
  const mapIndex = new Map();
  const mapValue = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currEl = nums[i];
    
    const correctIdxDiff = Math.abs(mapIndex.get(currEl) - i) <= indexDiff;
    const correctValDiff = Math.abs(mapValue.get(currEl) - currEl) <= valueDiff;
    if (correctIdxDiff && correctValDiff) return true;

    mapIndex.set(currEl, i);
    mapValue.set(currEl, currEl);
  }
  return false;
}

console.log(containsNearbyAlmostDuplicates([1,2,3,1], 3, 0));
console.log(containsNearbyAlmostDuplicates([1,5,9,1,5,9], 2, 3));