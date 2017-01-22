/**
	 * 给定两个字符串，编写一个函数，如果第二个字符串可以构建第一个，则该函数将返回true; 否则，将返回false。
	 * 符串中的每个字母只能在您的赎金备注中使用一次。

	 * @param {string} ransomNote
	 * @param {string} magazine
	 * @return {boolean}
	 */
var canConstruct = function (ransomNote, magazine) {
	var rsn = ransomNote.split("").sort()
	var mgz = magazine.split("").sort()
	var len = mgz.length
	for (var i = 0, j = 0; j < len; j++) {
		if (rsn[i] == mgz[j]) {
			i++
		}
	}
	if (i == rsn.length) {
		return true
	}
	return false
};