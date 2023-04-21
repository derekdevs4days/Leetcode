/*
You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.


Example 1:
Input: s = "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

Example 2:
Input: s = "azxxzy"
Output: "ay"
 

Constraints:
1 <= s.length <= 105
s consists of lowercase English letters.
*/

/*
input: string
output: string with all adjacent duplicates removed

Algorithm:
- declare stack

- iterate through input
  - if current char is the same as top of the stack and stack has element in it
    - remove top of stack
  - else 
    - push current element into stack

return stack converted to string.
*/

const removeDuplicates = function(s) {
  const stack = [];
  for (const char of s) {
    if (stack.length > 0 && char === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
}


console.log(removeDuplicates("abbaca") === "ca")
console.log(removeDuplicates("azxxzy") === "ay")
