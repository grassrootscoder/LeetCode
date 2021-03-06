/**
 * 给定已经按升序排序的整数数组，找到两个数字，使得它们加起来达到特定的目标数。
 * 函数twoSum应该返回两个数字的索引，使得它们加到目标，其中index1必须小于index2。
 * 请注意，您返回的答案（index1和index2）不是从零开始的。
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	var result = []
	var flag = numbers.length - 1
	for (var i = 0; i <= flag; i++) {
		if (numbers[i] + numbers[flag] > target) {
			flag--
			i--
		}
		if (numbers[i] + numbers[flag] == target) {
			result.push(i + 1)
			result.push(flag + 1)
			break
		}
	}
	return result
};