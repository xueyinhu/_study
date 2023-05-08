// 当网页被加载时，浏览器会创建页面的文档对象模型 (DOM)
/** 通过这个对象模型，Js 获得创建动态 HTML 的所有力量
 * js 能增加、删除、改变页面中所有的 HTML 元素与属性
 * js 能改变页面中所有的 css 样式
 * js 能对页面中所有已有的 html 事件作出反应
 * js 能在页面中创建新的 html 事件
 */
{ // 查找 HTML 元素
    // 通过元素 id 来查找元素
    document.getElementById(id)
    // 通过标签名来查找元素
    document.getElementsByTagName(name)
    // 通过类名查找元素
    document.getElementsByClassName(name)
    // 通过 css 选择器查找 html 元素
    document.querySelectorAll(css_selector)
    // 通过 html 对象选择器查找 html 对象
    // 返回拥有 name 属性的所有 <a> 元素
    document.anchors
    // 返回所有 <applet> 元素
    document.applets
    // 返回文档服务器的域名
    document.domain
    // 返回 DOM 配置
    // document.domConfig
    // 返回文档的编码
    document.inputEncoding
    // 返回文档的绝对基准 URL
    document.baseURI
    // 返回文档的 URI
    document.documentURI
    // 返回文档的完整 URI
    document.URL
    // 返回文档的 cookie
    document.cookie
    // 返回文档的 doctype
    document.doctype
    // 返回浏览器使用的模式
    document.documentMode
    // 返回 DOM 实现
    document.implementation
    // 返回文档更新的日期和时间
    document.lastModified
    // 返回文档的加载状态
    document.readyState
    // 返回引用的 URL
    document.referrer
    // 返回是否强制执行错误检查
    document.strictErrorChecking
    // 返回 <html> 元素
    document.documentElement
    // 返回 <head> 元素
    document.head
    // 返回 <body> 元素
    document.body
    // 返回 <from> 元素
    document.forms
    // 返回 <img> 元素
    document.images
    // 返回 <embed> 元素
    document.embeds
    // 返回 <script> 元素
    document.scripts
    // 返回 <title> 元素
    document.title
    // 返回拥有 href 属性的所有 <area> 和 <a> 元素
    document.links
}
{ // 改变 HTML 元素
    // 改变元素的 inner HTML
    element.innerHTML = new_html_content
    // 改变 HTML 元素的属性值
    element.attribute = new_value
    element.setAttribute(attribute, value)
    // 改变 HTML 元素的样式
    element.style.property = new_style
}
{ // 添加和删除元素
    // 创建
    document.createElement(element)
    // 删除
    document.removeChild(element)
    // 添加
    document.appendChild(element)
    // 替换
    document.replaceChild(element)
    // 写入 HTML 输出流
    document.write(text)
}
{ // 添加事件处理程序
    document.getElementById().onclick = function(){}
}
