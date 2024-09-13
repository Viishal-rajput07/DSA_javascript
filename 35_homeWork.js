/*
Coding Exercise: Max Subarray
Given an integer array nums, find the subarray with the largest sum, and return its sum.

Example :

Input: nums = [1,2,-10,3,9]
Output: 12
Explanation: The subarray [3,9] has the largest sum 12.
*/

const maxSubArray = (nums) =>{
    // Initialize maxSum to the smallest possible value
    let maxSums = -Infinity;

    // Initial sum of the current subarray
    let sumCurrentSubarray = 0;

    for(let num of nums){
        // Add the current number to the current subarray sum
        sumCurrentSubarray += num
        console.log(sumCurrentSubarray, maxSums )

        if(sumCurrentSubarray > maxSums){
            // Update maxSum if the current subarray sum is greater
            maxSums = sumCurrentSubarray
        }

        if(sumCurrentSubarray < 0){
            // Reset the current subarray sum if it becomes negative
            sumCurrentSubarray = 0
        }
    }
    return maxSums

}
console.log(maxSubArray([1,3,-10,4,9]))
