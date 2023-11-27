/**
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

 

Example 1:
Input: strs =  ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
 */


/*

Algo
- alphabetically sort array
- iterate through the the first element
  - IF current char of first element is the same as current char of the last element
    - append to empty string
  - ELSE 
    - break

- return string
*/

function longestCommonPrefix(strs) {
  let result = '';
  strs = strs.sort();


  const min = strs[0];
  const max = strs[strs.length - 1];

  for (let i = 0; i < min.length; i++) {
    if (min[i] === max[i]) {
      result += min[i];
    } else {
      break;
    }
  }

  return result;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));