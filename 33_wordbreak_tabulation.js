/*
Coding Exercise: Word Break
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated
 sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.



Example :

Input: s = "jackson", wordDict = ["jack","son"]
Output: true
Explanation: Return true because "jackson" can be segmented as "jack son".
*/
// Approach 1: Tabulation,  T=0(n^2 (n+m)), S=0(n^2), where m is length of wordDict
const wordBreak = (s, wordDict) =>{

    let n = s.length;
    let dp = Array.from(Array(n), ()=> Array(n).fill(false))

    for(let l = 1; l<=n; l++){
        for(let i =0; i<=n-l; i++){
            let j = i + l - 1;

            if(wordDict.includes(s.slice(i, j+1))){
                dp[i][j] = true
            }
            else{
                for(let k = i; k < j; k++){
                    dp[i][j] = dp[i][j] || (dp[i][k] && dp[k+1][j])
                }
            }
        }
    }

    return dp[0][n-1]
}

console.log(wordBreak('hot', 'hotSpot'))

// Approach 2: tabulation, T=0(n*m*k) S=0(n), 
const wordBreak2 = (s, wordDict) =>{

    let n = s.length;
    let dp = Array(n).fill(false)

    for(let i = 0; i<n; i++){
        for(let word of wordDict){
            if(i < word.length-1){
            // console.log(word, i)
                continue
            }
            else if(s.substring(i - word.length + 1, i+1) === word){
            // console.log(word, i)
                
                if(i===word.length-1 || dp[i-word.length]){
                    dp[i] = true
                    break;
                }
            }
        }
    }
    return dp[n-1]
}

console.log(wordBreak2('hotspot', ['hot', 'spot']))

