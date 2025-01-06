//   Given two strings s and t, return true if t is an
// anagram
//  of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

function isAnagram(s, t) {
  // check if they are same length or not
  if (s.length !== t.length) {
    return console.log(false);
  }
  // create two hashmaps or objects for storing count
  const countS = {};
  const countT = {};

  // iterate throught both array and count the letters
  for (i = 0; i < s.length; i++) {
    countS[s[i]] = (countS[s[i]] || 0) + 1;
    countT[t[i]] = (countT[t[i]] || 0) + 1;
  }
  // check if count same or not
  for (const key in countS) {
    if (countS[key] !== countT[key]) {
      return console.log(false);
    }
  }
  return console.log(true);
}

isAnagram("listen", "silent");
