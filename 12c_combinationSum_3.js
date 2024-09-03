/*
Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

Only numbers 1 through 9 are used.

Each number is used at most once.

Return a list of all possible valid combinations. The list must not contain the same combination twice, and
the combinations may be returned in any order.

Example :

Input: k = 3, n = 6
Output: [[1,2,3]] 
Explanation:
1 + 2 + 3 = 6
There are no other valid combinations
*/

var combinationSum3 = function(k, n) {
    let res = [];
    function backtrack(number, curr, currSum) {
        if (currSum === n && curr.length === k) {
            res.push([...curr]); // Make a copy of curr to store in res
            return;
        }
        if (currSum > n || curr.length === k) {
            return;
        }
        for (let x = number; x < 10; x++) { // Loop from the current number up to 9
            curr.push(x);
            backtrack(x + 1, curr, currSum + x); // Recursive call with updated parameters
            curr.pop(); // Backtrack to remove the last element and try the next possibility
        }
    }
    backtrack(1, [], 0); // Start recursion with the number 1
    return res;
};
console.log(combinationSum3(2, 5));

