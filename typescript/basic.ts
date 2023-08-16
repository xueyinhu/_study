// HelloWorld!
const sayHello: string = "Hello!"
console.log(sayHello);

// 生成对应的 js 文件
// tsc basic.ts

/** 基础类型 - 关键字
 * 任意 - any
 *  1. 变量的值会动态改变
 *  2. 改写现有代码，任意值允许在编译时可选择地包含或移除类型检查
 *  3. 定义存储各种类型数据的数组
 * 数字 - number
 * 字符串 - string
 * 布尔 - boolean
 * 数组 - 无
 * 元组 - 无
 * 枚举 - enum
 * void - void
 * null - null
 * undefined - undefined
 * never - never
 */
let x: any;
