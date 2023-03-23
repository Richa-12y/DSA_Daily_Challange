const str = "coderbyte";
const newstr = str.split("").reverse().join("");
console.log(newstr);

//Input: s = "abcabcbb"
//Output: 3
//Explanation: The answer is "abc", with the length of 3.

//
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

function lengthOfLongestSubstring(s) {
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    let substring = [s[i]];
    // console.log(substring);
    for (let j = i + 1; j <= s.length - 1; j++) {
      if (substring.includes(s[j])) {
        break;
      } else {
        substring.push(s[j]);
      }
    }
    if (substring.length > length) {
      length = substring.length;
    }
  }
  return length;
}
const result = lengthOfLongestSubstring("abcabcbb");
console.log(result);

//Longest Palindromic Substring
//Input: s = "babad"
//Output: "bab"
