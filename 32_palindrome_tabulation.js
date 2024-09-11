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


// Approach 4: Tabulation, T=0(n^2)  S=0(n^2)
const cutsMin = (s) =>{

    let n = s.length;

    let isPalindrome = Array.from(Array(n), ()=>Array(n).fill(false))

    for(let l = 1; l<= n; l++){
        for(let i = 0; i<=n-l; i++){
            let j = i + l -1;

            if(i===j){
                isPalindrome[i][j] = true
            }
            else if(s[i] === s[j] && (j === i+1 || isPalindrome[i+1][j-1])){
                isPalindrome[i][j] = true
            }
            else{
                isPalindrome[i][j] = false
            }
        }
    }

    let dp = Array(n).fill(0)

    for(let end = 0; end<n; end++){
        let minCuts = end
        for(let start = 0; start <=end; start++){
            if(isPalindrome[start][end]){
                if(start === 0){
                    minCuts = 0 
                }
                else{
                    minCuts = Math.min(minCuts, 1+dp[start-1])
                }
            }
        }
        dp[end] = minCuts
    }

    return dp[n-1]
}

console.log(cutsMin('abc'))
