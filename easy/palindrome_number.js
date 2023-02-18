/*
Given an integer x, return true if x is a 
palindrome , and false otherwise.

 
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
 

Constraints:
-231 <= x <= 231 - 1
 
Follow up: Could you solve it without converting the integer to a string?
*/

/*
input: number
output: boolean

check if the number is the same if it was reverse

algorithm:
 - convert number into a string
 - compare if that string is equals to that string conververted into an array, reverse, and joined back together as a string.
*/

var isPalindrome = function (x) {
  return String(x) === String(x).split("").reverse().join("");
};

/*
algorithm:

  - convert number input to array

  - declare left pointer
  - declare right pointer

  - while the left pointer is less than right pointer
    - check to see if element at left pointer is the same as element at right pointer
      - IF NOT => return false;
    
    - increment left pointer
    - decrement right pointer

  - return true after breaking out of while loop
*/

var isPalindrome = function (x) {
  const numsArr = String(x).split("");
  let [left, right] = [0, numsArr.length - 1];

  while (left < right) {
    if (numsArr[left] !== numsArr[right]) return false;
    left++;
    right--;
  }

  return true;
};

/*
algorithm:
  - set up a guard clause that return false if a number is negative

  - declare an "orginal" variable that is the original input
  - declare "reverse" variable that will be used to assign reverse numbers

  - while input is greater than zero
    - grab the last number (reassign reverse to reverse * 10 + (input % 10))
    - update input... input / 10 then floor that number. (this will remove the last number from input so we can grab the next last number)

  - check if original is the same as reversed. return true or false

*/

var isPalindrome = function (x) {
  if (x < 0) return false;

  const original = x;
  let reversed = 0;

  while (x > 0) {
    reversed *= 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return original === reversed;
};
