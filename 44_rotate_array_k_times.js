// Method: 2, T=0(n), k=0(1)
/*
Coding Exercise: Rotate Array
Question:

Given an array, rotate the array to the right by k steps, where k is non-negative.

Try :

After you have solved this question, think about whether you can solve it in constant space
*/

// Method: 1, T=0(n), S=0(1)
const reverse  = (nums, start, end) =>{
    while(start < end){
        [nums[start],nums[end]] = [nums[end],nums[start]]
        start ++;
        end--;
    }
}

const rotate = (nums, k) =>{
    let length = nums.length;
    k = k%length;
    
    // nums.reverse() ||                        [1,2,3,4,5] , k =2
    reverse(nums, 0, length-1)         // =>    [5,4,3,2,1]

    // reverse from start=0, end=k-1(2-1), ||   [5,4] 
    reverse(nums, 0, k-1)             //=>      [4,5,3,2,1]

    // reverse from start=k(2), end=length-1,   [3,2,1] 
    reverse(nums, k, length-1)       // =>      [4,5,1,2,3]              

    return nums
}
console.log(rotate([1,2,3,4,5], 2))


// Method:2 Brute Force, T=0(n), S=0(n) 
const rotateArray = (arr, k) =>{
    let length = arr.length;
    k = k%length;

    let movedToStart = arr.splice(length-k, k)
    let result = [...movedToStart, ...arr]
    return result
}

console.log(rotateArray([1,2,3,4,5], 2))