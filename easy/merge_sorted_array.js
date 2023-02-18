/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 
Constraints:
nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
 

Follow up: Can you come up with an algorithm that runs in O(m + n) time? 

*/

/*

input: 2 arrays in non decreasing order,
      n & m which represents the number of element in the two given array

output: DONT RETURN. Only modify num1 into a sorted array from the 2 given array in ascending order.

algorithm:

- declare a variable named 'nums1Index' that reprensents the last index of valid numbers in nums1

- delcare a variable named 'nums2Index' that represents the last index of numbers in nums2

- declare a variable named 'mergedArrayIndex' that represents the last index of the merged array.

- initialize a while loop (while there are still numbers in the nums2 array)
    - if current number in nums1 > current in nums2
        - YES => reassign last index of nums1 to current number at nums1
          - decrement nums1Index (so we can look at the previous number)

        - NO => reassign last index of nums1 to current number at nums2
          - decrement nums2Index (so we can look at the previous number)

    - decrement mergedArrayIndex so we can compare the previous element

*/

var merge = function (nums1, m, nums2, n) {
  let nums1Index = m - 1;
  let nums2Index = n - 1;
  let mergedArrayIndex = m + n - 1;

  while (nums2Index >= 0) {
    if (nums1[nums1Index] > nums2[nums2Index]) {
      nums1[mergedArrayIndex] = nums1[nums1Index];
      nums1Index--;
    } else {
      nums1[mergedArrayIndex] = nums2[nums2Index];
      nums2Index--;
    }
    mergedArrayIndex--;
  }
};
