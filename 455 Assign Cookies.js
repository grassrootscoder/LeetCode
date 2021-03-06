/**
 * 假设你是一位很赞的家长想要给孩子一些饼干。但是，你只能至多给每个孩子一个饼干。孩子i的贪婪因子为gi，意思是他所满意的饼干的最小尺寸；每一个饼干j的尺寸为sj。如果sj >= gi，我们就可以把饼干j分给孩子i，然后孩子i会很满意。你的目标是最大化分到饼干的孩子的个数。
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
	debugger
	var child = g.sort(function (a, b) {
		return a - b;
	})
	var cookie = s.sort(function (a, b) {
		return a - b;
	})
	var count = 0
	for (var i = child.length - 1, j = cookie.length - 1; i >= 0 && j >= 0; i--) {
		if (cookie[j] >= child[i]) {
			count++
			j--
		}
	}
	return count
};