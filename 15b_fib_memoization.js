//Approach 2: recursion with memoization / top down, T=O(n) , S=O(n)
const fib_memo = (n) => {

    let memo = {0:0, 1:1}
    function calculateFib(num){
        if(memo[num] !== undefined) return memo[num]
        memo[num] = calculateFib(num-1) + calculateFib(num-2)
        return memo[num]
    }
    return calculateFib(n)
}

console.log(fib_memo(10))