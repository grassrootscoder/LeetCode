/**
 * 假设你有一个数组，其中第i个元素是第i天给定股票的价格。
 * 设计一个算法来找到最大利润。
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var sum = 0
  for (var i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] > prices[i]) {
      sum += prices[i + 1] - prices[i]
    }
  }
  return sum
};