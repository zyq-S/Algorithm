/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 ****题目描述：*****
 给定一个二叉树 根节点 root ，树的每个节点的值要么是 0，要么是 1。请剪除该二叉树中所有节点的值为 0 的子树。
 节点 node 的子树为 node 本身，以及所有 node 的后代。
 ****解析：******
 遍历一棵树，只要节点在该分支上没有出现1，就剪掉该节点以及其后面的分支
每个节点：0，null，1；
核心：从最后一层，叶子节点开始剪
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {
    if (!root) {
        return null
    }
    pruneTree(root.left)
    pruneTree(root.right)
    // 剪枝的关键点，从最后一层的叶子节点开始判断，左右子节点为null（叶子节点），且该节点为0的即为null，逐步往上执行操作
    if (!root.left && !root.right && root.val === 0) {
        return null
    }
};