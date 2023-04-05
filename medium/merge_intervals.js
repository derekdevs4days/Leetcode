/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 
Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 
Constraints:
1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/

/*
 input: 2d array with subarrays with 2 elements.
 output: 2d array with overlapping subarrays merged

 - sort subarray
 - initialize an array with input[0]
 - iterate through input starting at index 1
    - curr
    - check if curr and last sub in results overlaps 
        - yes => reassign last sub with largest range between the two
        - no => push current curr

 - return results;
*/
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const results = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
     const curr = intervals[i];
     const prev = results[results.length - 1];
     if (prev[1] >= curr[0]) {
        prev[1] = Math.max(prev[1], curr[1]);
     } else {
        results.push(curr);
     }
  }

  return results;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]])) //[[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])) //[[1,5]]
console.log(merge([[1,4],[2,3]])) //[1,4]