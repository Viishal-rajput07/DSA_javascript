
/*
Coding Exercise: Longest Palindromic Substring
Given a string s, return the longest  palindromic substring in s.



Example :

Input: s = "pabad"
Output: "aba"
*/
// Approach 1: Tabulation, T=O(n^2) , S=O(n^2)
const longestPalindromeSubstr = (s) =>{
    
    let n = s.length;
    let dp = Array.from({length: n}, () => Array(n).fill(false));

    let longest = ''

    for(let l = 1; l<=n; l++){
        for(let i = 0; i<=n-l; i++){
            let j = i + l -1;
            if(i===j){
                dp[i][j] = true
            }
            else if(s[i] === s[j] && (j === i+1 || dp[i+1][j-1])){
                dp[i][j] = true
            }
            else{
                dp[i][j] = false
            }
            if(dp[i][j]){
                longest = s.slice(i, j+1)
            }
        }

    }

    return longest
}

console.log(longestPalindromeSubstr("pabad"))