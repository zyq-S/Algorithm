/**
 * Definition for a binary tree node.
 * 寻找搜索二叉树最底层最左边的节点的值
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 深度遍历
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    const dfs = function (root, height) {
        if (!root) {
            return
        }
        height++
        dfs(root.left, height);
        dfs(roo.right, hieght);
        if (height > maxHeight) {
            maxHeight = height;
            val = root.val
        }
        let maxHeight = 0;
        dfs(root, 0)
    }
    return val
};
/**
 * 广度遍历
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    let tree = [root];
    let val = 0
    while(tree.length){
        let p = tree.shift()
        if(p.right){
            tree.push(p.right)
        }
        if(p.left){
            tree.push(p.left)
        }
    }
    val = p.val
    return val
};