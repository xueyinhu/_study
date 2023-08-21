### 深入组件

---

# 组件注册

组件名格式：使用 PascalCase 作为组件名的注册格式。Vue 支持将模板中使用 kebab-case 的标签解析为使用 PascalCase 注册的组件。这意味着一个以 MyComponent 为名注册的组件，在模板中可以通过 `<MyComponent>` 或 `<my-component>` 引用。这让我们能够使用同样的 JavaScript 组件注册代码来配合不同来源的模板。

``` javascript
// App.vue
import { createApp } from 'vue'
const app = createApp({})
app.component('ComponentName', {})
// 全局注册：使用 Vue 应用实例的 app.component() 方法，让组件在当前 Vue 应用中全局可用。
import MyComponent from './App.vue'
app.component('MyComponent', MyComponent)
/** 局部注册
 * 缺点:
 *  1. 全局注册，但并没有被使用的组件无法在生产打包时被自动移除 (也叫“tree-shaking”)。
 *  2. 全局注册在大型项目中使项目的依赖关系变得不那么明确。
 * 局部注册的组件在后代组件中并不可用。
 */
import MyComponent from './App.vue'
export default {
    components: {MyComponent}
}
```

---

#### Props

一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，哪些是透传 attribute。

如果你想要将一个对象的所有属性都当作 props 传入，你可以使用没有参数的 v-bind，即只使用 v-bind 而非 :prop-name。

``` javascript
// 要声明对 props 的校验，你可以向 props 选项提供一个带有 props 校验选项的对象。
export default {
  props: {
    // 基础类型检查
    //（给出 `null` 和 `undefined` 值则会跳过任何类型检查）
    propA: Number,
    // 多种可能的类型
    propB: [String, Number],
    // 必传，且为 String 类型
    propC: {
      type: String,
      required: true
    },
    // Number 类型的默认值
    propD: {
      type: Number,
      default: 100
    },
    // 对象类型的默认值
    propE: {
      type: Object,
      // 对象或者数组应当用工厂函数返回。
      // 工厂函数会收到组件所接收的原始 props
      // 作为参数
      default(rawProps) {
        return { message: 'hello' }
      }
    },
    // 自定义类型校验函数
    propF: {
      validator(value) {
        // The value must match one of these strings
        return ['success', 'warning', 'danger'].includes(value)
      }
    },
    // 函数类型的默认值
    propG: {
      type: Function,
      // 不像对象或数组的默认，这不是一个
      // 工厂函数。这会是一个用来作为默认值的函数
      default() {
        return 'Default function'
      }
    }
  }
}
```

---

#### 组件事件

尽管事件声明是可选的，我们还是推荐你完整地声明所有要触发的事件，以此在代码中作为文档记录组件的用法。同时，事件声明能让 Vue 更好地将事件和透传 attribute 作出区分，从而避免一些由第三方代码触发的自定义 DOM 事件所导致的边界情况。

和对 props 添加类型校验的方式类似，所有触发的事件也可以使用对象形式来描述。要为事件添加校验，那么事件可以被赋值为一个函数，接受的参数就是抛出事件时传入 this.$emit 的内容，返回一个布尔值来表明事件是否合法。
``` javascript
export default {
  emits: {
    // 没有校验
    click: null,

    // 校验 submit 事件
    submit: ({ email, password }) => {
      if (email && password) {
        return true
      } else {
        console.warn('Invalid submit event payload!')
        return false
      }
    }
  },
  methods: {
    submitForm(email, password) {
      this.$emit('submit', { email, password })
    }
  }
}
```

---

#### 组件 v-model

``` vue
<!-- CustomInput.vue -->
<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
```










































