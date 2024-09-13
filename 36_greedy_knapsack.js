/*
Coding Exercise : Fractional Knapsack
Determine how to optimally fill a knapsack with a capacity of W kilograms using a list of N items, where each 
item is represented by a pair [profit, weight]. In the Fractional Knapsack problem, you can take fractions of 
items to maximize the total profit in the knapsack.(N will be greater than equal to 1 )

Example 1:
Given arr[] = [[70, 10], [90, 20], [150, 30]]
W= 25
Expected output = 145

Example 2:
Given arr[] = [[70, 10], [90, 20], [150, 30]]
W= 45
Expected output = 242.5
*/

// Approach : Greedy - Fractional knapsack, T=O(nlogn), S=O(1)
const fractionalKnapsack = (W, arr) =>{
    arr.sort((a, b) => (b[0]/b[1]) - (a[0]/a[1]));

    let remainingWeight = W;
    let value = 0;

    for(let i = 0; i<arr.length; i++){
        
        if(remainingWeight === 0) break;

        let weight = Math.min(remainingWeight, arr[i][1])

        remainingWeight -= weight
        value += (arr[i][0]/arr[i][1]) * weight;  // 5 units mangoes $10, 2 => 10/5*2

    }
    return value
}
console.log(fractionalKnapsack(5, [[1,2], [2,3], [3,1]]))