/**
 * 输出帕斯卡三角的第 n 行
 * 由于前两行都没有父级加减，所以硬性输出前两行
 * 多余两行的，我们从后往前叠加，重复
 * @return {number[]}
 */
var getRow = function (rowIndex) {
	var result = [1, 1]
	if (rowIndex == 0) {
		return [1]
	} else if (rowIndex == 1) {
		return result
	} else {
		for (var i = 0; i < rowIndex - 1; i++) {
			for (var j = result.length - 1; j >= 1; j--) {
				result[j] = result[j] + result[j - 1]
			}
			result.push(1)
		}
		return result
	}
};
getRow(5)