/*
Approach 3: Tabulation, T=O(n) , S=O(n)
*/

function fib(n){
    let dp = new Array(n+1).fill(0)
    dp[0] = 0
    if(n>0){
        dp[1] = 1
    }

    let count = 1
    while(count < n){
        count++;
        dp[count] = dp[count-1] +dp[count-2]
    }
    return dp[n]
    
}

console.log(fib(5))