//217. Contains Duplicate
//Given an integer array nums,
//return true if any value appears at least twice in the array,
//and return false if every element is distinct.
function containsDuplicate(nums: number[]): boolean {
    let hashArray: any = {};
    for (let i = 0; i < nums.length; i++) {
        const valueInString = nums[i].toString();
        if (hashArray.hasOwnProperty(valueInString)) {
            return true;
        }
        hashArray[valueInString] = 1;
    }
    return false;
}
let input = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]; //true
console.log(containsDuplicate(input));
