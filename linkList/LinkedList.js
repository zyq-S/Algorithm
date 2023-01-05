import { defaultEquals } from '../util';
import { Node } from './models/linked-list-models'; // {1}

export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0; // {2}
        this.head = undefined; // {3}
        this.equalsFn = equalsFn; // {4}
    }
    // 循环迭代链表直到目标位置
    getElementAt(index) {
        if (index >= 0 && index <= this.count) { // {1}
            let node = this.head; // {2}
            for (let i = 0; i < index && node != null; i++) { // {3}
                node = node.next;
            }
            return node; // {4}
        }
        return undefined; // {5}
    }
    //向链表尾部添加元素 push方法
    /**
     * 
    场景1：向空列表添加一个元素
    当我们创建一个`LinkedList`对象时，`head`会指向`undefined`（或者是`null`）。如果`head`
    元素为`undefined`或`null`（列表为空——行`{3}`），就意味着在向链表添加第一个元素。此要做的就是让`head`元素指向`node`元素。下一个`node`元素会自动成为`undefined`。链表最后一个节点的下一个元素始终是`undefined`或`null`。
    
    场景2：向不为空的链表尾部添加元素
    要向链表的尾部添加一个元素，首先需要找到最后一个元素。记住，我们只有第一个元素的引用（行`{4}`），因此需要循环访问列表，直到找到最后一项。为此，我们需要一个指向链表中`current`项的变量（行`{2}`）。
    在循环访问链表的过程中，当`current.next`元素为`undefined`或`null`时，我们就知道已经到达链表尾部了（行`{5}`）。然后要做的就是让当前（也就是最后一个）元素的`next`指针指向想要添加到链表的节点（行`{6}`）。
     *
     * @param {*} element 
     */
    push(element) {
        const node = new Node(element); // {1}
        let current; // {2}
        if (this.head == null) { // {3}判断是否是第一个如果head元素为undefined或null（列表为空——行{3}），就意味着在向链表添加第一个元素。
            this.head = node;
        } else { // 链表不为空时
            current = this.head; // {4}
            while (current.next != null) { // {5} 获得最后一项
                current = current.next;
            }
            // 将其next赋为新元素，建立链接
            current.next = node; // {6}
        }
        this.count++; // {7}
    }
    // 从链表中移除元素
    /**
     * 我们要实现两种remove方法：
     * 第一种是从特定位置移除一个元素（removeAt），
     * 第二种是根据元素的值移除元素（稍后我们会展示第二种remove方法）。
     * 和push方法一样，对于从链表中移除元素也存在两种场景：
     * 第一种是移除第一个元素，第二种是移除第一个元素之外的其他元素。
     */
    removeAt(index) {
        // 检查越界值
        if (index >= 0 && index < this.count) { // {1}
            let current = this.head; // {2}
            // 移除第一项
            if (index === 0) { // {3}
                this.head = current.next;
            } else {
                let previous; // {4}
                for (let i = 0; i < index; i++) { // {5}
                    previous = current; // {6}
                    current = current.next; // {7}
                }
                // 将previous与current的下一项链接起来：跳过current，从而移除它
                previous.next = current.next; // {8}
            }
            this.count--; // {9}
            return current.element;
        }
        return undefined; // {10}
    }
    // 在任意位置插入元素
    /**
     * 
     * @param {*} element 
     * @param {*} index 
     * @returns 
     * 由于我们处理的是位置（索引），就需要检查越界值（行{1}，跟remove方法类似）。如果越界了，就返回false值，表示没有添加元素到链表中（行{7}）
     * 如果位置合法，我们就要处理不同的场景。
     * 第一种场景是需要在链表的起点添加一个元素，也就是第一个位置
     * 如果试图向最后一个位置添加一个新元素，previous将是对链表最后一个元素的引用，而current将是undefined。在这种情况下，node.next将指向current，而previous.next将指向node，这样链表中就有了一个新元素。
     * 如何向链表中间添加一个新元素。在这种情况下，我们试图将新元素（node）插入previous和current元素之间。首先，我们需要把node.next的值指向current，然后把previous.next的值设为node。这样列表中就有了一个新元素
     */
    insert(element, index) {
        if (index >= 0 && index <= this.count) { // {1}
            const node = new Node(element);
            if (index === 0) { // 在第一个位置添加
                const current = this.head;
                node.next = current; // {2}
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1); // {3}
                const current = previous.next; // {4}
                node.next = current; // {5}
                previous.next = node; // {6}
            }
            this.count++; // 更新链表的长度
            return true;
        }
        return false; // {7}
    }
    // indexOf方法：返回一个元素的位置
    indexOf(element) {
        let current = this.head; // {1}
        for (let i = 0; i < this.count && current != null; i++) { // {2}
            if (this.equalsFn(element, current.element)) { // {3}
                return i; // {4}
            }
            current = current.next; // {5}
        }
        return -1; // {6}
    }
}
export function defaultEquals(a, b) {
    return a === b;
}
export class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}
