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

---

#### 透传 Attributes

“透传 attribute”指的是传递给一个组件，却没有被该组件声明为 props 或 emits 的 attribute 或者 v-on 事件监听器。最常见的例子就是 class、style 和 id。当一个组件以单个元素为根作渲染时，透传的 attribute 会自动被添加到根元素上。

如果你不想要一个组件自动地继承 attribute，你可以在组件选项中设置 inheritAttrs: false。

这些透传进来的 attribute 可以在模板的表达式中直接用 $attrs 访问到。这个 $attrs 对象包含了除组件所声明的 props 和 emits 之外的所有其他 attribute，例如 class，style，v-on 监听器等等。

和单根节点组件有所不同，有着多个根节点的组件没有自动 attribute 透传行为。如果 $attrs 没有被显式绑定，将会抛出一个运行时警告。

---

#### 插槽

<slot> 元素是一个插槽出口 (slot outlet)，标示了父元素提供的插槽内容 (slot content) 将在哪里被渲染。

父组件模板中的表达式只能访问父组件的作用域；子组件模板中的表达式只能访问子组件的作用域。插槽内容可以访问到父组件的数据作用域，因为插槽内容本身是在父组件模板中定义的。

如果我们想在父组件没有提供任何插槽内容时在 `<button>` 内渲染“Submit”，只需要将“Submit”写在 `<slot>` 标签之间来作为默认内容。

<slot> 元素可以有一个特殊的 attribute name，用来给各个插槽分配唯一的 ID，以确定每一处要渲染的内容。带 name 的插槽被称为具名插槽 (named slots)。没有提供 name 的 <slot> 出口会隐式地命名为“default”。要为具名插槽传入内容，我们需要使用一个含 v-slot 指令的 `<template>` 元素，并将目标插槽的名字传给该指令。v-slot 有对应的简写 #，因此 `<template v-slot:header>` 可以简写为 `<template #header>`。

动态指令参数在 v-slot 上也是有效的。

某些场景下插槽的内容可能想要同时使用父组件域内和子组件域内的数据。像对组件传递 props 那样，向一个插槽的出口上传递 attributes。























