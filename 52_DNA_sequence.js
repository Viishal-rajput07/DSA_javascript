// T = 0(n) | S = 0(n)
const findRepeatedDnaSequence = (s) =>{

    let L = 10;
    let n = s.length
    let seen = new Set();
    let repeated = new Set();
   
    for(let start = 0; start <=n-L; start++){

        // n = 20, L=10; first seq(0, index-9), last seq(10, index-19)  => 20-10(n-L) = 10

        const temp = s.slice(start, start+L);
        
        if(seen.has(temp)){
            repeated.add(temp)
        }

        seen.add(temp)
    }

    return Array.from(repeated)
}
console.log(findRepeatedDnaSequence('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'))