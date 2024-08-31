/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

n>=1

Example

Input: n = 2
Output: 2
Explanation: You can climb to the top in 2 ways.
A. 1 step + 1 step
B. 2 steps
*/

// Approach 1: Simple recurrsion, T=O(2^n) , S=O(n)
const climbStairs = function(n) {
    //Write code here

    if(n===1 || n===2){
        return n
    }
    return climbStairs(n-1) + climbStairs(n-2)
};
console.log(climbStairs(5))

//Approach 2: recursion with memoization / top down, T=O(n) , S=O(n)
const hash_climpStairs = (n) =>{
    let hash = {1:1, 2:2}

    function stairs(num){
        if(hash[num] !== undefined) return hash[num]

        hash[num] = stairs(num-1) + stairs(num-2)
        return hash[num]
    }
    return stairs(n)
}

console.log(hash_climpStairs(5))


//Approach 3: Tabulation, T=O(n) , S=O(n)
const stairsTabulation = function(n){
    let arr = new Array(n+1).fill(0)

    arr[1] = 1
    if(n>0){
        arr[2] = 2
    }

    let count = 2
    while(count < n){
        count++;
        arr[count] = arr[count-1] + arr[count-2]
    }
    return arr[count]
    
}

console.log(stairsTabulation(5))

// Approach 4: Optimized Tabulation / Bottom Up, T=O(n) , S=O(1)
const optimized_climb_stairs = (n) =>{
    
    if(n<=2) return n

    let prev = 1
    let current = 2

    for(let i = 2; i<n; i++){
        let next = prev + current
        prev = current
        current = next
    }
    return current
    
}
console.log(optimized_climb_stairs(5))