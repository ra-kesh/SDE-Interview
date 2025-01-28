// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

function topKfrequent(nums, k) {
  // count the frequency

  let freqMap = new Map();

  for (let num of nums) {
    if (freqMap.has(num)) {
      freqMap.set(num, freqMap.get(num) + 1);
    } else {
      freqMap.set(num, 1);
    }
  }

  // max frequency

  let maxFreq = Math.max(...freqMap.values());

  // create buckets for each frequency

  let buckets = new Array(maxFreq + 1).fill(null).map(() => []);

  //  populate the buckets

  freqMap.forEach((count, num) => buckets[count].push(num));

  // collect the top k element

  let result = [];

  for (let i = maxFreq; i >= 1 && result.length < k; i--) {
    if (buckets.length > 0) {
      for (let num of buckets[i]) {
        result.push(num);
        if (result.length === k) {
          break;
        }
      }
    }
  }

  return result;
}

console.log(topKfrequent([1, 1, 1, 2, 2, 3], 2));
