// Approach 2: Tabulation, T=O(n^2) , S=O(n^2)
const isPalindrome = (s) => {

    let n = s.length;
    let dp = Array.from(Array(n), () => Array(n).fill(false))
    let res = 0;

    for (let l = 1; l <= n; l++) {
        for (let i = 0; i <= n - l; i++) {
            let j = i + l - 1;

            if (i === j) {
                dp[i][j] = true
                res++
            }
            else if (s[i] === s[j] && (j === i + 1 || dp[i + 1][j - 1])) {
                dp[i][j] = true
                res++
            }
            else {
                dp[i][j] = false
            }
        }
    }

    return res
}

console.log(isPalindrome("rivvir"));
