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
*/

/*
input: array containing prices
output: number that represents the highest profit

algorithm:
- declare a variable 'profit' and set to 0
- declare a variable 'buy' and set to 0
- declare a variable 'sell' and set to 1
 
- while sell is less than the number of stonks in the array
    - check if current sell is less than buy
        - if yes => reassign index of buy to sell

    - declare a variable 'newProfit' and set it to current sell - current buy
    - if 'newProfit' is greater than profit
        - reassign profit to new profit

    - increment sell by 1

- return profit
*/

const maxProfit = function (prices) {
  let profit = 0;
  let [buy, sell] = [0, 1];

  while (sell < prices.length) {
    if (prices[sell] < prices[buy]) buy = sell;

    const newProfit = prices[sell] - prices[buy];
    if (newProfit > profit) {
      profit = newProfit;
    }

    sell++;
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]) === 5);
console.log(maxProfit([7, 6, 4, 3, 1]) === 0);
