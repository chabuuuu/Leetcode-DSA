// 238. Product of Array Except Self
// Medium
// Topics
// Companies
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

function productExceptSelf(nums: number[]): number[] {
    let temp_product = 1;
    let result_array = new Array();
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 ){
            result_array[0] = 1;
            continue;
        }
        temp_product *= nums[i - 1]
        result_array[i] = temp_product
    }

    temp_product = 1;
    for (let k = nums.length - 1; k >= 0; k--){
        if (k === nums.length - 1){
            continue
        }
        temp_product *= nums[k + 1]
        result_array[k] *= temp_product
    }

    return result_array

}
const num = [-1,1,0,-3,3]
console.log(productExceptSelf(num));

