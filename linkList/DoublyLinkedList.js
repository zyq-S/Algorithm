/**
 * 链表有多种不同的类型，本节介绍双向链表。双向链表和普通链表的区别在于，在链表中，一个节点只有链向下一个节点的链接；而在双向链表中，链接是双向的：一个链向下一个元素，另一个链向前一个元素
 * DoublyLinkedList类是一种特殊的LinkedList类，我们要扩展LinkedList类（行{4}）。这表示DoublyLinkedList类将继承（可访问）LinkedList类中所有的属性和方法。一开始，在DoublyLinkedList的构造函数中，我们要调用LinkedList的构造函数（行{5}），它会初始化equalsFn、count和head属性。另外，我们也会保存对链表最后一个元素的引用（tail——行{6}）。

双向链表提供了两种迭代的方法：从头到尾，或者从尾到头。
我们也可以访问一个特定节点的下一个或前一个元素。
为了实现这种行为，还需要追踪每个节点的前一个节点。
所以除了Node类中的element和next属性，DoubleLinkedList会使用一个特殊的节点，这个名为DoublyNode的节点有一个叫作prev的属性（行{3}）。
DoublyNode扩展了Node类，因此我们可以继承element和next属性（行{1}）。
由于使用了继承，我们需要在DoublyNode类的构造函数中调用Node的构造函数（行{2}）。
双向链表优势：在单向链表中，如果迭代时错过了要找的元素，就需要回到起点，重新开始迭代。这是双向链表的一个优势。

*/
class DoublyNode extends Node { // {1}
    constructor(element, next, prev) {
        super(element, next); // {2}
        this.prev = prev; // {3} 新增的
    }
}

class DoublyLinkedList extends LinkedList { // {4}
    constructor(equalsFn = defaultEquals) {
        super(equalsFn); // {5}
        this.tail = undefined; // {6} 新增的
    }
    // 在任意位置插入新元素
    /**
     * 向双向链表中插入一个新元素跟（单向）链表非常类似。区别在于，链表只要控制一个next指针，而双向链表则要同时控制next和prev（previous，前一个）这两个指针。在DoublyLinkedList类中，我们将重写insert方法，表示我们会使用一个和LinkedList类中的方法行为不同的方法
     */
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) { // {1} 新增的
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head; // {2}
                    current.prev = node; // {3} 新增的
                    this.head = node; // {4}
                }
            } else if (index === this.count) { // 最后一项 // 新增的
                current = this.tail; // {5}
                current.next = node; // {6}
                node.prev = current; // {7}
                this.tail = node; // {8}
            } else {
                const previous = this.getElementAt(index - 1); // {9}
                current = previous.next; // {10}
                node.next = current; // {11}
                previous.next = node; // {12}
                current.prev = node; // {13} 新增的
                node.prev = previous; // {14} 新增的
            }
            this.count++;
            return true;
        }
        return false;
    }
    removeAt(index) {
        if (index >= 0 && index < this.count) {
          let current = this.head;
          if (index === 0) {
            this.head = current.next; // {1}
            // 如果只有一项，更新tail // 新增的
            if (this.count === 1) { // {2}
              this.tail = undefined;
            } else {
              this.head.prev = undefined; // {3}
            }
          } else if (index === this.count - 1) { // 最后一项 //新增的
            current = this.tail; // {4}
            this.tail = current.prev; // {5}
            this.tail.next = undefined; // {6}
          } else {
            current = this.getElementAt(index); // {7}
            const previous = current.prev; // {8}
            // 将previous与current的下一项链接起来——跳过current
            previous.next = current.next; // {9}
            current.next.prev = previous; // {10} 新增的
          }
          this.count--;
          return current.element;
        }
        return undefined;
      }
}
