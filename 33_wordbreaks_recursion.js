// Approach 3: recursion, T=0(n*m*k) S=0(n), 
// where m are no. of word in wordDict and k is avgerage length of words in wordDict

const wordBreak = (s, wordDict) =>{

    let n = s.length;

    function helper(index){
        // base case
        if(index<0){
            return true
        }

        // recursive case
        for(let word of wordDict){
            let start =  index - word.length + 1
            if(s.substring(start, index+1) === word && helper(start-1)){
                return true
            }
        }
        return false
    }

    return helper(n-1)
}

console.log(wordBreak('hotspot', ['hot', 'spot']))


// Approach 4: recursion with memoization, T=0(n*m*k) S=0(n), this is uper Bound
const wordBreakMemo = (s, wordDict) =>{

    let n = s.length;
    let dp = Array(n).fill(-1)

    function helper(index){
        if(index < 0){
            return true
        }

        if(dp[index] !== -1){
            return dp[index]
        }

        for(word of wordDict){
            
            let start = index - word.length + 1
        
            if(s.substring(start, index+1) === word && helper(start-1)){
                dp[index] = true
                return dp[index]
            }
        }
        dp[index] = false
        return dp[index]
    }
    
    return helper(n-1)
}
console.log(wordBreakMemo('hotspot', ['hot', 'spot']))
