/*
Coding Exercise: Minimum Cost Climbing Stairs
You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the
cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.

Example 1:

Input: cost = [10,20,30]
Output: 20
Explanation: You will start at index 1.
- Pay 20 and climb two steps


* Calculates the minimum cost to reach the top of the staircase
*/

// Approach 1: Simple recurrsion, T=O(2^n) , S=O(n)
const minCostClimbingStairs = (cost) =>{

    let n =  cost.length;
    
    function helper(index){
        if(index >= n) return 0;

        let one = cost[index] + helper(index + 1)
        let two = cost[index] +  helper(index+2)

        return Math.min(one, two)
    }

    return Math.min(helper(0), helper(1))
}
console.log(minCostClimbingStairs([1,2,3,4,5,6,7,8,9,10,2,3,4,5,6,20,10,100,1000]))

//Approach 2: recursion with memoization / top down, T=O(n) , S=O(n)
const memoizationMinCostClimbing = (cost) => {
   
    // The length of the cost array
    const n = cost.length;

    // Memoization table to store the minimum cost to reach each step
    const memo = new Array(n).fill(-1);

    // Helper function to calculate the minimum cost to reach the top of the staircase
    function helper(index) {
        // Base case: If we've reached the top, return 0
        if (index >= n) return 0;

        // If we've already calculated the minimum cost for this step, return it
        if (memo[index] !== -1) return memo[index];

        // Calculate the minimum cost to reach the top from this step
        const one = cost[index] + helper(index + 1);
        const two = cost[index] + helper(index + 2);

        // Store the result in the memoization table
        memo[index] = Math.min(one, two);

        // Return the result
        return memo[index];
    }
    return Math.min(helper(0), helper(1))
} 

console.log(memoizationMinCostClimbing([1,2,3,4,5,6,7,8,9,10,2,3,4,5,6,20,10,100,1000]))
    

// Approach 3: Tabulation, T=O(n) , S=O(n)
const tabulationMinCostClimbing = (cost) =>{
    let n = cost.length;

    //Storing the cost for reaching the step with particular index
    let dp = Array(n+1).fill(0) 

    for(let i=2; i<=n; i++){

        // Calculating the cost to come from the previous, one step back and two step back
        let costToComeOneStepBack = cost[i-1] + dp[i-1]
        let costToComeTwoStepBack = cost[i-2] + dp[i-2]

        dp[i] = Math.min(costToComeOneStepBack, costToComeTwoStepBack)
    }

    return dp[n]
}
console.log(tabulationMinCostClimbing([1,2,3,4,5,6,7,8,9,10,2,3,4,5,6,20,10,100,1000]))
