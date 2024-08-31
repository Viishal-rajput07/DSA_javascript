// Approach 4: Optimized Tabulation / Bottom Up, T=O(n) , S=O(1)

const optimizedFib = (n) =>{

    if(n<=1) return n

    let prev = 0
    let current = 1

    let counter = 1

    while(counter < n ){
        let next = prev + current
        counter++ 
        prev = current
        current = next
    }
    return current
}
console.log(optimizedFib(5))

// Another method using for loop
const optimizedFib2 = (n) =>{
    
    if(n<=1) return n

    let prev = 0
    let current = 1

    for(let i = 1; i<n; i++){
        let next = prev + current
        prev = current
        current = next
    }
    return current
    
}
console.log(optimizedFib2(5))