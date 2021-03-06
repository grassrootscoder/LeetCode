/**
 * 编写一个函数来删除单链表中的一个节点（尾部除外），只给定该节点的访问权限。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    /**
    var tmp = node.val
    node.val = node.next.val
    node.next.val = tmp
    delete node.val
    */
    node.val = node.next.val
    node.next = node.next.next
};