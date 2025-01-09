// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

// Follow-up: Could you solve the problem in linear time and in O(1) space?

// boyer-more algorithm - can only be used if there is guranteed majority element in an array

function majorityElement(nums) {
  let res = 0,
    count = 0;

  for (let num of nums) {
    if (count === 0) {
      res = num;
    }

    count += num === res ? 1 : -1;
  }

  return res;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

function majorityElementHashMap(nums) {
  let count = new Map();
  let res = 0,
    maxCount = 0;

  for (let num of nums) {
    if (count.has(num)) {
      count.set(num, count.get(num) + 1);
    } else {
      count.set(num, 1);
    }

    if (count.get(num) > maxCount) {
      res = num;
      maxCount = count.get(num);
    }
  }

  return res;
}

console.log(majorityElementHashMap([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElementHashMap([2, 2, 4, 4, 4, 4, 4, 4, 2, 2]));
