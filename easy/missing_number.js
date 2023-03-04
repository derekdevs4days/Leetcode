/*
268. Missing Number

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Example 3:
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
 
Constraints:
n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.
 

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
*/

/*
input: an array containing numbers from [0, n]
output: a number that is missing from the array

Algorithm:
- declare a variable named indexSum and set it to 0 (THIS IS THE SUM OF ALL THE INDECIES BECAUSE THE ARRAY IS 0 - N !!!)
- declare a variable named currentSum and set it to 0 (THIS IS THE SUM OF THE CURRENT ELEMENTS IN THE ARRAY)

- iterate through with indicies and stop at i + 1
  - add current index to indexSum
  - add value of current element to currentSum or 0 if the index is out of range

- return indexSum - currentSum

//To find the missing number... take sum of the indcies and subtract it from the sum of all the elements in the array...
//This only works for arrays that are 0 - N  and all values are unique!!!

*/

const missingNumber = (nums) => {
  let indexSum = 0;
  let currentSum = 0;

  for (let i = 0; i < nums.length + 1; i++) {
    indexSum += i;
    currentSum += nums[i] || 0;
  }

  return indexSum - currentSum;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

/*
Algorithm: (Use gauss sumation to find acutally sum)

- declare a variable n to hold length of array (this is needed in formula)
- declare a variable named gaussSum and set it to (n (n + 1)) / 2;
- declare a variable named actualSum and set it to the sum of all elements in array

- return gaussSum - actualSum;


*/
const missingNumber2 = (nums) => {
  const n = nums.length;
  const gaussSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((a, c) => a + c, 0);

  return gaussSum - actualSum;
};

console.log(missingNumber2([3, 0, 1]));
console.log(missingNumber2([0, 1]));
console.log(missingNumber2([9, 6, 4, 2, 3, 5, 7, 0, 1]));
