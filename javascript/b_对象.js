{ // 创建 js 对象
    // 使用对象字面量
    let obj_1 = {a: 'A', b: 'B'}
    // 使用关键词 new
    let obj_2 = new Object()
    obj_2.a = 'A'
    obj_2.b = 'B'
    // 定义对象构造器，通过创建构造类型的对象
    class toUp {
        constructor(aUp, bUp) {
            this.a = aUp
            this.b = bUp
        }
    }
    let obj_3 = new toUp('A', 'B')
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
    class say { noSay = () => 1 }
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
