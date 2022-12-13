"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * @param {number[]} postorder
 * @return {boolean}
 * 题目：
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。
 *
 * 解析：
 * 二叉搜索树特点是右子树值永远大于左子树
 * 后序遍历：左子树 -> 右子树 -> 根
 * 取出左子树，取出右子树，判断右子树 和 根相比最小值是不是根值，否，则返回false
 * 递归左子树和右子树，直到树中值元素<=2 返回true;
 * 举例[1,6,3,2,5]，分为左子树[1],右子树[6,3,2],根[5], Math.min(6,3,2,5) !== 5, return false
 * 时间空间复杂度： O(nlogn), O(n)
 * 
解题思路：
    后序遍历定义： [ 左子树 | 右子树 | 根节点 ] ，即遍历顺序为 “左、右、根” 。
    二叉搜索树定义： 左子树中所有节点的值 << 根节点的值；右子树中所有节点的值 >> 根节点的值；其左、右子树也分别为二叉搜索树。

方法一：递归分治
    根据二叉搜索树的定义，可以通过递归，判断所有子树的 正确性 （即其后序遍历是否满足二叉搜索树的定义） ，若所有子树都正确，则此序列为二叉搜索树的后序遍历。

递归解析：
    终止条件： 当 i≥ji≥j ，说明此子树节点数量 ≤1≤1 ，无需判别正确性，因此直接返回 true；
    递推工作：
        划分左右子树： 遍历后序遍历的 [i,j][i,j] 区间元素，寻找 第一个大于根节点 的节点，索引记为 mm 。此时，可划分出左子树区间 [i,m−1][i,m−1] 、右子树区间 [m,j−1][m,j−1] 、根节点索引 jj 。
        判断是否为二叉搜索树：
            左子树区间 [i,m−1][i,m−1] 内的所有节点都应 << postorder[j]postorder[j] 。而第 1.划分左右子树 步骤已经保证左子树区间的正确性，因此只需要判断右子树区间即可。
            右子树区间 [m,j−1][m,j−1] 内的所有节点都应 >> postorder[j]postorder[j] 。实现方式为遍历，当遇到 ≤postorder[j]≤postorder[j] 的节点则跳出；则可通过 p=jp=j 判断是否为二叉搜索树。
        返回值： 所有子树都需正确才可判定正确，因此使用 与逻辑符 &&&& 连接。
        p=jp=j ： 判断 此树 是否正确。
        recur(i,m−1)recur(i,m−1) ： 判断 此树的左子树 是否正确。
        recur(m,j−1)recur(m,j−1) ： 判断 此树的右子树 是否正确。

复杂度分析：
    时间复杂度 O(N2)O(N2) ： 每次调用 recur(i,j)recur(i,j) 减去一个根节点，因此递归占用 O(N)O(N) ；最差情况下（即当树退化为链表），每轮递归都需遍历树所有节点，占用 O(N)O(N) 。
    空间复杂度 O(N)O(N) ： 最差情况下（即当树退化为链表），递归深度将达到 NN 。

 */

/**
 * 方法二：辅助单调栈

    此方法参考于大佬 @失火的夏天 的解析。
    后序遍历倒序： [ 根节点 | 右子树 | 左子树 ] 。类似 先序遍历的镜像 ，即先序遍历为 “根、左、右” 的顺序，而后序遍历的倒序为 “根、右、左” 顺序。
        设后序遍历倒序列表为 [rn,rn−1,...,r1][rn​,rn−1​,...,r1​]，遍历此列表，设索引为 ii ，若为 二叉搜索树 ，则有：
        当节点值 ri>ri+1ri​>ri+1​ 时： 节点 riri​ 一定是节点 ri+1ri+1​ 的右子节点。
        当节点值 ri<ri+1ri​<ri+1​ 时： 节点 riri​ 一定是某节点 rootroot 的左子节点，且 rootroot 为节点 ri+1,ri+2,...,rnri+1​,ri+2​,...,rn​ 中值大于且最接近 riri​ 的节点（∵ rootroot 直接连接 左子节点 riri​ ）。
    当遍历时遇到递减节点 ri<ri+1ri​<ri+1​ ，若为二叉搜索树，则对于后序遍历中节点 riri​ 右边的任意节点 rx∈[ri−1,ri−2,...,r1]rx​∈[ri−1​,ri−2​,...,r1​] ，必有节点值 rx<rootrx​<root 。
    节点 rxrx​ 只可能为以下两种情况：① rxrx​ 为 riri​ 的左、右子树的各节点；② rxrx​ 为 rootroot 的父节点或更高层父节点的左子树的各节点。在二叉搜索树中，以上节点都应小于 rootroot 。

    遍历 “后序遍历的倒序” 会多次遇到递减节点 riri​ ，若所有的递减节点 riri​ 对应的父节点 rootroot 都满足以上条件，则可判定为二叉搜索树。
    根据以上特点，考虑借助 单调栈 实现：
        借助一个单调栈 stackstack 存储值递增的节点；
        每当遇到值递减的节点 riri​ ，则通过出栈来更新节点 riri​ 的父节点 rootroot ；
        每轮判断 riri​ 和 rootroot 的值关系：
            若 ri>rootri​>root 则说明不满足二叉搜索树定义，直接返回 falsefalse 。
            若 ri<rootri​<root 则说明满足二叉搜索树定义，则继续遍历。

算法流程：

    初始化： 单调栈 stackstack ，父节点值 root=+∞root=+∞ （初始值为正无穷大，可把树的根节点看为此无穷大节点的左孩子）；
    倒序遍历 postorderpostorder ：记每个节点为 riri​；
        判断： 若 ri>rootri​>root ，说明此后序遍历序列不满足二叉搜索树定义，直接返回 falsefalse ；
        更新父节点 rootroot ： 当栈不为空 且 ri<stack.peek()ri​<stack.peek() 时，循环执行出栈，并将出栈节点赋给 rootroot 。
        入栈： 将当前节点 riri​ 入栈；
    若遍历完成，则说明后序遍历满足二叉搜索树定义，返回 truetrue 。

作者：jyd
链接：https://leetcode.cn/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/solution/mian-shi-ti-33-er-cha-sou-suo-shu-de-hou-xu-bian-6/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
var verifyPostorder = function verifyPostorder(postorder) {
  // 终止条件，树节点 <=2 返回 true
  if (postorder.length <= 2) return true; // 根节点

  var root = postorder[postorder.length - 1]; // 寻找 第一个大于根节点 的节点 inx

  var idx = postorder.findIndex(function (item) {
    return item > root;
  }); // 划分出：左子树区间 [left, inx - 1]

  var left = postorder.slice(0, idx); // 划分出：右子树区间 [inx, postorder.length - 1]

  var right = postorder.slice(idx, -1); // 二叉搜索树的右子树和根相比，最小值一定是根值
  // 因为前面根据找到的第一个大于根节点的值，所以左区间都小于根节点，无需判断

  if (Math.min.apply(Math, [root].concat(_toConsumableArray(right))) !== root) return false;
  return verifyPostorder(left) && verifyPostorder(right);
};