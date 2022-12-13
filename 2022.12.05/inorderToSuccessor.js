/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 给定一棵二叉搜索树和其中的一个节点 p ，找到该节点在树中的中序后继。如果节点没有中序后继，请返回 null 。
   节点 p 的后继是值比 p.val 大的节点中键值最小的节点，即按中序遍历的顺序节点 p 的下一个节点。
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
// 法一
var inorderSuccessor = function (root, p) {
    let cur = root;
    let result = null;
    while (cur) {
        if (cur.val > p.val) {
            result = cur;
            cur = cur.left;
        } else {
            cur = cur.right;
        }
    }
    return result;
};

// 法二 
// 方法二：中序遍历
// 为了找到二叉搜索树中的节点 pp 的中序后继，最直观的方法是中序遍历。由于只需要找到节点 pp 的中序后继，因此不需要维护完整的中序遍历序列，只需要在中序遍历的过程中维护上一个访问的节点和当前访问的节点。如果上一个访问的节点是节点 pp，则当前访问的节点即为节点 pp 的中序后继。
// 如果节点 pp 是最后被访问的节点，则不存在节点 pp 的中序后继，返回 \text{null}null。
var inorderSuccessor = function (root, p) {
    const stack = [];
    let prev = null, curr = root;
    while (stack.length || curr) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        if (prev === p) {
            return curr;
        }
        prev = curr;
        curr = curr.right;
    }
    return null;
};

// 法三 该方法理解尚未透彻
/**
 * 方法三：利用二叉搜索树的性质
二叉搜索树的一个性质是中序遍历序列单调递增，因此二叉搜索树中的节点 pp 的中序后继满足以下条件：
中序后继的节点值大于 pp 的节点值；
中序后继是节点值大于 pp 的节点值的所有节点中节点值最小的一个节点。
利用二叉搜索树的性质，可以在不做中序遍历的情况下找到节点 pp 的中序后继。
如果节点 pp 的右子树不为空，则节点 pp 的中序后继在其右子树中，在其右子树中定位到最左边的节点，即为节点 pp 的中序后继。
如果节点 pp 的右子树为空，则需要从根节点开始遍历寻找节点 pp 的祖先节点。
将答案初始化为 \text{null}null。用 \textit{node}node 表示遍历到的节点，初始时 \textit{node} = \textit{root}node=root。每次比较 \textit{node}node 的节点值和 pp 的节点值，执行相应操作：
如果 \textit{node}node 的节点值大于 pp 的节点值，则 pp 的中序后继可能是 \textit{node}node 或者在 \textit{node}node 的左子树中，因此用 \textit{node}node 更新答案，并将 \textit{node}node 移动到其左子节点继续遍历；
如果 \textit{node}node 的节点值小于或等于 pp 的节点值，则 pp 的中序后继可能在 \textit{node}node 的右子树中，因此将 \textit{node}node 移动到其右子节点继续遍历。
由于在遍历过程中，当且仅当 \textit{node}node 的节点值大于 pp 的节点值的情况下，才会用 \textit{node}node 更新答案，因此当节点 pp 有中序后继时一定可以找到中序后继，当节点 pp 没有中序后继时答案一定为 \text{null}null。
 */
var inorderSuccessor = function (root, p) {
    let successor = null;
    if (p.right) {
        successor = p.right;
        while (successor.left) {
            successor = successor.left;
        }
        return successor;
    }
    let node = root;
    while (node) {
        if (node.val > p.val) {
            successor = node;
            node = node.left;
        } else {
            node = node.right;
        }
    }
    return successor;
};