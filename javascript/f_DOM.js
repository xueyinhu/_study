// 当网页被加载时，浏览器会创建页面的文档对象模型 (DOM)
/** 通过这个对象模型，Js 获得创建动态 HTML 的所有力量
 * js 能增加、删除、改变页面中所有的 HTML 元素与属性
 * js 能改变页面中所有的 css 样式
 * js 能对页面中所有已有的 html 事件作出反应
 * js 能在页面中创建新的 html 事件
 */
{ // 查找 HTML 元素与信息
    // 通过元素 id 来查找元素
    document.getElementById(id)
    /** 通过标签名来查找元素
     * 返回 HTMLCollection 对象（是类数组的 HTML 元素列表（集合）），可以通过索引获取元素
     * length 方法用于获取元素集合的长度
     */
    document.getElementsByTagName(name)
    // 通过类名查找元素 返回 HTMLCollection，某些旧的浏览器返回相似的 NodeList
    document.getElementsByClassName(name)
    // 通过 css 选择器查找 html 元素 大多数浏览器返回 NodeList
    document.querySelectorAll(css_selector)
    /** HTMLCollection 与 NodeList 的区别
     * HTMLCollection 是 HTML 元素的集合，NodeList 是文档节点的集合
     * 访问 HTMLCollection 项目，可以通过名称、id 或索引号，NodeList 只能用索引访问
     * 只有 NodeList 对象能够包含属性节点和文本节点
     */
    // 通过 html 对象选择器查找 html 对象
    {
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
    // 节点间导航
    {
        let node = document.getElementById()
        node.parentNode // 父节点
        node.childNodes[node_position] // 子节点
        node.firstChild // 第一子节点
        node.lastChild // 末尾子节点
        node.nextSibling // 下一个兄弟节点
        node.previousSibling // 上一个兄弟节点
    }
}
{ // 节点属性
    let node = document.getElementById()
    // innerHTML HTML 元素的内容
    node.innerHTML
    // nodeName 只读，等同于标签名
    node.nodeName 
    // nodeValue 节点的值
    node.nodeValue
    /** nodeType 节点的类型 只读
     *  {
     *      ELEMENT_NODE : 1, // <h1 class="class_name">This is a tag of h1</h1>
     *      ATTRIBUTE_NODE : 2, // HTML DOM 中废用，XML DOM 中还在使用 // class = "class_name"
     *      TEXT_NODE : 3, // This is a tag of h1
     *      COMMENT_NODE : 4, // <!-- 注释 -->
     *      DOCUMENT_NODE : 5, // HTML 文档本身（ <html> 的父）
     *      DOCUMENT_TYPE_NODE : 6, // <!Doctype html>
     *  }
     */
    node.nodeType
}
{ // 添加和删除元素
    // 创建
    document.createElement(element)
    // 删除
    document.removeChild(element)
    // 删除（在旧版浏览器不起作用）
    document.getElementById().remove()
    // 添加（父的最后一个子节点）
    document.appendChild(element)
    // 插入
    document.getElementById().insertBefore()
    // 替换
    document.replaceChild(element)
    // 写入 HTML 输出流
    document.write(text)
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
{ // 添加事件处理程序
    document.getElementById().onclick = function(){}
    // https://www.w3school.com.cn/jsref/dom_obj_event.asp
    // HTML DOM 事件监听程序
    { // 使用 addEventListener 方法，能将 HTML 与 Js 代码分离
        document.getElementById().addEventListener("click", function(){})
        // 能够向一个元素添加多个相同类型的事件处理程序，例如两个“click”事件
        document.getElementById().addEventListener("click", function(){})
        // 能够向任何 DOM 元素添加事件处理程序，例如 window 对象
        window.addEventListener("resize", function(){})
        // 使用 removeEventListener 方法能删除事件监听器
        document.getElementById.removeEventListener("click", function_name)
        /** 事件冒泡或捕获
         * 冒泡：最内侧元素的事件首先被处理，然后是更外侧，捕获反之
         * addEventListener(event, function, useCapture=false) // 冒泡
         */
        // IE 8、Opera 6.0 及其更早版本不支持 addEventListener() 和 removeEventListener() 方法
        var x = document.getElementById(id);
        if (x.addEventListener) { // 除了 IE 8 及更正版本
            x.addEventListener("click", myFunction);
        } else if (x.attachEvent) {
            x.attachEvent("onclick", myFunction);
        } 
    }
}
