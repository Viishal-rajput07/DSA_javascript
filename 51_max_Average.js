const findMaxAverage = (nums, k) => {
    
    let currentSum = 0

    for(let i = 0; i < k; i++) {
        currentSum += nums[i]
    }

    let maxSum = currentSum

    for(i=k; i < nums.length; i++){

        currentSum = currentSum + nums[i] - nums[i-k]

        maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum/k
}

console.log(findMaxAverage([1,12,20,-4,4,50,50], 4))