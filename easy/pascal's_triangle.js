/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]


Algorithm:

- initialize a results array with [1] and [1, 1] subarray.

- while numRows is greater than 0
  - initialize a subArray variable with number 1
  - iterate through current array
    - push the some of first and second el to subarray

  - push 1 in subarray
  - push subarray into results
  - decriment rows

- return results
*/

function generate(rows) {
  if (rows === 1) return [[1]];
  rows -= 2;
  const result = [[1], [1, 1]];

  while (rows) {
    const subArray = [1];
    const lastSubArr = result[result.length - 1];
    for (let i = 0; i < lastSubArr.length - 1; i++) {
      subArray.push(lastSubArr[i] + lastSubArr[i + 1]);
    }
    subArray.push(1);
    result.push(subArray);
    rows--;
  }
  
  return result;
}


console.log(generate(5));
console.log(generate(6));
console.log(generate(1));