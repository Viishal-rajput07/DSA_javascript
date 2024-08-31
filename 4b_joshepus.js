/*
Time complexity :- 0(n)
space Complexity :- 0(n)
*/

function winner(n,k){

    function helper(n){
        if(n===1) return 0;

        return (helper(n-1) + k)%n
    }
    return helper(n) + 1
}

console.log(winner(5,2))
