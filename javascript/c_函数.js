// 函数是对象，都有自己的属性和方法
function getArgsCount(a, b, c) { return arguments.length }
// 箭头函数，没有自己的 this，不适合定义对象方法
const add = (x, y) => { return x + y }




