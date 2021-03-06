/**
 * 将数组转换成高度平衡二叉树(二分分配)
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
	return distribution(nums, 0, nums.length - 1)

	function distribution(num, start, end) {
		if (start > end) {
			return null
		}
		var index = start + parseInt((end - start) / 2)
		var theNum = num[index]
		var root = new TreeNode(theNum)
		root.left = distribution(num, start, index - 1)
		root.right = distribution(num, index + 1, end)
	}
};