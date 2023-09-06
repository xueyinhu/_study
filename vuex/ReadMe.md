## Store

---

每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。Vuex 和单纯的全局对象有以下两点不同：  

    1. Vuex 的状态存储是响应式的。  
    2. 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。

1. 核心概念  

    State: 单一状态树  
    Getter: 从 store 中的 state 中派生出一些状态  
    Mutation: 都有一个字符串的事件类型 (type)和一个回调函数 (handler)  
    Action: Action 提交的是 mutation，而不是直接变更状态。可以包含任意异步操作  
    Module: 每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块  
