//Approach 5: Binary Search, T=O(n * log n) , S=O(n)
const lengthOfLis = (nums) => {

    if (nums.length === 0) return 0;

    const binarySearch = (sub, num) => {

        let left = 0;
        let right = sub.length - 1

        while (left < right) {
            let mid = Math.floor((left + right) / 2)
            if (sub[mid] < num) {
                left = mid + 1
            }
            else {
                right = mid
            }
        }

        return left;
    }

    let sub = [nums[0]]

    for (let i = 1; i < nums.length; i++) {
        let num = nums[i]

        if (num > sub[sub.length - 1]) {
            sub.push(num)
        }
        else {
            let index = binarySearch(sub, num)
            sub[index] = num
        }
    }
    return sub.length
}

console.log(lengthOfLis([300,9,2,5,3,7,500,400]))