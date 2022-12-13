/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
 * 例如:
给定二叉树: [3,9,20,null,null,15,7]
返回：
[3,9,20,15,7]
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
    if (!root) {
        return
    }
    let array = []
    levelOrder(root.left)
    // if (root.left) {
    //     array.push(root.left)
    // }
    // if (root.right) {
    //     array.push(root.right)
    // }
    array.push(root.val)
    levelOrder(root.right)
    return array
};