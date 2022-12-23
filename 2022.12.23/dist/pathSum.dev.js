"use strict";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
 * 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function pathSum(root, targetSum) {
  if (!root) {
    return;
  }

  var sum = 0;
  var num = 0;

  if (sum < targetSum) {
    sum += root.val;
  }

  if (sum === targetSum) {
    num++;
  }

  if (sum > targetSum) {
    sum = 0;
  }

  if (root.left) {
    pathSum(root.left, targetSum);
  }

  if (root.right) {
    pathSum(root.right, targetSum);
  }
};