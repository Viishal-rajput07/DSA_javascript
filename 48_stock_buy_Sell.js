/*
Coding Exercise: Best Time to Buy and Sell Stock
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the 
future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example:

Input: prices = [9,1,5,3,7,5]

Output: 6
*/
// T=0(n) | S=0(1)
const maxProfit = (prices) => {
    let buy = 0
    let profit = 0

    for (let sell = 1; sell < prices.length; sell++) {

        if (prices[buy] > prices[sell]) {
            buy = sell
        }
        else {
            profit = Math.max(profit, prices[sell] - prices[buy])
        }

    }

    return profit
}

console.log(maxProfit([9, 1, 5, 3, 7, 5]))