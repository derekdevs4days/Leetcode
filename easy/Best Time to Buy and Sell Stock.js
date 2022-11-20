/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104


Algorithm:
sliding window approach.
- declare a buy variable
- set a sell variable
- set a profit variable
- iterate through array
    - if sell is lower than buy => change buy
    - find difference from buy and sell
    - if difference is greater than profit => reassign profit
    - increment sell;
- return profit
 */

function maxProfit(prices) {
   let [buy, sell, profit] = [0, 1, 0];

   while (sell !== prices.length) {
    const lowerPrice = prices[sell] <= prices[buy];
    if (lowerPrice) buy = sell;

    const diff = prices[sell] - prices[buy];
    if (diff > profit) profit = diff;
    sell++; 
   }
   return profit;
}
console.log(maxProfit([7,6,4,3,1]))
console.log(maxProfit([7,1,5,3,6,4]))