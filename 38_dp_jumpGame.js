const canJumpFromPosition = (position, nums) =>{

    if(position === nums.length - 1){
        return true
    }

    let furthestJump = Math.min(position + nums[position], nums.length-1)
    for(let nextPosition = position + 1; nextPosition <= furthestJump; nextPosition++){
        if(canJumpFromPosition(nextPosition, nums)){
            return true;
        }
    }
    return false
} 

console.log(canJumpFromPosition(0, [1,3,0,0,4]))


const canJump = (nums) =>{
    
    let n = nums.length
    const memo = new Array(n).fill(undefined)
    memo[memo.length-1]  = true  // the last index is always reachable from itself
    
    function helper(position){
        if(memo[position] !== undefined){
            return memo[position]
        }

        let furthestJump = Math.min(position + nums[position], n-1)

        for(let nextPosition = position + 1; nextPosition <= furthestJump; nextPosition++){
            if(helper(nextPosition)){
                memo[position] = true
                return true
            }
        }

        memo[position] = false
        return  false
    }

    return helper(0)
}

console.log(canJump([3,2,1,0,4]));

const canjump2 = (nums) =>{
    let n = nums.length 
    let dp = new Array(n).fill(false)
    dp[0] = true
// [t,t,t,t]
    for(let i = 0; i<n; i++){
        if(dp[i]){
            let furthestJump = Math.min(i + nums[i], n-1)

            for(let  j = i+1; j<= furthestJump; j++){
                dp[j] = true
                // 
            }
        }
    }

    return  dp[n-1]
}
console.log(canjump2([3,2,2,0,4]));