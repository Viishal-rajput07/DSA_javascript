/**
Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
You may return the answer in any order.
Example:
n = 4
k=2

Output 
[
[1,2],[1,3],[1,4],
[2,3],[2,4],
[3,4]
] 
Time complexity = 0(n x (n! / (k! * (n-k)!)))
space complexity = 0(n )
 */

    
    function combination_of_K(arr, k = 2) {
      let res = [];
  
      function helper(start, curr) {
          // base case
          if (curr.length === k) {
              res.push([...curr]);
              return;
          }
  
          // recursive case
          let need = k - curr.length;
          for (let j = start; j <= arr.length - need ; j++) {
              curr.push(arr[j]);
              helper(j + 1, curr);
              curr.pop();
          }
      }
  
      helper(0, []);
      return res;
  }
  
  console.log(combination_of_K([1, 5, 3, 4]));
  
