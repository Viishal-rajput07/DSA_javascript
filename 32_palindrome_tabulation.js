// Approach 3: Tabulation, T=0(n^3)  S=0(n^2)
const minCuts = (s)  =>{

    let n = s.length;

    let dp = Array.from(Array(n), ()=>Array(n).fill(0))

    for(let l = 1; l<=n; l++){
        for(let i = 0; i <= n-l; i++){
            let j = i + l -1;

            if(i===j){
                dp[i][j] = 0
            }
            else if(s[i] === s[j] && dp[i+1][j-1] === 0){
                dp[i][j] = 0
            }
            else{
                dp[i][j] = j - i
                for(let k = i; k<j; k++){
                    dp[i][j] = Math.min(dp[i][j], 1+ dp[i][k] + dp[k+1][j])
                } 
            }
        }
    }

    return dp[0][n-1]
} 

console.log(minCuts("abc"));
