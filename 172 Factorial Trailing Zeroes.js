/**
 * 输出 n 的阶乘数后有几个 0
 * 10除了1和自己，只能被2、5整除
 * 所以一个数一旦可以被5整除（阶乘到5的时候已经可以）
 * 其阶乘的得到数字末尾0的个数增加1
 * 如果这个数是5的次方数，0的个数会增加更多，增加的数字
 */
var trailingZeroes = function (n) {
	var result = 0
	for (; n; n = parseInt(n / 5)) {
		result += parseInt(n / 5)
	}
	return result
};