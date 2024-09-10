/*
Coding Exercise: Palindrom Partitioning 2 ( Min Cuts)
Palindrom Partitioning 2 : 

Given a string s, partition s such that every substring of the partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of s.

Example 1:

Input: s = "ppq"
Output: 1
Explanation: The palindrome partitioning ["pp","q"] could be produced using 1 cut.

*/
// Approach 1: recursion, T=0(2^n * n), S=O(n)

const minCut = (s) => {
    let n = s.length;

    function isPalindrome(start, end) {
        while (start < end) {
            if (s[start] !== s[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }

    function helper(start, end) {

        // base case
        if (start === end || isPalindrome(start, end)) {
            return 0;
        }

        //recursive case

        let minimumCuts = end - start;

        for (let endIndex = start; endIndex < end; endIndex++) {
            if (isPalindrome(start, endIndex)) {
                minimumCuts = Math.min(minimumCuts, 1 + helper(endIndex + 1, end))
            }
        }

        return minimumCuts;

    }

    return helper(0, n - 1)
}

console.log(minCut("abc"));


// Approach 2: Memoization, T=O(n^2), S=O(n^2)
const minCutsMemoization = (s) => {

    let n = s.length;

    let dp = Array.from(Array(n), () => Array(n).fill(false));

    let minCuts = Array.from(Array(n), () => Array(n).fill(null));

    for (let l = 1; l <= n; l++) {
        for (let i = 0; i <= n - l; i++) {
            let j = i + l - 1;

            if (i === j) {
                dp[i][j] = true;
            }

            else if (s[i] === s[j] && (j === i + 1 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
            }
            else {
                dp[i][j] = false;
            }

        }
    }

    function helper(start, end) {
        if (start === end || dp[start][end]) {
            return 0;
        }

        if (minCuts[start][end] !== null) {
            return minCuts[start][end];
        }

        let minimumCuts = end - start;

        for (let endIndex = 0; endIndex < end; endIndex++) {

            if (dp[start][endIndex]) {
                minimumCuts = Math.min(minimumCuts, 1 + helper(endIndex + 1, end))
            }
        }
        minCuts[start][end] = minimumCuts;

        return minCuts[start][end];
    }

    return helper(0, n - 1)
}

console.log(minCutsMemoization("abc"))