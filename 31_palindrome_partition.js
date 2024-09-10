/*
Coding Exercise: Palindrome Partitioning Given a string s, partition s such that every substring of the 
partition is a palindrome
Return all possible palindrome partitioning of s.

Example 1:

Input: s = "ppq"
Output: [["p","p","q"],["pp","q"]]
*/

//Approch 1: Backtracking, T=O(2^n * n) , S=O(n^2)

const palindromePartition = (s) => {

    let n = s.length;
    let dp = Array.from(Array(n), () => Array(n).fill(false))

    for (let l = 1; l <= n; l++) {
        for (let i = 0; i <= n - l; i++) {
            let j = i + l - 1

            if (i === j) {
                dp[i][j] = true
            }
            else if (s[i] === s[j] && (j === i + 1 || dp[i + 1][j - 1])) {
                dp[i][j] = true
            }
            else {
                dp[i][j] = false
            }
        }
    }

    let res = []

    function helper(index, current) {

        if (index > n - 1) {
            res.push([...current])
            return
        }

        for (let i = index; i < n; i++) {

            if (dp[index][i]) {
                current.push(s.substring(index, i + 1))
                helper(i + 1, current)
                current.pop()
            }
        }
    }

    helper(0, [])
    return res
}

console.log(palindromePartition('ppq'));
