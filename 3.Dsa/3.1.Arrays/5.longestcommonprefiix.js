// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

function longestCommonPrefix(strs) {
  // take first string to compare with other strings
  let prefix = strs[0];

  // start with second string i.e index 1
  for (let i = 1; i < strs.length; i++) {
    // create a inner loop to compare characters between two strings
    let j = 0;

    // as long as it is less than minimum length of prefix or string carry on
    while (j < Math.min(prefix.length, strs[i].length)) {
      // untill character does not match
      if (prefix[j] !== strs[i][j]) {
        break;
      }
      // increment the counter as long as it matches
      j++;
    }

    prefix = prefix.slice(0, j);
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
