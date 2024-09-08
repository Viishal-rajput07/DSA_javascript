/*
Coding Exercise: Max Length of Pair Chain
You are given an array of n pairs pairs where pairs[i] = [lefti, righti] and lefti < righti.

A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in this fashion.

Return the length longest chain which can be formed.

You do not need to use up all the given intervals. You can select pairs in any order.



Example 1:

Input: pairs = [[2,3],[3,4],[4,5]]
Output: 2
Explanation: The longest chain is [2,3] -> [4,5].
*/

// Approach 1: Tabulation, T=O(n^2) , S=O(n)

const findLongestChain = function(pairs) {
    //Write code here 
    pairs.sort((a, b) => a[0] - b[0])
    let n = pairs.length

    let dp = new Array(n).fill(1)
    let max = 1;

    for(let i = 1; i<n; i++){
        for(let j = 0; j< i; j++){
            if(pairs[j][1] < pairs[i][0] && dp[j] +1 > dp[i]){
                dp[i] = dp[j] + 1
            }
        }
        if(dp[i] > max) max = dp[i]
    }
    return max
};


console.log(findLongestChain([[1,2],[4,5],[7,8]]));
