/*
RECURSIVE solution:

function twoCitySchedCost(costs) {
    function minCost(i, a_count) {
        // Base case: when all people have been considered
        if (i === costs.length) {
            // If we've considered all people, we will have sent exactly n to City A.
            // So we can just return 0. There is no need to again check whether n people 
            // are sent to city A
            return 0;
        }
 
        let costA, costB;
 
        // Cost of sending the i-th person to City A
        if (a_count < costs.length / 2) {
            costA = costs[i][0] + minCost(i + 1, a_count + 1);
        } else {
            costA = Infinity;  // Prevent sending more than n people to City A
        }
        
        // Cost of sending the i-th person to City B
        const b_count = i - a_count;  // Number of people sent to City B so far
        if (b_count < costs.length / 2) {
            costB = costs[i][1] + minCost(i + 1, a_count);
        } else {
            costB = Infinity;  // Prevent sending more than n people to City B
        }
 
        // Return the minimum cost of the two choices
        return Math.min(costA, costB);
    }
 
    // Start the recursion from the 0-th index with 0 people sent to A
    return minCost(0, 0);
}
 
// Example usage:
// const costs = [[10, 20], [30, 200], [50, 30], [50, 60]];
// console.log(twoCitySchedCost(costs));  // Output should be the minimum cost
 
the function minCost(i, a_count) calculates the minimum cost of sending people to two cities with the following conditions:

From the first i people: The function considers only the subset of people from the start of the list up to the i-th person.

Sending exactly a_count people to city A: This argument specifies how many out of the i people have been sent to city A so far.

Time Complexity: 

The recursion explores two possibilities for each person: sending them to City A or City B. Let's consider the number of recursive calls generated:

Branching Factor: Each call to minCost results in two further calls unless we have reached constraints that limit further calls to one of the cities. Thus, each person can be considered as creating a binary decision tree.

Depth of Recursion: The maximum depth of the recursion is equal to the number of people, 2n (since the problem states that n people are sent to each city, making a total of 2n people).

Total Recursive Calls: The total number of possible states can be analyzed by recognizing that each person can be either in City A or City B. However, the constraints that exactly n people must be sent to each city significantly reduce the possible valid states. The number of recursive calls is roughly the number of ways to choose n people out of 2n to go to one city, which can be calculated using binomial coefficients: C(2n,n). This is also bounded above by 2^2n in the worst case without any constraints.

The time complexity is therefore O(2^2n) in the worst case due to the exponential growth of recursive calls with each additional person. However, with constraints and logical pruning (like checking if more than n people are being sent to one city), the effective number of recursive calls may be less than this theoretical upper bound, but still exponential.

Space Complexity: 

The space complexity of this recursive solution involves considering the maximum stack depth, as each recursive call consumes a stack frame:

Maximum Stack Depth: The maximum depth of the recursion stack will be 2n, corresponding to the number of people, since we make a decision for each person until we reach the base case.

Additional Space: If no memoization is used, the only significant space usage comes from the recursion stack itself. Each stack frame might store minimal information, such as the indices and current counts.

Thus, the space complexity is O(2n), which reflects the maximum depth of the recursion tree.



MEMOIZATION:

function twoCitySchedCost(costs) {
    const n = Math.floor(costs.length / 2);
    const memo = {};
 
    function minCost(i, a_count) {
        if (i === costs.length) {
            // Base case: if we've considered all people, we will have sent exactly n to A.
            // So we can just return 0. There is no need to again check whether n people
            // are sent to city A
            return 0;
        }
        if (memo.hasOwnProperty(`${i}-${a_count}`)) {
            return memo[`${i}-${a_count}`];
        }
 
        // Cost of sending the i-th person to A
        const costA = a_count < n ? costs[i][0] + minCost(i + 1, a_count + 1) : Infinity;
        // Cost of sending the i-th person to B
        const costB = (i - a_count) < n ? costs[i][1] + minCost(i + 1, a_count) : Infinity;
 
        // Store the result in memo dictionary and return the minimum cost
        const result = Math.min(costA, costB);
        memo[`${i}-${a_count}`] = result;
        return result;
    }
 
    // Start the recursion from the 0-th index with 0 people sent to A
    return minCost(0, 0);
}
 
// Example usage:
// const costs = [[10, 20], [30, 200], [50, 30], [50, 60]];
// console.log(twoCitySchedCost(costs));  // Output should be the minimum cost
the function minCost(i, a_count) calculates the minimum cost of sending people to two cities with the following conditions:

From the first i people: The function considers only the subset of people from the start of the list up to the i-th person.

Sending exactly a_count people to city A: This argument specifies how many out of the i people have been sent to city A so far.

Time Complexity: 

Memoization helps reduce the time complexity by ensuring that each combination of arguments (i, a_count) is computed only once. The function minCost(i, a_count) computes the minimum cost for each subset of the first i people with exactly a_count of them sent to city A.

Unique States: The number of unique states (or subproblems) that the memoization needs to compute is determined by the combination of two factors:

i, which can range from 0 to 2n (where 2n is the total number of people).

a_count, which can range from 0 to n (since you can't send more than n people to city A).

Total States: The total number of unique states is therefore bounded by the product of the range of i and the range of a_count. That is 2n * (n + 1), since both i and a_count start from 0.

Hence, the time complexity is O(n^2) because each unique state is only calculated once due to memoization, and there are about 2n * (n + 1) possible unique states.

Space Complexity:

The space complexity of the memoization approach is determined by the amount of memory required to store the results of each unique subproblem, plus the space required for the recursion stack:

Memoization Storage: We need to store the result for each unique combination of i and a_count. As calculated above, there are 2n * (n + 1) possible combinations.

Recursion Stack: In the worst case, the depth of the recursion stack is 2n because the recursion goes as deep as the number of people.

Thus, the space complexity includes:

O(n^2) for the memoization storage to hold results for up to 2n * (n + 1) states.

O(2n) for the recursion stack, which is the maximum depth of recursive calls.

Therefore, combining these, the overall space complexity can still be considered as O(n^2), dominated by the memoization storage.

TABULATION:

function twoCitySchedCost(costs) {
    costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
    const n = Math.floor(costs.length / 2);
    const dp = Array.from({ length: 2 * n + 1 }, () => Array(n + 1).fill(Infinity));
    dp[0][0] = 0;
 
    for (let i = 1; i <= 2 * n; i++) {
        for (let j = Math.max(0, i - n); j <= Math.min(n, i); j++) {
            if (j > 0) {
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1] + costs[i - 1][0]);
            }
            if (j < i) {
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + costs[i - 1][1]);
            }
        }
    }
 
    return dp[2 * n][n];
}
 
// Example usage:
// const costs = [[10, 20], [30, 200], [50, 30], [50, 60]];
// console.log(twoCitySchedCost(costs));  // Output should be the minimum cost
We initialize a DP table where dp[i][j] represents the minimum cost of sending the first i people with j going to city A. ( In the recursive and memoization approach - each funch call returned this. i and j are like the input parameters for the recursive / memoization approach) 

Time Complexity: 

Filling the DP Table:

Outer Loop: The outer loop iterates from 1 to 2n, considering each person one by one, resulting in 2n iterations.

Inner Loop: The inner loop ranges from max(0, i - n) to min(n, i). This range ensures that only feasible scenarios are considered (where you don't send more people to a city than there are available positions). The maximum range of this inner loop is bound by n (it does not exceed the number of slots in either city), leading to a maximum of n + 1 iterations for each value of i.

Given that each cell computation involves a constant amount of work (a couple of additions and minimum comparisons), the time complexity for filling the table is also O(n^2).

Space Complexity:

DP Table: The dynamic programming table dp is a two-dimensional array where the dimensions are determined by:

The total number of people (2n), which sets the number of rows in the table.

The number of people that can possibly be sent to city A (ranging from 0 to n), which sets the number of columns in the table to n + 1.

The size of the dp table is therefore (2n + 1) x (n + 1), accounting for all combinations from 0 to 2n people considered and 0 to n people sent to city A.

Thus, the space complexity of the tabulation approach is O(n^2). This is because the table stores results for each combination of people considered and the number of people sent to city A.


*/