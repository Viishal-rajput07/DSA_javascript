/*
Coding Exercise: LIS
Given an integer array nums, return the length of the longest strictly increasing

subsequence.
Example 1:

Input: nums = [300,9,2,5,3,7,500,400]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,500], 
therefore the length is 4.
*/

//Approach 1: Recursion, T=O(2^n) , S=O(n)
const lengthOfLIS = (nums) => {

    let n = nums.length;

    function helper(curr, prev){

        if(curr>=n) return 0;

        let exlude = helper(curr+1, prev);
        let include = 0

        if(prev === -1 || nums[curr] > nums[prev]){
            include = 1 + helper(curr+1, curr)
        }

        return Math.max(include, exlude)
    }

    return helper(0, -1);
}

console.log(lengthOfLIS([300,9,2,5,3,7,500,400]));

//Approach 2: Memoization, T=O(n^2) , S=O(n^2)
const lengthOfLISMemo = (nums) => {

    let n = nums.length;
    let dp = Array.from({length: n}, ()=> Array(n).fill(-1));
    function helper(curr, prev){
        
        if(curr>=n) return 0;

        if(dp[curr][prev+1] !== -1){
            return dp[curr][prev+1]
        }

        let exclude = helper(curr+1, prev);
        let include = 0

        if(prev === -1 || nums[curr] > nums[prev]){
            include = 1 + helper(curr+1, curr)
        }

        dp[curr][prev+1] = Math.max(include, exclude)

        return dp[curr][prev+1]
    }

    return helper(0, -1);
}

console.log(lengthOfLISMemo([300,9,2,5,3,7,500,400]));
