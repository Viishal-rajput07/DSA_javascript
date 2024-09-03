/*
Coding Exercise: Target Sum
You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".

Return the number of different expressions that you can build, which evaluates to target.

Example 1:

Input: nums = [1,1,1,1], target = 2
Output: 4
Explanation: There are 4 ways to assign symbols to make the sum of nums be target 2.
-1 + 1 + 1 + 1  = 2
+1 - 1 + 1 + 1  = 2
+1 + 1 - 1 + 1  = 2
+1 + 1 + 1 - 1  = 2
*/

// Approach 1: recursion, T=O(2^n) , S=O(n)
const targetSumRecursion = (nums, target) =>{
    function helper(index, currsum){

        if(index === nums.length){
            return currsum === target ? 1 : 0
        }

        let add = helper(index +1, currsum + nums[index])
        let subtract = helper(index +1, currsum - nums[index])
        return  add + subtract
    }
    return helper(0, 0)
}
console.log(targetSumRecursion([1,1,1,1,1], 3));


// Approach 2: recursion with memoization / top down, T=O(n*m) , S=O(n*m), where m is possible sums
const targetSum = (nums, target) =>{
    let memo = {}
    function helper(index, currsum){
    
        let key = `${index}_${currsum}`

        if(key in memo){
            return memo[key];
        }

        if(index === nums.length){
            return currsum === target ? 1 : 0
        }

        let add = helper(index +1, currsum + nums[index])
        let subtract = helper(index +1, currsum - nums[index])

        memo[key] =  add + subtract

        return memo[key]
    }
    return helper(0, 0)
}
console.log(targetSum([1,1,1,1,1], 3));
