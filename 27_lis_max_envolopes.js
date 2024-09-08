/*
Coding Exercise: Russian Doll Envelopes
You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope.

One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.

Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other).

Note: You cannot rotate an envelope.

Example :

Input: envelopes = [[6,5],[7,5],[7,8],[3,4]]
Output: 3
Explanation: The maximum number of envelopes you can Russian doll is 3 ([3,4] => [6,5] => [7,8]).
*/

// Approach 1: Tabulation, T=O(n^2) , S=O(n)
const maxenvelopes = (envelopes) => {

    envelopes.sort((a,b) => a[0] === b[0] ? b[1] - a[1] : a[0]-b[0])
    let n = envelopes.length
    let dp = new Array(n).fill(1)
    let max = 1;
    
    for(let i = 1; i<n; i++){
        for(let j = 0; j< i; j++){
            if(envelopes[j][1] < envelopes[i][1] && dp[j] +1 > dp[i]){
                dp[i] = dp[j] +1
            }
        }
        if(dp[i] > max) max = dp[i]
    }

    return max
}

console.log(maxenvelopes( [[6,5],[7,5],[7,8],[3,4]]))


// Using the Binary search variant of LIS will give you a better Time complexity. Here's the code : 

var maxEnvelopes = function(envelopes) {
    envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
 
    const n = envelopes.length;
    const sub = [envelopes[0][1]];
 
    function binarySearch(sub, num) {
        let left = 0, right = sub.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (num > sub[mid]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
 
    for (let i = 1; i < n; i++) {
        const num = envelopes[i][1];
        if (num > sub[sub.length - 1]) {
            sub.push(num);
        } else {
            const x = binarySearch(sub, num);
            sub[x] = num;
        }
    }
    return sub.length;
};
 
// Example usage:
// const envelopes = [[5,4],[6,4],[6,7],[2,3]];
// console.log(maxEnvelopes(envelopes)); // Output: 3
