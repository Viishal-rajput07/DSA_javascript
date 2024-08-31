/**
Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.

Example : 
nums = [1,3,3]
Output =
[
[],
[1],
[3],
[1,3],
[3,3],
[1,3,3]
]

Time Complexity = 0(n x 2^n)
space Complexity = 0(n)
*/

function subSetsWithDuplicate(nums){
    let res = []

    nums.sort((a,b )=> a-b)
    function subsets(index, curr){
        // base case
        if(index === nums.length){
            res.push([...curr])
            return
        }

        // recursive case
        // Include
        curr.push(nums[index]);
        subsets(index+1, curr)
        curr.pop()

        //exclude
        //1,3,3,3,7
        //1,3,3,3,3
        while(nums[index] === nums[index+1] && index < nums.length-1){
            index++
        }
        subsets(index+1, curr)
    }
    subsets(0, [])
    return res;
}

console.log(subSetsWithDuplicate([1,2,2]))