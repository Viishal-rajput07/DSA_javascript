/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:
nums = [1,4]

Output :[[1,4],[4,1]]

Example 2:
nums = [1,4,5]

Output :[[1,4,5],[1,5,4],[4,1,5],[4,5,1],[5,1,4],[5,4,1]]


Time complexity = 0(n x n!)
Space complexity = 0(n)
*/

const permute = function (nums) {
    //Write code here

    let res = []
    let n = nums.length
    function helper(i) {

        // base case
        if (i === n - 1) {
            res.push([...nums])
            return
        }

        // recursive case
        for (let j = i; j < n; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
           
             helper(i + 1);
    
            //reverting changes
             [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }
    helper(0)
    return res
}

console.log(permute([1, 2, 3]))