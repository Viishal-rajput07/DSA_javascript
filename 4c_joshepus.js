// time Complexity = 0(n)
// space Complexity = 0(1)

function winner(n, k){

    let surviour = 0;

    for(let i=2 ; i <= n ; i++){
        surviour = (surviour + k)% i;
    }
    return surviour + 1
}

console.log(winner(5, 2))