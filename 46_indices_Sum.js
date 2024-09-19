/*
Coding Exercise: Two Sum
Question:

Two Sum - You are given an array of Integers and another integer targetValue. Write a function that will take 
these inputs and return the indices of the 2 integers in the array that add up targetValue.

Try:
Try to optimise your solution and arrive at a Time Complexity of O(n)
Check the Hints section to get a clue
All the best. Keep at it !

*/
// Approach: Brute Force, T=0(n^2) | S=0(1)
const findIndicesSum = (array, targetValue) => {

    let length = array.length

    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (targetValue === array[i] + array[j]) {
                return [i, j]
            }
        }
    }

    return []
}

console.log(findIndicesSum([1, 2, 3, 4, 5], 5));
console.log(findIndicesSum([], 6));


// Approach: Hash table, T=0(n) | S=0(n)
const findIndicesSumGiven = (array, targetValue) => {

    let hashTable = {}
    let neededValue;

    for (let i = 0; i < array.length; i++) {

        neededValue = targetValue - array[i]

        if (neededValue in hashTable) {
            return [i, hashTable[neededValue]]
        }
        else {
            hashTable[array[i]] = i
        }
    }

    return []
}
// {1: 0, 2:1; } [2, 1]
console.log(findIndicesSumGiven([1, -2, 3, 4, 5], 3));
console.log(findIndicesSumGiven([], 6));

