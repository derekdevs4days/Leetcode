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
Algorithm:
 - declare a current variable and assign it to the input numeber
 - declare a reversed variablke and set it to 0
 
 - while the current number is greater than 0
   - reversed is reassigned to (reversed * 10) + (current % 10) 
   [(current % 10) grabs the last number from the current varable. We add this to (reversed * 10) which shifts the current number over 1 multiple. This is so that we can concatenate the last number of current to the reversed number.]
   - current is reassasigned to Math.floor(current / 10)
   [this REMOVES the last number of current so that the next iteration (current % 10) will grab the next last number.]
 
 - return x === reversed
*/

var isPalindrome = function (x) {
  let current = x;
  let reversed = 0;
  
  while (current > 0) {
     reversed = (reversed * 10) + (current % 10);
     current = Math.floor(current / 10);
  }
 
  return x === reversed;
};
