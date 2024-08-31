var missingNumber = function(nums) {
    const max = Math.max(...nums)
    // console.log(max)
    let arr = nums.sort((a,b)=> a-b)
    for(let i=0; i<max; i++){
        // console.log(arr[i+1] - arr[i])

        if(arr[i+1] - arr[i] > 1){
            return arr[i+1] -1
        }
    }
    return max
};

console.log(missingNumber([0,1,2,3,4,5,6,7,8]))