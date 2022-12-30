"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @param {number[]} temperatures
 * @return {number[]}
 * 剑指 Offer II 038. 每日温度
 * 请根据每日气温列表 temperatures ，重新生成一个列表，
 * 要求其对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。
 * 分析：实际上就是获取数组中每一个元素后面比它大的第一个元素和该元素之间的距离
 */
var dailyTemperatures = function dailyTemperatures(temperatures) {
  var myMap = new Map();

  for (var _index = 0; _index < temperatures.length; _index++) {
    myMap.set(_index, temperatures[_index]);
  }

  for (var _index2 = 0; _index2 < array.length; _index2++) {
    var element = array[_index2];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = myMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  var newArray = temperatures.splice(index, temperatures.length);

  for (var j = 0; j < newArray.length; j++) {
    var templeteArray = [];

    if (newArray[j] > temperatures[index]) {
      templeteArray.push(j - index);
    }
  }
};