/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.


Example 1:
Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]

Example 2:
Input: arr = [400]
Output: [-1]

Constraints:
1 <= arr.length <= 104
1 <= arr[i] <= 105
*/

/*
Algorithm:

- initialize results array with -1 since -1 will always be the last element in the array
- initialize a max variable and assign it the last element

- iterate through input backwards starting with the second to last element
  - push current max into results
  - if current number is greater than max -> update max

- return the results array in reversed

*/
function replaceElements(arr) {
  const result = [-1];
  let max = arr[arr.length - 1];

  for (let i = arr.length - 2; i >= 0; i--) {
    let currNum = arr[i];

    result.push(max);
    if (currNum > max) max = currNum;
  }

  return result.reverse();
}

console.log(replaceElements([17,18,5,4,6,1]));
console.log(replaceElements([400]));