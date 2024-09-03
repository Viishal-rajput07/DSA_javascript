//Approach 3: Tabulation / Bottom Up T=O(n*m) , S=O(n*m)
const lcsTabulation = (text1, text2) => {
    let n = text1.length
    let m = text2.length

    let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0))

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
            }
            else {
                // left = dp[i][j-1], top = dp[i-1][j]
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
            }
        }
    }
    return dp[n][m]
}
console.log(lcsTabulation("abcde", "acde"));


// Approach 4: Optimized Tabulation / Bottom Up T=O(n*m) , S=O(min(n,m))
const lcsOptimized = (text1, text2) => {
    let n = text1.length
    let m = text2.length
    let min = n < m ? n : m
    let prev = Array(min + 1).fill(0)
    let curr = Array(min + 1).fill(0)

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {

            if (text1[i - 1] === text2[j - 1]) {
                curr[j] = 1 + prev[j - 1]
            }
            else {
                curr[j] = Math.max(curr[j-1], prev[j])
            }
        }
        prev = [...curr]
    }
    return curr[min]
}
console.log(lcsOptimized("abcde", "acde"));
