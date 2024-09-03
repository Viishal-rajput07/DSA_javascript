// Approach 3: Tabulation / Bottom Up, T=O(n*m) , S=O(n*m)
const editDistance = (word1, word2) => {
    let n = word1.length;
    let m = word2.length;

    let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    // intitialization of first row and column
    for (let i = 0; i <= n; i++) {
        dp[i][0] = i;
    }

    for (let j = 0; j <= m; j++) {
        dp[0][j] = j
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {

            // if characters are same
            if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1];
            }
            else {
                const insert = 1 + dp[i][j - 1];
                const deleteOp = 1 + dp[i - 1][j];
                const replace = 1 + dp[i - 1][j - 1];

                dp[i][j] = Math.min(insert, deleteOp, replace);
            }
        }
    }
    return dp[n][m];
}

console.log(editDistance("teble", "bel"));

// Approach 4: Optimized Tabulation / Bottom Up, T=O(n*m) , S=O(min(n,m))
const editDistanceOptimized = (word1, word2) => {
    let n = word1.length;
    let m = word2.length;

    let min = n < m ? n : m

    let prev = Array(min + 1).fill(0)
    let curr = Array(min + 1).fill(0)

    for (let j = 0; j <= min; j++) {
        prev[j] = j
    }

    for (let i = 1; i <= n; i++) {
        curr[0] = [i]
        for (let j = 1; j <= m; j++) {
            if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
                curr[j] = prev[j - 1]
            }
            else {
                let insert = 1 + curr[j - 1]
                let deleteOp = 1 + prev[j]
                let replace = 1 + prev[j - 1]

                curr[j] = Math.min(insert, deleteOp, replace)
            }
        }
        prev = [...curr]
    }

    return prev[min]
}

console.log(editDistanceOptimized("teble", "bel"));
