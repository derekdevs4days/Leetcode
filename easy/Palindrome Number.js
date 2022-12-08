/*
Given an integer x, return true if x is a palindrome, and false otherwise.

 
Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Algorithm:
- convert number into string
- declare variables and set it to first and last index.
  - if elements at two pointers are the same move pointers
  - else return false;
- return true once no more iteration
 */

const isPalindrome = function(num) {
  num = String(num)
  let [left, right] = [0, num.length - 1];
  console.log(left, right)
  while (left < right) {
    if (num[left] !== num[right]) return false;
    left++;
    right--;
  }
  return true;
}
console.log(isPalindrome(-121))