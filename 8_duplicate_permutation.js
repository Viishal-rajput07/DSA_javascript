/**
 Given a collection of numbers, nums, that might contain duplicates, return all possible  uniquepermutations in any order.
Example:
nums = [3,3,2]
Output :
[[3,3,2] , [3,2,3], [2,3,3] ]

Time complexity = 0(n x n!)
Space complexity = 0(n)
*/


function permute(nums) {
  let res = [];
  let n = nums.length;
  function permutation(index) {
    if (index === n - 1) {
      res.push([...nums]);
    }
    let hash = {};
    for (let j =index; j < n; j++) {
      if (!hash[nums[j]]) {
        hash[nums[j]] = (1);
        [nums[index], nums[j]] = [nums[j], nums[index]];
        permutation(index + 1);
        [nums[index], nums[j]] = [nums[j], nums[index]];
      }
    }
  }
  permutation(0);
  return res;
}
console.log(permute([1,2,2]))