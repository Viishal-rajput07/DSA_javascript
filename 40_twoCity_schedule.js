/*
Coding Exercise: Two City Scheduling
A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost 
of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.
*/

// T=O(nlogn) | S=O(1)
const twoCityScheduleCost = (arr) =>{
    let n = arr.length
    arr.sort((a,b) => ((a[0]-a[1]) - (b[0]-b[1])))

    let cost = 0

    for(let i =0; i<n; i++){

        if(i<(n/2)){
            cost += arr[i][0]
        }
        else{
            cost += arr[i][1]
        }
    }

    return cost
}

console.log(twoCityScheduleCost([[10,20],[30,200],[400,50],[30,20]]))
