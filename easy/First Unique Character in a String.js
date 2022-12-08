/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1
 
Constraints:
1 <= s.length <= 105
s consists of only lowercase English letters. 

Algorithm:
- declare empty map
- iterate through input and set char and its index to map
    - if char exist in map, resassign the value to -1
- return the first value in the map if it exist otherwise -1

*/
var firstUniqChar = function(s) {
  let seen = new Map();
  
  for (let i = 0; i < s.length; i++) {
    seen.has(s[i])? seen.set(s[i], -1) : seen.set(s[i], i);
  }

  for (let indexes of seen) {
    if (indexes[1] > -1) return indexes[1];
  }
  
  return -1;   
};
console.log(firstUniqChar('leetcode'))