/*
Coding Exercise: Edit Distance
Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

•Insert a character
•Delete a character
•Replace a character

Example: 

Input: word1 = "hodse", word2 = "dos"
Output: 3
Explanation: 
hodse -> dodse (replace 'h' with 'd')
dodse -> dose (remove 'd')
dose -> dos (remove 'e')
*/

//Approach 1: Simple recurrsion, T=O(3^n+m) , S=O(n+m)
const EditDistance = (text1, text2) =>{
    let n = text1.length;
    let m = text2.length;

    function helper(index1, index2){
        if(index1 > n-1 && index2 > m-1){
            return 0
        }
        if(index1 > n-1){
            return m - index2
        }
        if(index2 > m-1){
            return n - index1
        }

        if(text1[index1] === text2[index2]){
            return helper(index1+1, index2+1)
        }

        const insert = 1 + helper(index1, index2+1);
        const deleteOp = 1 + helper(index1+1, index2);
        const replace = 1 + helper(index1+1, index2+1);
        return Math.min(insert, deleteOp, replace)
    }
    return helper(0,0)
}
console.log(EditDistance("intention", "execution"));

// Approach 2: Memoization / Top Down T=O(n*m) , S=O(n*m)
const EditDistanceMemoization = (text1, text2) =>{
    let n = text1.length;
    let m = text2.length;
    let memo = Array.from({length:n}, () => Array(m).fill(-1))
    function helper(index1, index2){
        if(index1 > n-1 && index2 > m-1){
            return 0
        }
        if(index1 > n-1){
            return m - index2
        }
        if(index2> m-1){
            return n - index1
        }
        if(memo[index1][index2] !== -1){
            return memo[index1][index2]
        }

        if(text1[index1] === text2[index2]){
            memo[index1][index2] = helper(index1+1, index2+1)
        }
        else{
            const insert = 1 + helper(index1, index2+1)
            const deleteOp = 1 + helper(index1+1, index2)
            const replace = 1 + helper(index1+1, index2+1)
            memo[index1][index2] = Math.min(insert, deleteOp, replace)
        }

        return memo[index1][index2]
    }
    return helper(0,0)
}
console.log(EditDistanceMemoization("intention", "execution"));
