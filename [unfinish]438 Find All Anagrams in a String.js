var findAnagrams = function (s, p) {
	var number = []
	var residue
	for (var i = 0; i < s.length - p.length + 1; i++) { // 从0来世遍历数组 s，直到最后一个可以比较的第一个 s
		residue = p
		for (var j = i; j < i + p.length; j++) { // 从i开始，向后挑选p长度字符串
			for (var k = 0; k < residue.length; k++) {
				if (s[j] == residue[k]) {
					if (k == 0) {
						residue = residue.slice(1, residue.length)
						break
					} else if (k == residue.length - 1) {
						residue = residue.slice(0, residue.length - 1)
						break
					} else {
						residue = residue.slice(0, k).concat(residue.slice(k + 1, residue.length))
						break
					}
				}
			}
		}
		if (residue.length == 0) {
			number.push(i)
		}
	}
	return number
};
findAnagrams("cbaebabacd", "abc")