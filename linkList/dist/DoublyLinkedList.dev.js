"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
var DoublyNode =
/*#__PURE__*/
function (_Node) {
  _inherits(DoublyNode, _Node);

  // {1}
  function DoublyNode(element, next, prev) {
    var _this;

    _classCallCheck(this, DoublyNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DoublyNode).call(this, element, next)); // {2}

    _this.prev = prev; // {3} 新增的

    return _this;
  }

  return DoublyNode;
}(_wrapNativeSuper(Node));

var DoublyLinkedList =
/*#__PURE__*/
function (_LinkedList) {
  _inherits(DoublyLinkedList, _LinkedList);

  // {4}
  function DoublyLinkedList() {
    var _this2;

    var equalsFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultEquals;

    _classCallCheck(this, DoublyLinkedList);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(DoublyLinkedList).call(this, equalsFn)); // {5}

    _this2.tail = undefined; // {6} 新增的

    return _this2;
  } // 在任意位置插入新元素

  /**
   * 向双向链表中插入一个新元素跟（单向）链表非常类似。区别在于，链表只要控制一个next指针，而双向链表则要同时控制next和prev（previous，前一个）这两个指针。在DoublyLinkedList类中，我们将重写insert方法，表示我们会使用一个和LinkedList类中的方法行为不同的方法
   */


  _createClass(DoublyLinkedList, [{
    key: "insert",
    value: function insert(element, index) {
      if (index >= 0 && index <= this.count) {
        var node = new DoublyNode(element);
        var current = this.head;

        if (index === 0) {
          if (this.head == null) {
            // {1} 新增的
            this.head = node;
            this.tail = node;
          } else {
            node.next = this.head; // {2}

            current.prev = node; // {3} 新增的

            this.head = node; // {4}
          }
        } else if (index === this.count) {
          // 最后一项 // 新增的
          current = this.tail; // {5}

          current.next = node; // {6}

          node.prev = current; // {7}

          this.tail = node; // {8}
        } else {
          var previous = this.getElementAt(index - 1); // {9}

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
  }, {
    key: "removeAt",
    value: function removeAt(index) {
      if (index >= 0 && index < this.count) {
        var current = this.head;

        if (index === 0) {
          this.head = current.next; // {1}
          // 如果只有一项，更新tail // 新增的

          if (this.count === 1) {
            // {2}
            this.tail = undefined;
          } else {
            this.head.prev = undefined; // {3}
          }
        } else if (index === this.count - 1) {
          // 最后一项 //新增的
          current = this.tail; // {4}

          this.tail = current.prev; // {5}

          this.tail.next = undefined; // {6}
        } else {
          current = this.getElementAt(index); // {7}

          var previous = current.prev; // {8}
          // 将previous与current的下一项链接起来——跳过current

          previous.next = current.next; // {9}

          current.next.prev = previous; // {10} 新增的
        }

        this.count--;
        return current.element;
      }

      return undefined;
    }
  }]);

  return DoublyLinkedList;
}(LinkedList);