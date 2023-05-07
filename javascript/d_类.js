// class 类中的语法必须以“严格模式”编写
// 与函数和其他 Js 声明不同，类声明不会被提升
class Color {
    constructor(name, value) {
        this.name = name
        this.value = value
    }
    static say() {
        console.log("this is a static method of class(Color).");
    }
}
// super() 方法引用父类
// 创建 Getter 与 Setter 使用关键字
class ColorRedStyle extends Color {
    constructor(name, value, doYouLike) {
        super(name, value)
        this._doYouLike = doYouLike
    }
    get doYouLike() { return this._doYouLike }
    set doYouLike(newValue) { this._doYouLike = newValue }
}

new Color('red', '#ff0000')
const crs = new ColorRedStyle('pink', '#ff4444', 0)
crs.doYouLike = 1
if (crs.doYouLike != 1) console.log(false)
ColorRedStyle.say()
