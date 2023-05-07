// 函数是对象，都有自己的属性和方法
function getArgsCount(a, b, c) { return arguments.length }
// 箭头函数，没有自己的 this，不适合定义对象方法
const add = (x, y) => { return x + y }
// call() 方法是预定义的 Js 方法，编写能够在不同对象上使用的方法
let methods = {
    add: function() { return this.x + this.y }    
}
let add_data = {x: 1, y: 2}
console.log(methods.add.call(add_data))
// apply() 方法编写用于不同对象的方法
/** call() 和 apply() 的区别
 * call() 分别接收参数，apply() 接受数组形式的参数
 */
console.log(Math.max.apply(null, [1, 2, 3]));
// 闭包 让函数拥有“私有”变量变成可能
// 闭包指的是有权访问父作用域的函数，即使在父函数关闭之后
function say() {
    str = 'Hello'
    function sayHello() {
        console.log(str);
    }
    sayHello()
}
say()
