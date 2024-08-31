/*
Question:

Power Sum - Let’s define a peculiar type of array in which each element is either an integer or 
another peculiar array. Assume that a peculiar array is never empty. Write a function that will 
take a peculiar array as its input and find the sum of its elements. If an array is an element in the 
peculiar array you have to convert it to it’s equivalent value so that you can sum it with the other elements.
Equivalent value of an array is the sum of its elements raised to the number which represents how far nested 
it is. For e.g. [2,3[4,1,2]] = 2+3+ (4+1+2)^2

another example - [1,2,[7,[3,4],2]] = 1 + 2 +( 7+(3+4)^3+2)^2

Time complexity == 0(n) where n is total elements, including elements of all subarrays
*/

/**
 * Calculates the sum of elements in an array, raising the sum to a specified power.
 * If the array contains nested arrays, it recursively processes them, increasing the power for each 
 * level of nesting.
 *
 * @param {Array} array - The array of numbers (or nested arrays) to be summed.
 * @param {number} [power=1] - The power to which the sum will be raised. Defaults to 1.
 * @returns {number} - The sum of the array elements raised to the specified power.
 */
function sumPower(array, power = 1) {
    let sum = 0;

    array.forEach((item) => {
        if (Array.isArray(item)) {
            sum += sumPower(item, power + 1);
            console.log("Sum is", sum)
        } else {
            sum += item;
            console.log("interger sum is", sum)
        }
    });

    return Math.pow(sum, power);
}

console.log(sumPower([1,2,[5,4],[[2]]]));
