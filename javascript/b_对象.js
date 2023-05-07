{ // 创建 js 对象
    // 使用对象字面量
    let obj_1 = {a: 'A', b: 'B'}
    // 使用关键词 new
    let obj_2 = new Object()
    obj_2.a = 'A'
    obj_2.b = 'B'
    // 定义对象构造器，通过创建构造类型的对象
    function ToUp(aUp, bUp) {
        this.a = aUp
        this.b = bUp
    }
    let obj_3 = new ToUp('A', 'B')
    if (!(obj_1.a == obj_3.a)) console.log(false);
}
{ // 对象属性
    let obj = {a: 'A'}
    // objectName.property
    // objectName["property"]
    if (!(obj.a === obj['a'])) console.log(false);
    // 遍历对象键值
    for (let k in obj) 1
    // 添加属性 objectName.newProperty = value
    obj.b  = 'B'
    // 删除属性 delete objectName.property
    delete obj.b
}
{ // 对象方法
    function say() { this.noSay = () => 1 }
    (new say()).noSay()
}
{ // 显示对象
    const obj = {a: 'A', b: 'B', c: 'C'}
    // 循环中拼接
    let text = ""
    for (let k in obj) text += obj[k] + " "
    // 将对象转换成值组成的数组 Object.values()
    let arr = Object.values(obj)
    // 进行字符串化 JSON.stringify()
    let str = JSON.stringify(obj)
}
{ // 对象访问器
    // 允许定义 Getter 与 Setter（被计算的属性）
    // 优势是：更简洁的语法、与属性语法相同、更好的数据质量、更利于后台工作
    let obj = {
        count: 0,
        get increment() { this.count++ },
        get decrement() { this.count-- }
    }
    obj.increment
    obj.decrement
    if (obj.count == 0) 1
}
{ // 对象原型
    // prototype 属性允许为对象构造器添加新属性
    console.log(Object.prototype);
}
{ // 对象方法
    // 管理对象
    if (false) {
        Object.create() // 以现有对象为原型创建对象
        Object.defineProperty(object, property, descriptor) // 添加或更改对象属性
        Object.defineProperties(object, descriptors) // 添加或更改对象属性
        Object.getOwnPropertyDescriptor(object, property) // 访问属性
        Object.getOwnPropertyNames(object) // 以数组形式返回所有属性
        Object.getPrototypeOf(object) // 访问原型
        Object.keys(object) // 以数组返回可枚举类型
        // 保护对象
        Object.preventExtensions(object) // 防止向对象添加属性
        Object.isExtensible(object) // 如果属性可以添加到对象，返回 true
        Object.seal(object) // 防止更改对象属性（不是值）
        Object.isSealed(object) // 如果对象被密封，则返回 true
        Object.freeze(object) // 防止对象进行任何更改
        Object.isFrozen(object) // 如果对象被冻结，则返回 true
        // 更改元数据 ES5 允许更改以下属性元数据 且允许更改 getter 与 setter
        writable: false // 属性值不可被更改
        enumerator: false // 属性不可枚举
        configurable: false // 属性不可重新配置
    }
}
{ // Map 对象
    // Map 对象键可以是任何数据类型，记得键的原始插入顺序，有表示映射大小的属性
    /** Js 对象与 Map 的差别
     * Map 有 size 属性
     * Map 键可以是任何数据类型，Js 对象键必须是字符串（或符号）
     * Map 键有顺序，Js 对象键没有排序
     * Map 没有默认键，Js 对象有默认键
     */
    let m = new Map() // 创建新的 Map 对象
    let h = {a: 'A'}
    m.set(h, 'a') // 为键设置值
    console.log(m.get(h)) // 获取指定键的值
    console.log(m.entries()) // 返回键值对的数组
    console.log(m.keys())
    console.log(m.values());
    console.log(m.size)
    m.forEach((k, v, m) => console.log(v))
    m.delete(h)
    console.log(m.has(h));
    m.clear()
}
{ // Set 对象
    let s = new Set()
    // size
    // add() clear() delete() has()
    // entries() keys() values() forEach()
}
