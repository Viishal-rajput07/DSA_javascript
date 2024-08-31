/**
Power Set - Given an integer array of unique elements, return all possible subsets (the power set). 
The solution set must not contain duplicate subsets. Return the solution in any order.

Time Complexity = (n x 2^n)
space Complexity = (n)
 */

function powerSet(nums) {
  let output = [];
  function helper(i, nums, superset) {
    if (i === nums.length) {
      output.push(superset.slice());
      return;
    }

    // don't add
    helper(i+1, nums, superset);

    //add
    superset.push(nums[i]);
    helper(i+1, nums, superset);
    superset.pop();
  }
  helper(0, nums, (superset = []));
  return output;
}

console.log(powerSet([1, 2, 2]));
