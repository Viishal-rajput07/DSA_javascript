/*
Coding Exercise: Maximum Product Subarray
Given an integer array nums, find a subarray that has the largest product, and return the product.

Example :

Input: nums = [3,3,-2,4]
Output: 9
Explanation: [3,3] has the largest product 9.
*/
const maxProduct = function(nums) {
    let currMin = 1, currMax = 1;  // Start with neutral values for multiplication
    let maxProduct = Math.max(...nums);  // Initialize with the largest single element
 
    for (let num of nums) {
        if (num === 0) {
            currMin = 1;  // Reset if zero encountered, as product would be zero
            currMax = 1;
        } else {
            let a = currMin * num;  // Store current minimum product before it is changed
            let b = currMax * num;
            currMin = Math.min(a, b, num); // Update the current minimum product
            currMax = Math.max(a, b, num);  // Update the current maximum product
            if (currMax > maxProduct) { 
                maxProduct = currMax;  // Update the maximum product found
            }
        }
    }
    return maxProduct;  // Return the highest product of any contiguous subarray
}
console.log(maxProduct([3,3,-2,4,-1]))

