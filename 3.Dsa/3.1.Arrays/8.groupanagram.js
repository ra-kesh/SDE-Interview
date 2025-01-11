// Given an array of strings strs, group the
// anagrams
//  together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

function groupAnagrams(strs) {
  const res = {};
  for (let str of strs) {
    const count = new Array(26).fill(0);
    for (let char of str) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    const key = count.join(",");

    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(str);
  }
  return Object.values(res);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

function groupAnagramsbySort(strs) {
  let map = {};

  for (let str of strs) {
    const key = str.split("").sort().join("");

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(str);
  }

  return Object.values(map);
}

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));
