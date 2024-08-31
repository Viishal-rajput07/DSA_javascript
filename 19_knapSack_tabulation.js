/**
 * This function takes in the total weight that the knapsack can carry (W), an array of weights (wt),
 * an array of values (val), and the number of items (n). It returns the maximum value that can be
 * put in the knapsack.
 * @param {number} W The maximum weight the knapsack can carry.
 * @param {number[]} wt An array of weights.
 * @param {number[]} val An array of values.
 * @param {number} n The number of items.
 * @returns {number} The maximum value that can be put in the knapsack.
 */

// Approach 3: Tabulation / Bottom Up, T=O(n*W) , S=O(n*W) T 
const knapSachTabultaion = (W, wt, val, n) => {
    // Create a 2D array to store the maximum value that can be obtained with the given weights
    let dp = Array.from({length: n+1}, ()=> Array(W+1).fill(0))

    // Iterate over the items and the weights
    for(let i =1; i<=n; i++){
        for(let j=1; j<=W; j++){

            // The maximum value that can be obtained by not including the current item
            const exclude = dp[i-1][j]

            // The maximum value that can be obtained by including the current item
            let include = 0;

            // If the weight of the current item is less than or equal to the current weight
            if(wt[i-1] <=j){
                // The maximum value that can be obtained by including the current item
                include = val[i-1] + dp[i-1][j-wt[i-1]]
            }

            // The maximum value that can be obtained is the maximum of the two
            dp[i][j] = Math.max(include, exclude)
        }
    }

    // Return the maximum value that can be obtained
    return dp[n][W] 
}

console.log(knapSachTabultaion(50, [10, 20, 30, 40], [100, 100, 120, 150], 4))


// Approach 4: Space Optimized Tabulation / Bottom Up, T=O(n*W) , S=O(W)
const knapSachOptimized = (W, wt, val, n) => {
    let prev = Array(W+1).fill(0)
    let curr = Array(W+1).fill(0)

    // Iterate over the items and the weights
    for(let i = 1; i<=n; i++){
        for(let j=1; j<=W; j++){

            const exclude = prev[j]
            let include = 0;

            // If the weight of the current item is less than or equal to the current weight
            if(wt[i-1] <=j){
                
                include = val[i-1] + prev[j-wt[i-1]]
            }

            curr[j] = Math.max(include, exclude)
        }
        prev = curr.slice()
    }

    // Return the maximum value that can be obtained
    return curr[W] 
}

console.log(knapSachOptimized(50, [10, 20, 30, 40], [100, 100, 120, 150], 4))