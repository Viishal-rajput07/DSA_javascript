/*
An array is monotonic if it is either monotone increasing or monotone decreasing. An array is monotone increasing if all its elements from left to right are 
non-decreasing. An array is monotone decreasing if all  its elements from left to right are non-increasing. Given an integer array return true if the given
 array is monotonic, or false otherwise.
*/

// const checkMonotonic = function (array){
//     //write code here to return either true or false 
//     let isAscending = true;
//     let isDescending = true;

//     for(let i = 0; i< array.length; i++){

//         if(array[i] < array[i+1]){
//             isDescending = false;
//         }
//         if(array[i] > array[i+1]){
//             isAscending = false
//         }

//         if(!isAscending && !isDescending){
//             break;
//         }
//     }

//     if(isAscending) return true;
//     if(isDescending) return true;
//     return false

// }
// console.log(checkMonotonic([1,2,3,4]))
// console.log(checkMonotonic([1,2,5,3]))
// console.log(checkMonotonic([]))
// console.log(checkMonotonic([1]))
// console.log(checkMonotonic([1,2]))
// console.log(checkMonotonic([1,2, 2, 3]))

function checkMonotonic(array) {
    if (array.length === 0 || array.length === 1) {
        return true
    }
    const first = array[0]
    const last = array[array.length - 1]

    for (i = 0; i < array.length; i++) {

        if (first === last) {
            if (array[i + 1] !== array[i]) return false
        }
        else if (first < last) {
            if (array[i + 1] < array[i]) return false
        }
        else {
            // first >last
            if (array[i + 1] > array[i]) return false
        }
    }
    return true
}
 
console.log(checkMonotonic([1, 2, 3, 4]))
console.log(checkMonotonic([1, 2, 5, 3]))
console.log(checkMonotonic([]))
console.log(checkMonotonic([1]))
console.log(checkMonotonic([1, 2, 1]))
console.log(checkMonotonic([1, 2, 2, 3]))

function fibonacci(n) {
    if(n===1)return 0
    else if(n===2) return 1

    else{
        return fibonacci(n-1) + fibonacci(n-2)
}}

console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
// console.log(fibonacci(200))

