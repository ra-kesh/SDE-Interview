// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.

// Constraints:

// 1 <= nums.length <= 5 * 104
// -5 * 104 <= nums[i] <= 5 * 104

function sortArray(nums) {
  function merge(arr, l, m, r) {
    let temp = [];
    let i = l,
      j = m + 1;

    while (i <= m && j <= r) {
      if (arr[i] <= arr[j]) {
        temp.push(arr[i]);
        i++;
      } else {
        temp.push(arr[j]);
        j++;
      }
    }

    while (i <= m) {
      temp.push(arr[i]);
      i++;
    }

    while (j <= r) {
      temp.push(arr[j]);
      j++;
    }

    for (let k = l; k <= r; k++) {
      arr[k] = temp[k - l];
    }
  }

  function mergeSort(arr, l, r) {
    if (l < r) {
      let m = Math.floor((l + r) / 2);
      mergeSort(arr, l, m);
      mergeSort(arr, m + 1, r);
      merge(arr, l, m, r);
    }
  }

  mergeSort(nums, 0, nums.length - 1);
  return nums;
}

console.log(sortArray([5, 1, 1, 2, 0, 0]));
console.log(sortArray([5, 2, 3, 1]));
