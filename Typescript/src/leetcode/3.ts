// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

function lengthOfLongestSubstring(s: string): number {
    let maxString : number = 0;
    let tempMaxString : number = 0;
    let hashMap = new Map()
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        if (!hashMap.has(s[i]) || hashMap.get(s[i]) < start){
            hashMap.set(s[i], i);
            tempMaxString ++ ;
        }else{
            if (hashMap.get(s[i]) >= start){
                start = hashMap.get(s[i]) + 1
                tempMaxString = i - hashMap.get(s[i])
                hashMap.set(s[i], i);
            }
        }
        if (tempMaxString > maxString){
            maxString = tempMaxString
        }
    }
        
    return maxString
};
const Input = "tmmzuxt" 
console.log(lengthOfLongestSubstring(Input));
