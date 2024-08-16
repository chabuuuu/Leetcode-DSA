// 347. Top K Frequent Elements
// Medium
// Topics
// Companies
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
function topKFrequent(nums: number[], k: number): number[] {
    let hashMap = new Map();
    for (let i = 0; i < nums.length; i ++){
        if (!hashMap.has(nums[i])){
            hashMap.set(nums[i], 1)
            continue;
        }
        let value = Number(hashMap.get(nums[i])) + 1        
        hashMap.set(nums[i], value);
    }    
    return sortHashByValue(hashMap).slice(0, k)
};

function sortHashByValue(hashMap: Map<number, number>) {
    const sortedMap = new Map(Array.from(hashMap).sort((a, b) => b[1] - a[1]))    
    return Array.from(sortedMap.keys())
}
const nums = [1,1,1,2,2,3]
const k = 2
console.log(topKFrequent(nums, k));
