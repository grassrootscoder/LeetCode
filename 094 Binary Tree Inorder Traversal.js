/**
 * 中序遍历二叉树
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
	var result = []
	if (root == null) {
		return result
	} else {
		traversal(root, result)
		return result
	}

	function traversal(r, t) {
		if (r == null) {
			return t
		}
		if (r.left != null) {
			traversal(r.left, t)
		}
		t.push(r.val)
		if (r.right != null) {
			traversal(r.right, t)
		}
	}
};