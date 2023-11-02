/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false

*/

function isSubsequence(s, t) {
  const stack = s.split('').reverse();

  for (let char of t) {
    if (stack[stack.length - 1] === char) {
      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(isSubsequence('abc', 'ahbgdc'));