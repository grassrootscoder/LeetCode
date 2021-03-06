/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
	var result = []
	if (!root) {
		return 0
	} else {
		deep(root, 1)
		return result.sort(function (a, b) {
			return a - b
		})[result.length - 1]
	}

	function deep(r, count) {
		if (r.left == null && r.right == null) {
			result.push(count)
		} else {
			count++
			if (r.left != null) {
				deep(r.left, count)
			}
			if (r.right != null) {
				deep(r.right, count)
			}
		}
	}
};