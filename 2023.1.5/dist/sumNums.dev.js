"use strict";

/**
 * 求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 * @param {number} n
 * @return {number}
 */
var sumNums = function sumNums(n) {
  //求和公式

  /**
   * 扩展：
   * 计算给定数组 arr 中所有元素的总和
   * var array = [1, 2, 3, 4, 5];
   * 
   * 拿到数组长度: var len = array.length;
   * var num = (len*(len+1))/2
   * */
  //return (n*(n+1)) / 2

  /**
   * && 的短路特性
      A && B
      A 为 true，则返回表达式 B 的 bool 值
      A 为 false，则返回 false
   */
  return n && (n = n + sumNums(n - 1));
};