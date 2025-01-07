// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// Solution 1

function twoSum(nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// solution 2

function twoSumOnepass(nums, target) {
  // create a hashmap to store previous values
  const prevMap = new Map();

  // iterate through numbers
  for (let i = 0; i < nums.length; i++) {
    // look for difference between target and indices
    const difference = target - nums[i];
    // if hashmap has difference then return the value of difference along with current indices
    if (prevMap.has(difference)) {
      return [prevMap.get(difference), i];
    } else {
      //   if not add the value with current index
      prevMap.set(nums[i], i);
    }
  }

  return [-1, -1];
}

console.log(twoSum([2, 3, 4, 5], 5));
console.log(twoSumOnepass([2, 3, 4, 5], 5));
