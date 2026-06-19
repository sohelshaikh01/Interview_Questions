// Best Time to Buy And Sell Stocks - LC121

// You are given an array prices where prices[i] is the price of the given stock
// on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock.
// and choosing a different day in the future to sell the stock.
// Return the maximum profit, If you cannot achieve profit return 0;

// Input:
// prices = [7, 1, 5, 3, 6, 4]  Output: 5
// prices = [7, 6, 4, 3, 1]  Output: 0
// Can be sell all on same day

// In real you cannot have whole week data
// Also you cannot sell in past

// TLE
function maxProfit(prices) {
    let globalProfit = 0;

    for(let i=0; i < prices.length; i++) {
        for(let j=0; j < prices.length; j++) {
            const currentProfit = prices[j] - prices[i];

            if(currentProfit > globalProfit) globalProfit = currentProfit;
        }
    }

    return globalProfit;
}

// Optimized Greedy Algorithm
const maxProfit = function() {
    let minStockPurchasePrice = prices[0] || 0;
    let profit = 0;

    for(let i=1; i < prices.length; i++) {
        if(prices[i < minStockPurchasePrice]) {
            minStockPurchasePrice = prices[i];
        }

        let currentProfit = prices[i] - minStockPurchasePrice;
        profit = Math.max(profit, currentProfit);
    }

    return profit;
}