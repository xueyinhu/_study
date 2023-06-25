/** Ajax 一种从网页访问 Web 服务器的技术，代表异步 Js 和 XML
 * 构成：
 *  浏览器内建的 XMLHttpRequest 对象（从 web 服务器请求数据）
 *  Js 和 HTML DOM（显示或使用数据）
 * 用途：
 *  不刷新页面更新页面
 *  在页面加载后从服务器请求数据
 *  在页面加载后从服务器接收数据
 *  在后台向服务器发送数据
 */
{ // XMLHttpRequest
    // 创建 XMLHttpRequest 所有现代浏览器（Chrome、Firefox、IE、Edge、Safari、Opera）都有内置的 XMLHttpRequest 对象
    xhr = new XMLHttpRequest()
    // 定义回调函数
    xhr.onload = function() {}
    // 发送请求
    xhr.open()
}