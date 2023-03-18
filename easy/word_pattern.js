/*

Given a pattern and a string s, find if s follows the same pattern.
Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.


Example 1:
Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:
Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
 

Constraints:
1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.

*/

/*

input: 'pattern' which is a strings of letters
       's' which is a string of words separtated by spaces

output: boolean
        - true if the words matches the pattern
        - false if it doesn't
  
Algorithm:
  - declare a map called patternToWord
  - declare a map called wordToPattern
  - convert 's' into an array where each element is a string

  - iterate through 'pattern' with indices
    - declare variable 'currentPattern'
    - declare variable 'currentWord'

    - if 'currentPattern' exists in the 'patternToWord' map AND the value of 'currentPattern' does not equal 'currentWord' => RETURN FALSE
    - if 'currentWord' exists in the 'wordToPattern' map AND the value 'currentWord' does not equal 'currentPattern' => RETURN FALSE

    - add currentPattern and currentWord to 'patternToWord'
    - add currentWord and currentPattern to 'wordToPattern'

  - return TRUE
  
*/

function wordPattern(pattern, s) {
  const patternToWord = new Map();
  const wordToPattern = new Map();

  s = s.split(" ");
  if (pattern.length !== s.length);

  for (let i = 0; i < pattern.length; i++) {
    let currentPattern = pattern[i];
    let currentWord = s[i];

    if (
      patternToWord.has(currentPattern) &&
      patternToWord.get(currentPattern) !== currentWord
    )
      return false;
    if (
      wordToPattern.has(currentWord) &&
      wordToPattern.get(currentWord) !== currentPattern
    )
      return false;

    patternToWord.set(currentPattern, currentWord);
    wordToPattern.set(currentWord, currentPattern);
  }

  return true;
}

console.log(wordPattern("abba", "dog cat cat dog") === true);
console.log(wordPattern("abba", "dog cat cat fish") === false);
console.log(wordPattern("aaaa", "dog cat cat dog") === false);
