function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left <= right) {
    const mid = Math.floor((high + low) / 2);
    if (arr[mid] === target) return mid;

    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1
    }
  }
  return -1;
}