/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 请实现一个函数按照之字形顺序打印二叉树，
 * 即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) {
        return
    }
    let result = []
    let array = [root]
    let leftOrder = true
    while (array.length) {
        let levelList = []
        let size = array.length
        while(size) {
            const node = array.shift()
            if (leftOrder) {
                levelList.push(node.val)
            } else {
                levelList.unshift(node.val)
            }
            if (node.left!=null) {
                array.push(node.left)
            }
            if (node.right!=null) {
                array.push(node.right)
            }
        }
        result.push(levelList)
        leftOrder = !leftOrder
    }

};
var levelOrder2 = function () {
    if (!root) {
        return [];
    }
    // 最后输出结果的数组
    const ans = [];
    // 存放所有节点的数组
    const nodeQueue = [root];
    // 是否是从左到右的顺序
    let isOrderLeft = true;
    // 循环所有节点
    while (nodeQueue.length) {
        // 存放每层节点的数组
        let levelList = [];
        // 因为在下面的循环中，会使用shift函数修改原数组的长度，所以执行之前先把长度赋值给一个变量
        const size = nodeQueue.length;
        // 内循环
        for (let i = 0; i < size; ++i) {
            const node = nodeQueue.shift();
            if (isOrderLeft) {
                levelList.push(node.val);
            } else {
                levelList.unshift(node.val);
            }
            if (node.left !== null) {
                nodeQueue.push(node.left);
            }
            if (node.right !== null) {
                nodeQueue.push(node.right);
            }
        }
        ans.push(levelList);
        isOrderLeft = !isOrderLeft;

    }
}