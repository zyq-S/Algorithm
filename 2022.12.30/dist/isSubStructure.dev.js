"use strict";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 剑指 Offer 26. 树的子结构
 * 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)
 * B是A的子结构， 即A中有出现和B相同的结构和节点值。
 */

/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
// 参考解题（不完全懂）
var _isSubStructure = function isSubStructure(A, B) {
  if (A === null || B === null) return false;

  function dfs(A, B) {
    if (B == null) return true;
    if (A == null) return false;
    return A.val === B.val && dfs(A.left, B.left) && dfs(A.right, B.right);
  }

  return dfs(A, B) || _isSubStructure(A.left, B) || _isSubStructure(A.right, B);
}; // 自己解题：


var _isSubStructure = function _isSubStructure(A, B) {
  if (!B) {
    return false;
  }

  for (var i = 0; i < B.length; i++) {
    for (var j = 0; j < A.length; j++) {
      if (B[i] === A[j]) {
        B[i].left;
      }
    }
  }
};