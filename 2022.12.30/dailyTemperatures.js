/**
 * @param {number[]} temperatures
 * @return {number[]}
 * 剑指 Offer II 038. 每日温度
 * 请根据每日气温列表 temperatures ，重新生成一个列表，
 * 要求其对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。
 * 分析：实际上就是获取数组中每一个元素后面比它大的第一个元素和该元素之间的距离
 */
var dailyTemperatures = function (temperatures) {
    var myMap = new Map();
    for (let index = 0; index < temperatures.length; index++) {
        myMap.set(index, temperatures[index]);
        
    }
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        for (var [key, value] of myMap) {
            
        }
    }
    let newArray = temperatures.splice(index, temperatures.length)
    for (let j = 0; j < newArray.length; j++) {
        let templeteArray = []
        if (newArray[j] > temperatures[index]) {
            templeteArray.push(j - index)
        }
    }
};