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

Algorithm:
- delcare map (mapPatternWord) that has pattern char and word
- declare map (mapWordPattern) that has word and pattern char
- convert s to array
- iterate through inputs:
  - if patternWord has current pattern and wordPattern value is not pattern return false;
  - if wordPattern has current word and patternWord value is not word return false;
  - set pattern and word to mapPatternWord
  - set word and pattern to mapWordPattern
-return true;

 */

const wordPattern = function(pattern, s) {
  s = s.split(' ');
  if (s.length !== pattern.length) return false
  const mapPatternWord = new Map();
  const mapWordPattern = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const currPattern = pattern[i];
    const currWord = s[i];

    if (mapPatternWord.has(currPattern) && mapPatternWord.get(currPattern) !== currWord) return false;
    if (mapWordPattern.has(currWord) && mapWordPattern.get(currWord) !== currPattern) return false;
    mapPatternWord.set(currPattern, currWord);
    mapWordPattern.set(currWord, currPattern);
  }
  return true;
}
console.log(wordPattern("abba", "dog cat cat dog"));