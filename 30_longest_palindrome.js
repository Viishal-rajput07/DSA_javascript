/*
Coding Exercise: Longest Palindromic Subsequence
Given a string s, find the longest palindromic subsequence's length in s.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without 
changing the order of the remaining elements.

Example :

Input: s = "cccacpc"
Output: 5
Explanation: One possible longest palindromic subsequence is "ccccc".
*/
// Approach 1: Tabulation, T=O(n^2) , S=O(n^2)
const longestPalindrome = (s) =>{
    
    let n = s.length;

    let dp = Array.from({length: n}, () => Array(n).fill(0));

    for(let l = 1; l<=n; l++){
        for(let i =0; i<=n-l; i++){
            let  j = i + l - 1;

            if(i===j){
                dp[i][j] = 1
            }
            else if(s[i] === s[j]){
                dp[i][j] = 2 + dp[i+1][j-1]
            }
            else{
                dp[i][j] = Math.max((dp[i+1][j], dp[i][j-1]))
            }
        }
    }

    return dp[0][n-1]
}

console.log(longestPalindrome("cccacpc"))


/*
Another solution

var longestPalindromeSubseq = function(s) {
    let rev_s = s.split('').reverse().join(''); // Reverse the string
    let n = s.length;
 
    // Initialize a 2D array for dynamic programming
    let dp = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
 
    // Base cases: dp[i][0] and dp[0][i] are initialized to 0
    for (let i = 0; i <= n; i++) {
        dp[i][0] = 0;
        dp[0][i] = 0;
    }
 
    // Fill dp array
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] === rev_s[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]; // Characters match
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]); // Take the maximum of ignoring one of the characters
            }
        }
    }
 
    return dp[n][n]; // The length of the longest palindromic subsequence
};

*/