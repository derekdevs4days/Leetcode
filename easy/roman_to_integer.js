/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:
Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:
1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999]. */

/*
input: string of roman chars
output: int

convert roman chars in to numbers

Algorithm:
  - create a obj of values for roman chars
  - delcare a result variable and set it to 0

  - iterate through input with index
    - if current char is less than next char
      - subtract (next char) from (current char) and add it to result
      - increment current index
    - else
      - result add (current char)
  
  - return result
*/

var romanToInt = function (s) {
  const ROMAN = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let curr = ROMAN[s[i]];
    let next = ROMAN[s[i + 1]];

    if (curr < next) {
      result += next - curr;
      i++;
    } else {
      result += curr;
    }
  }

  return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));

/*
Algorithm:
  - create a obj of values for roman chars
  - delcare a result variable and set it to 0

  - iterate through input with index
    - if curr < next
      - result subtract curr
    - else
      result add curr 
  
  - return result
*/

var romanToInt2 = function (s) {
  const ROMAN = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let curr = ROMAN[s[i]];
    let next = ROMAN[s[i + 1]];
    curr < next ? (result -= curr) : (result += curr);
  }

  return result;
};
console.log(romanToInt2("III"));
console.log(romanToInt2("LVIII"));
console.log(romanToInt2("MCMXCIV"));
