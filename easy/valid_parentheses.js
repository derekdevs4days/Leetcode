/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 1:
Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 
Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/

/*

input: string containing open and close parentheses
ouput: true if every closing p has an open p of the same type and in order

Algorithm:
 - initialize and empty array as a stack
 - initialize dictionary and add parentensis

 - iterate through string
    - IF char is opening p add to stack
    - ELSE
        - declare a variable 'last' and initialize it to the last element in stack
        - IF dictionary value of 'last' !== current char
            - return false

 - return true if stack is empty
*/

const isValid = function (s) {
  const stack = [];
  const dictionary = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let char of s) {
    if (dictionary.hasOwnProperty(char)) {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (char !== dictionary[last]) return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
