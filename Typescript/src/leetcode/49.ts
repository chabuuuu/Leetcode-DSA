// 49. Group Anagrams
// Medium
// Topics
// Companies
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
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

function groupAnagrams(strs: string[]): string[][] {
    let hashMap: any = new Map();
    if (strs.length === 1 && strs[0] === '') {
        return [['']];
    }
    if (strs.length === 1 && strs[0] !== '') {
        return [[strs[0]]];
    }
    strs.forEach((str) => {
        let sortedStr = sortStr(str);
        if (!hashMap.has(sortedStr)) {
            hashMap.set(sortedStr, []);
        }
        hashMap.get(sortedStr).push(str);
    });        
    return Array.from(hashMap.values());
}

function sortStr(str: string) {
    return str.split('').sort().join('');
}

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

console.log(groupAnagrams(strs));
