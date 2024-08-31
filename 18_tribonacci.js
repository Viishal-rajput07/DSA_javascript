/*
Coding Exercise: Tribonacci
The Tribonacci sequence Tn is defined as follows:

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

*/

// Approach 1: Simple recurrsion, T=O(2^n) , S=O(n)
const tribonacci = function (n) {
    //Write code here
    if (n <= 1) return n
    if (n === 2) return 1

    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
};
console.log(tribonacci(5))

//Approach 2: recursion with memoization / top down, T=O(n) , S=O(n)
const HashTribonacci = function (n) {
    //Write code here
    let hash = { 0: 0, 1: 1, 2: 1 }
    function helper(n) {
        if (hash[n] !== undefined) return hash[n]
        hash[n] = helper(n - 1) + helper(n - 2) + helper(n - 3)
        return hash[n]
    }
    return helper(n)
};
console.log(HashTribonacci(5))

// Approach 3: Optimized Tabulation / Bottom Up, T=O(n) , S=O(1)
const optimizedTribonacci = (n) => {

    let zero = 0;
    let one  = 1;
    let two  = 1;

    if (n <= 1) return n;                // Return n if it's 0 or 1
    if (n === 2) return two;             // Return 1 if n is 2

    let next;                            // Declare next outside of the loop to use after the loop
    for (let i = 3; i <= n; i++) {
        next = zero + one + two;         // Calculate the next number in the sequence
        zero = one;                      // Update zero to the next number
        one = two;                       // Update one to the next number
        two = next;                      // Update two to the next number
    }
    return next;                         // Return the n-th Tribonacci number
}
console.log(optimizedTribonacci(5));
