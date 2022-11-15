/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true

Algorithm:
  - declare a new map
  - iterate through s and add char of s with value of t
      - only do this if s does not exist in map
  - turn values of the map into a string and compare with t
*/
function isIsomorphic(s, t) {
  let mapST = new Map();
  let mapTS = new Map();
  for (let i = 0; i < s.length; i++) {
    const c1 = s[i];
    const c2 = t[i];
    if ((mapST.has(c1) && mapST.get(c1) !== c2) || (mapTS.has(c2) && mapTS.get(c2) !== c1)) return false;
    mapST.set(c1, c2);
    mapTS.set(c2, c1);
  }
  return true;
}
console.log(isIsomorphic('egg', 'add'))