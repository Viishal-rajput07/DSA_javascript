//Approach 3: Tabulation, T=O(n^2) , S=O(n^2)
const lengthOfLis = (nums) => {
    let n = nums.length;

    let dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {

            let exclude = dp[i + 1][j]
            let include = 0

            if (j - 1 === -1 || nums[i] > nums[j - 1]) {
                include = 1 + dp[i + 1][i + 1]
            }

            dp[i][j] = Math.max(include, exclude)
        }
    }
    return dp[0][0]
}

console.log(lengthOfLis([300, 9, 2, 5, 3, 7, 500, 400]));


//Approach 4: Optimized Tabulation, T=O(n^2) , S=O(n)
const lengthOfLisOptimized = (nums) => {

    let n = nums.length;

    if (n === 0) return 0

    let dp = Array(n).fill(1)
    let max = 0;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j] && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1
            }

        }
        if (dp[i] > max) (max = dp[i])
    }

    return max
}

console.log(lengthOfLisOptimized([300, 9, 2, 5, 3, 7, 500, 400]));