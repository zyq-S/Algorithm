/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。
假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null
    }
    const index = inorder.findIndex(item => item === preorder[0])
    const left = inorder.slice(0, index)
    const right = inorder.slice(index + 1)
    return {
        val: preorder[0],
        left: buildTree(preorder.slice(1, index + 1), left),
        right: buildTree(preorder.slice(index + 1), right)
    }
};
