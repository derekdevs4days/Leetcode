/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
 
Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

/*
input: array of at least 1 str el
      - str el can be empty str
      - will only contain lowercaseletters

output: 2d array with subarrays contain all el that are anagrams
      - can return in any order

algorithm:

  - initialize a hashmap

  - iterate through input
      - declare 'key' and initialize it to current el sorted in lexigraphical order
      
      - if key is in hashmap
        - grab the value and push current word to it
      - else 
        - set current key and the value to array containing word
      
  - return an array containing values of hashmap

*/

const groupAnagrams = function(strs) {
  const hash = new Map();

  for (let word of strs) {
    const key = word.split('').sort().join('');

    if (hash.has(key)) {
      hash.get(key).push(word);
    } else {
      hash.set(key, [word]);
    }
  }

  return Array.from(hash.values());
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))