/**
 * 给定一个数组nums，写一个函数将所有的0移动到它的结尾，同时保持非零元素的相对顺序。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	debugger
	var len = nums.length
	for (var i = 0; i < len; i++) {
		if (nums[i] == 0) {
			nums.push(0)
		}
	}
	for (var i = 0; i < len; i++) {
		if (nums[i] == 0) {
			nums.splice(i, 1)
			i--
			len--
		}
	}
};