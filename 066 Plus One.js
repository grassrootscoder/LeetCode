/**
 * 将一个非负整数按位存储于数组中并加一
 * 逐个成员累计
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	var result = []
	var isAdd = []
	digits.unshift(0)
	for (var i = 0; i < digits.length; i++) {
		result[i] = 0
		isAdd[i] = 0
	}
	isAdd[isAdd.length - 1] = 1
	var s = 0
	for (var i = digits.length - 1; i >= 0; i--) {
		s = (digits[i] === undefined ? 0 : digits[i]) + (isAdd[i] === undefined ? 0 : isAdd[i]) + result[i]
		result[i] = s % 10
		result[i - 1] = parseInt(s / 10)
	}
	if (result[0] === 0)
		result.shift()
	return result
};