"use strict";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 向下的路径节点之和：
 * 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
 * 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
// 方法一，深度遍历，遍历每个节点开始往后的路径是否有满足条件的路径存在，并累加符合条件的路径条数
var _pathSum = function pathSum(root, targetSum) {
  // 如果根节点是null返回0
  if (!root) {
    return 0;
  } // 定义节点累计变量；定义符合目标值的路径数量


  var sum = root.val;
  var num = innerPathSum(root, targetSum);
  num += _pathSum(root.left, targetSum);
  num += _pathSum(root.right, targetSum); // 返回符合条件的路径数量

  return num;
};

var innerPathSum = function innerPathSum(root, targetSum) {
  var num = 0;

  if (root == null) {
    return 0;
  }

  var val = root.val;

  if (val === targetSum) {
    num++;
  } // 先遍历左子树


  num += innerPathSum(root.left, targetSum - val); // 再遍历右子树

  num += innerPathSum(root.right, targetSum - val);
  return num;
}; // ***？？？方法二


var _pathSum = function _pathSum(root, targetSum) {
  var prefix = new Map();
  prefix.set(0, 1);
  return dfs(root, prefix, 0, targetSum);
};

var dfs = function dfs(root, prefix, curr, targetSum) {
  if (root == null) {
    return 0;
  }

  var ret = 0;
  curr += root.val;
  ret = prefix.get(curr - targetSum) || 0;
  prefix.set(curr, (prefix.get(curr) || 0) + 1);
  ret += dfs(root.left, prefix, curr, targetSum);
  ret += dfs(root.right, prefix, curr, targetSum);
  prefix.set(curr, (prefix.get(curr) || 0) - 1);
  return ret;
};