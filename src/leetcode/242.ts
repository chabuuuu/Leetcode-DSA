// 242. Valid Anagram
// Easy
// Topics
// Companies
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
function isAnagram(s: string, t: string): boolean {
    let s_hashArray: any = {};
    let t_hashArray: any = {};
    if (s.length !== t.length) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        // s tring
        if (t_hashArray.hasOwnProperty(s[i])) {
            if (t_hashArray[s[i]] > 1) {
                t_hashArray[s[i]]--;
            } else {
                delete t_hashArray[s[i]];
            }
        } else {
            if (s_hashArray.hasOwnProperty(s[i])) {
                s_hashArray[s[i]]++;
            } else {
                s_hashArray[s[i]] = 1;
            }
        }

        // t string
        if (s_hashArray.hasOwnProperty(t[i])) {
            if (s_hashArray[t[i]] > 1) {
                s_hashArray[t[i]]--;
            } else {
                delete s_hashArray[t[i]];
            }
        } else {
            if (t_hashArray.hasOwnProperty(t[i])) {
                t_hashArray[t[i]]++;
            } else {
                t_hashArray[t[i]] = true;
            }
        }
    }
    if (
        Object.keys(t_hashArray).length !== 0 ||
        Object.keys(s_hashArray).length !== 0
    ) {
        return false;
    }
    return true;
}
const s = 'aacc';
const t = 'ccac';
console.log(isAnagram(s, t));
