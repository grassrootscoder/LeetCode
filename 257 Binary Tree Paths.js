/**
 * 输入二叉树数组，如：[1,2,3,null,5]
 * 输出子节点到根节点的路径，如：["1->2->5", "1->3"]
 *
 * 没有递归解决不了的二叉树问题，如果有，再加一个递归
 */
var binaryTreePaths = function (root) {
	var result = []
	if (!root) {
		return []
	} else {
		path(root, '')
		return result
	}

	function path(a, str) {
		if (a.right == null && a.left == null) {
			result.push(str + a.val)
		} else {
			if (a.left != null) {
				path(a.left, str + a.val + '->')
			}
			if (a.right != null) {
				path(a.right, str + a.val + '->')
			}
		}
	}
};
binaryTreePaths([1, 2, 3, null, 5])