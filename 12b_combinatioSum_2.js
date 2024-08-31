/*
Given a collection of candidate numbers (candidates) and a target number (target), find all unique 
combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

Example :

Input: candidates = [3,5,2,1,3], target = 7
Output: 
[
[1,3,3],
[5,2]
]

Time complexity = 0(2 ^n)
Space complexity = 0(n)
*/

function combinationSum(candidates, target) {
  let res = [];
  function combinationSumRecursive(i, curr, currsum) {

    
    if(currsum === target){
        res.push([...curr]);
        return;
    }
    if(currsum > target || i > candidates.length -1){
        return;
    }
  
    let hash = {}
    for(let j = i; j<candidates.length; j++){

      if(!hash[candidates[j]]){
          hash[candidates[j]] = true
          curr.push(candidates[j])
          combinationSumRecursive(j+1, curr, currsum + candidates[j])
          curr.pop()
      }
    }
  }
  combinationSumRecursive(0, [], 0);
  return res
  }
  console.log(combinationSum([1, 1, 1, 1, 2, 2], 4))