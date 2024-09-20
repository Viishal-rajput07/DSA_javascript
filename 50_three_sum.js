// Method:1 Without sorting, T=0(n^2) | S=0(n)

const threeSum = (nums) => {

    const res = new Set()

    for (let i = 0; i < nums.length; i++) {
        const need = new Set();

        for (let j = i + 1; j < nums.length; j++) {

            const valueNeeded = -(nums[i] + nums[j])

            if (need.has(valueNeeded)) {
                const triplet = [nums[i], nums[j], valueNeeded].sort((a, b) => a - b)
                res.add(triplet.toString())
            }
            need.add(nums[j])
        }
    }
    console.log(res)
    return Array.from(res).map(triplet => triplet.split(',').map(Number))
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))


// Method:2 With Sorting, T=0(n^2) | S=0(1)

const threeSum2 = (nums) => {

    nums.sort((a, b) => a - b)
    let res = []

    for (let i = 0; i < nums.length; i++) {

        if (i === 0 || nums[i - 1] !== nums[i]) {
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {

                let sumThree = nums[i] + nums[left] + nums[right];

                if (sumThree === 0) {
                    res.push([nums[i], nums[left], nums[right]])
                    left++;

                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                }

                else if (sumThree < 0) {
                    left++
                }
                else {
                    right--
                }
            }
        }
    }

    return res
}

console.log(threeSum2([-1, 0, 1, 2, -1, -4]));
