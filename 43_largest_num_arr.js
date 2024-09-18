/*
Coding Exercise: Largest Number
Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.



Example 1:

Input: nums = [10,2]
Output: "210"
*/
// Brute force, T=0(nlogn), S=0(1)
const largestNum = (nums) => {

    let sortedLargestNum = nums.sort((a, b) => {
        let aStr = a.toString()
        let bStr = b.toString()
        console.log(aStr, bStr)

        return (bStr + aStr) - (aStr + bStr)
    })

    if (sortedLargestNum[0] === 0) return "0"

    let largestNum = sortedLargestNum.join("")
    return largestNum
}
console.log(largestNum([3, 30, 34, 5, 9]))

var largestNumber = function (nums) {

    // Convert numbers to strings to facilitate concatenation comparison
    let str_nums = nums.map(String);

    // Sort the numbers using a custom comparator function
    str_nums.sort((x, y) => {

        // Concatenate in different orders to see which forms the larger number
        let order1 = x + y;
        let order2 = y + x;

        // Return -1 if order1 should come before order2, otherwise return 1
        return order2.localeCompare(order1);
    });

    // Join the sorted numbers into a single string
    let largest_num = str_nums.join('');

    // Handle the case where the number may be something like '00...0'
    if (largest_num[0] === '0') {
        return '0';
    }

    return largest_num;
};