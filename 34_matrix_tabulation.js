// Approach 3: Tabulation, T=(n^3), S=0(n^2)
const matrixMultiplication = (N, arr) =>{

    let dp = Array.from(Array(N), ()=> Array(N).fill(0))

    for(let l = 1; l<=N; l++){
        for(let i = 1; i<=N-l; i++){
            let j = i + l -1

            if(i===j) {
                dp[i][j] = 0
            }
            else{
                dp[i][j] = Infinity;
                for(let k=i; k<j; k++){
                    
                    dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k+1][j] + arr[i-1] * arr[k] * arr[j])
                }
            }
            
        }
    }
    return dp[1][N-1]
}

console.log(matrixMultiplication(3, [1,1,2]))