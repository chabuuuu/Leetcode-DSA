/*
128. Longest Consecutive Sequence

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

function longestConsecutive(nums: number[]): number {

    //Check if array nums is empty
    if (nums.length === 0){
        return 0;
    }

    const arrayMap = new Map<number, boolean>();

    //Add to map while sorting the list
    const sortedNums = nums.sort((a, b) => {
        //Set for map
        if (!arrayMap.has(a)){
            arrayMap.set(a, false)
        }
        if (!arrayMap.has(b)){
            arrayMap.set(b, false)
        }
        return a - b;
    })

    let result = 1;
    let count = 1;
    let tempPrevious = sortedNums[0];
    for (let i = 1; i < sortedNums.length; i ++){

        const currentElement = sortedNums[i];
        
        //If map does not have this element => That mean is not concurence anymore
        if (!arrayMap.has(currentElement)){
            count = 0;
            continue;
        }

        //If we already read this currentElement in the past => skip it
        if (arrayMap.get(currentElement) === true){
            continue;
        }

        arrayMap.set(currentElement, true);

        if (currentElement - tempPrevious !== 1){
            tempPrevious = currentElement;
            count = 1;
            continue;
        }

        tempPrevious = currentElement;
        count ++;
        if (count > result){
            result = count;
        }
    }

    return result;
};
// 0, 1, 3, 5, 6
const numberlist = [0,-1]
console.log("result: ", longestConsecutive(numberlist));
