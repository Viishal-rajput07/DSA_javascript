/*You are given an array of Integers in which each subsequent value is not less than the previous value. 
Write a function that takes this array as an input and returns a new array with the squares of each 
number sorted in ascending order.

**Remember**
You can solve this question in multiple ways.

*Think about the following*
1.What would be the brute force way of solving this question ? What would be the Time and Space complexity
of this approach 

input = [1,2,3], [-2, -3, 1]
output= [1,4,9], [1, 4, 9]

Time complexity => 0(n logn), .sort() method had this time complexity
space complexity => 0(n), we are making a new array
*/



function sortedSquarredArray(array) {
    // initialize a newArray from array lenth with value filled with 0
    let newArray = new Array(array.length).fill(0)

    // for loop to fill newArray with squares of array item
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = array[i] * array[i]
    }

    // sort the newArray, if [(a-b) < 0] => a comes before b, else [(a-b) > 0] => a comes after b
    newArray.sort((a, b) => a - b);

    return newArray;
}

console.log(sortedSquarredArray([1, 4, 6, 2, -3]))

