## Pinia

---

1. Store 是什么？  
&nbsp;&nbsp;&nbsp;&nbsp;Store (如 Pinia) 是一个保存状态和业务逻辑的实体，它并不与你的组件树绑定。换句话说，它承载着全局状态。它有点像一个永远存在的组件，每个组件都可以读取和写入它。它有三个概念，state、getter 和 action，我们可以假设这些概念相当于组件中的 data、 computed 和 methods。

2. 定义 Store  
&nbsp;&nbsp;&nbsp;&nbsp;Store 是用 defineStore() 定义的，它的第一个参数要求是一个独一无二的名字，也被用作 id ，是必须传入的， Pinia 将用它来连接 store 和 devtools。为了养成习惯性的用法，将返回的函数命名为 use... 是一个符合组合式函数风格的约定。  
&nbsp;&nbsp;&nbsp;&nbsp;defineStore() 的第二个参数可接受两类值：Setup 函数（传入一个带有 state、actions 与 getters 属性的 Option 对象）或 Option 对象（传入一个带有 state、actions 与 getters 属性的 Option 对象）。Setup store 比 Option Store 带来了更多的灵活性，因为你可以在一个 store 内创建侦听器，并自由地使用任何组合式函数。不过，请记住，使用组合式函数会让 SSR 变得更加复杂。  
&nbsp;&nbsp;&nbsp;&nbsp;为了从 store 中提取属性时保持其响应性，你需要使用 storeToRefs()。它将为每一个响应式属性创建引用。当你只使用 store 的状态而不调用任何 action 时，它会非常有用。请注意，你可以直接从 store 中解构 action，因为它们也被绑定到 store 上。

3. State：一个返回初始状态的函数  
&nbsp;&nbsp;&nbsp;&nbsp;不需要做太多努力就能使你的 state 兼容 TS。确保启用了 strict，或者至少启用了 noImplicitThis，Pinia 将自动推断您的状态类型！ 但是，在某些情况下，您应该帮助它进行一些转换。可以用一个接口定义 state，并添加 state() 的返回值的类型。  
&nbsp;&nbsp;&nbsp;&nbsp;默认情况下，可以通过 store 实例访问 state，直接对其进行读写。使用选项式 API 时，可以通过调用 store 的 $reset() 方法将 state 重置为初始值。如果不能使用组合式 API，但你可以使用 computed，methods，...，那你可以使用 mapState() 辅助函数将 state 属性映射为只读的计算属性。如果想修改这些 state 属性 (例如，如果有一个表单)，可以使用 mapWritableState() 作为代替。但注意不能像 mapState() 那样传递一个函数。除了用 store.count++ 直接改变 store，你还可以调用 $patch 方法。它允许你用一个 state 的补丁对象在同一时间更改多个属性。不能完全替换掉 store 的 state，因为那样会破坏其响应性。但是，你可以 patch 它，这常用于 SSR 中的激活过程。类似于 Vuex 的 subscribe 方法，你可以通过 store 的 $subscribe() 方法侦听 state 及其变化。比起普通的 watch()，使用 $subscribe() 的好处是 subscriptions 在 patch 后只触发一次 (例如，当使用上面的函数版本时)。默认情况下，state subscription 会被绑定到添加它们的组件上 (如果 store 在组件的 setup() 里面)。这意味着，当该组件被卸载时，它们将被自动删除。如果你想在组件卸载后依旧保留它们，请将 { detached: true } 作为第二个参数，以将 state subscription 从当前组件中分离。  

4. Getter：完全等同于 store 的 state 的计算值


