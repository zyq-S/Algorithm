// 计算属性的实现
function effect(fn, options = {}) {
    const effectFn = () => {
        cleanup(effectFn)
        // 当调用 effect 注册副作用函数时，将副作用函数赋值给 activeEffect
        activeEffect = effectFn
        // 在调用副作用函数之前将当前副作用函数压栈
        effectStack.push(effectFn)
        fn()
        // 在当前副作用函数执行完毕后，将当前副作用函数弹出栈，并把 activeEffect 还原为之前的值
        effectStack.pop()
        activeEffect = effectStack[effectStack.length - 1]
    }
    // 将 options 挂载到 effectFn 上
    effectFn.options = options  // 新增
    // activeEffect.deps 用来存储所有与该副作用函数相关的依赖集合
    effectFn.deps = []
    // 执行副作用函数
    effectFn()
}