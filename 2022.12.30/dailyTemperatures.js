/**
 * @param {number[]} temperatures
 * @return {number[]}
 * 剑指 Offer II 038. 每日温度？？？？？？没搞懂怎么做
 * 请根据每日气温列表 temperatures ，重新生成一个列表，
 * 要求其对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。
 * 分析：实际上就是获取数组中每一个元素后面比它大的第一个元素和该元素之间的距离
 */
var dailyTemperatures = function (temperatures) {
    var myMap = new Map();
    let result = []
    for (let index = 0; index < temperatures.length; index++) {
        myMap.set(index, temperatures[index]);

    }
    for (let index = 0; index < myMap.length; index++) {
        let newArray = myMap.splice(index, myMap.length)
        let templeteArray = []
        for (let j = 0; j < newArray.length; j++) {
            if (newArray[j][2] > myMap[index][2]) {
                templeteArray.push(newArray[j][1] - myMap[index][1])
            }
        }
        const getArrayMin = function (arr) {
            return Math.min.apply(null, arr)
        }
        let minData = getArrayMin(templeteArray)
        result.push(Math.min(minData))
    }
    return result
    // for (var [key, value] of myMap) {
    //     let newArray = temperatures.splice(index, myMap.length)
    //     for (var [key1, value1] of newArray) {
    //         let templeteArray = []
    //         if (newArray[j] > temperatures[index]) {
    //             templeteArray.push(j - index)
    //         }
    //     }
    // }

};
// 参考做法
var dailyTemperatures = function (temperatures) {
    let stack = [];
    let res = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            let j = stack.pop();
            res[j] = i - j;
        }
        stack.push(i);
    }
    return res;
};
// 参考2
var dailyTemperatures = function (temperatures) {
    let q = [-1];
    let res = new Array(temperatures.length).fill(0)
    temperatures.push(0);  //尾部插入数据，确保遍历结束后栈为空（不包括额外插入的最大值和最小值）
    for (let i = 0; i <= temperatures.length; i++) {
        while (temperatures[i] > temperatures[q[q.length - 1]]) {
            let tmp = q.pop();
            res[tmp] = i - tmp;
        }
        q.push(i)
    }
    return res;
}
// 参考三
var dailyTemperatures = function (temperatures) {
    let res = new Array(temperatures.length).fill(0)
    for (let i = temperatures.length - 2; i >= 0; i--) {
        let index = i + 1;
        while (temperatures[i] >= temperatures[index]) {
            if (res[index] == 0) {    //表明没有大值，res[i]置0；
                index = i;
                break;
            }
            index += res[index]         //通过之前记录的值跳转到下的比当前比较值大的值继续比较；
        }
        res[i] = index - i
    }
    return res;
};

