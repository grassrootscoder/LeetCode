/**
 * 数组内 n-1 个元素每次只能同步增减 1，求出数组内各个数都相等需要多少次
 * @param {number[]} nums
 * @return {number}
 * 推理得出通向公式：次数 = 最终相等的值 - 最小值
 * 次数 = 所有项的和 - 最小值 * （项数 - 1）
 */
var minMoves = function (nums) {
	debugger
	var len = nums.length
	var sum = 0
	nums = nums.sort(function (a, b) {
		return a - b
	})
	for (var i = 0; i < len; i++) {
		sum += nums[i]
	}
	sum = sum - len * nums[0]
	return sum
};