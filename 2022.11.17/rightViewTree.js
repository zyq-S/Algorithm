/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 二叉树的右侧视图，给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * 解析：右子树所有节点，以及超出右子树最右侧节点深度的节点或者左节点
 * 用到深度遍历
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    let result = []
    const dfs = function (root,height) {
        if (!root) {
            return
        }
        height++;
        dfs(root.right)
        result.push(root)
        if(height>maxHeight){

        }
    }
};