"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _util = require("../util");

var _linkedListModels = require("./models/linked-list-models");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// {1}
var LinkedList = function LinkedList() {
  var equalsFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _util.defaultEquals;

  _classCallCheck(this, LinkedList);

  this.count = 0; // {2}

  this.head = undefined; // {3}

  this.equalsFn = equalsFn; // {4}
};

exports["default"] = LinkedList;