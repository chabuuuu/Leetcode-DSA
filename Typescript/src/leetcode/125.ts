/*
125. Valid Palindrome
Easy
Topics
Companies
A phrase is a palindrome if, after converting all uppercase letters 
into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters 
include letters and numbers.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

function isPalindrome(s: string): boolean {
    
    //Format the string
    s = s.toLowerCase();
    s = s.replace(/[ ,_\.{}\(\)\-<>?@/\[|\]#:"'+\=\-\_\;\!\\\`]/g, "");
    
    for (let i = 0; i < s.length; i ++){
        if (s[i] !== s[s.length - i - 1]){
            return false;
        }
    }
    
    return true;
};

const input125 = "0P"
console.log(isPalindrome(input125));
