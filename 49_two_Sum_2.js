/*
Coding Exercise: Two Sum 2
Two Sum II

Given a 1-indexed array of integer numbers that is already sorted in non-decreasing order, find two numbers 
such that they add up to a specific target number.
Return the indices of the two numbers, index1 and index2, array [index1, index2] of length 2.
It is guaranteed that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

Example: Input: numbers = [1,3,4], target = 5; Output: [1,3]
*/

// T=0(n) | S=0(1)
const twoSum = (numbers, target) => {

    let i = 0
    let j = numbers.length - 1

    while (i < j) {
        let currentSum = numbers[i] + numbers[j]

        if (currentSum === target) {
            return [i + 1, j + 1]
        }
        else if (currentSum > target) {
            j--
        }
        else {
            i++
        }
    }
}

console.log(twoSum([1, 2, 3, 4, 8], 9))