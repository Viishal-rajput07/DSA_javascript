// Approach 1: Recursion, T=(2^n * n), S=0(n)
const matrixMultiplication = (N, arr) => {

    function helper(i, j){
        
        if(i===j) return 0;
    
        let cost = Infinity;
        for(let k = i; k<j; k++){
            
            let currCost = helper(i,k) + helper(k+1, j) + arr[i-1] * arr[k] * arr[j]
            cost  = Math.min(currCost, cost)
        }
        
        return cost
    }

    return helper(1, N-1)
}

console.log(matrixMultiplication(3, [1,1,2]))


// Approach 2: Recursion with memoization, T=(n^3), S=0(n^2)
const matrixMultiplication2 = (N, arr) =>{

    let dp = Array.from(Array(N), ()=> Array(N).fill(-1))

    function fincost(i, j){
        
        if(i===j) return 0

        if(dp[i][j] !== -1) return dp[i][j]

        let cost = Infinity;
        for(let k = i; k<j; k++){
            
            let currCost = fincost(i, k) + fincost(k+1, j) + arr[i-1] * arr[k] * arr[j]

            cost = Math.min(cost, currCost)
        }
        dp[i][j] = cost

        return dp[i][j]
    }

    return fincost(1, N-1)
}

console.log(matrixMultiplication2(3, [1,1,2]))
