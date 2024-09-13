/*
Coding Exercise: Unbounded Knapsack
Given a set of N items, each with a weight and a value, represented by the array w and val respectively. 
Also, a knapsack with weight limit W.

The task is to fill the knapsack in such a way that we can get the maximum profit. Return the maximum profit.
Note: Each item can be taken any number of times.



Input: 
N = 2
W = 3
val = [4, 2]
wt = [3, 1]
Output: 3
Explanation: 
1.Pick the 2nd element thrice.
So, Total value = 2 + 2 + 2 = 6. and the total weight = 1 + 1 + 1  = 3 
which is <= 3.
*/

// Approach 1: Tabulation / Bottom Up, T=O(n*W) , S=O(n*W)
const unboundKnapSack = (W, wt, val, n) =>{
    
    let dp = Array.from({length: n+1}, ()=> Array(W+1).fill(0))
    
    for(let i = 1; i<=n; i++){
        for(let j = 1; j<=W; j++){

            let exclude = dp[i-1][j]
            let include = 0
 
            if(wt[i-1] <= j){
                include = val[i-1] + dp[i][j- wt[i-1]]
            }

            dp[i][j] = Math.max(include, exclude)
        }
    }

    return dp[n][W]
}

console.log(unboundKnapSack(50, [10, 20, 30, 40], [100, 120, 120, 150], 4));


const unboundKnapSackOptimized = (W, wt, val, n) =>{

    let prev = Array(W+1).fill(0);
    let curr = Array(W+1).fill(0);

    for(let i =1; i<=n; i++){
        for(let j = 1; j<=W; j++){
            let exclude = prev[j]

            let include = 0

            if(wt[i-1] <= j){
                // todo
                include = val[i-1] + prev[wt[i-1]]
            }

            curr[j] = Math.max(include, exclude)
        }
        prev = curr.slice()
    }

    return curr[W]
}
console.log(unboundKnapSackOptimized(50, [10, 20, 30, 40], [100, 120, 120, 150], 4));
