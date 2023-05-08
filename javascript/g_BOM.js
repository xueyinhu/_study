/** 浏览器对象模型（BOM）允许 JavaScript 与浏览器进行对话
 * 所有浏览器都支持 window 对象，所有全局变量是 window 对象的属性，所有全局函数是 window 对象的方法
 */
{ // 窗口方法
    // 浏览器窗口的尺寸，不包括工具栏和滚动条
    {
        window.innerWidth // 内宽度，像素计算
        window.innerHeight
        // 对于 Internet Explorer 8，7，6，5
        window.document.documentElement.clientHeight
        window.document.body.clientHeight
        // 一个实用的解决方案
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
    }

    // 打开新窗口
    window.open()
    // 关闭当前窗口
    window.close()
    // 移动当前窗口
    window.moveTo()
    // 调整当前窗口
    window.resizeTo()

    // window.screen 用户屏幕信息
    screen.width, screen.height // 屏幕尺寸
    screen.availWidth, screen.availHeight // 屏幕可用尺寸
    screen.colorDepth, screen.pixelDepth // 屏幕色深、像素深度

    // window.location 用于获取当前页面地址（URL）并将浏览器重定向到新页面
    location.href // 当前页面的 href
    location.hostname // web 主机的域名
    location.pathname // 当前页面的路径或文件名
    location.protocol // 使用的 web 协议
    location.port // 当前页面互联网主机端口的编号
    location.assign() // 加载新文档

    // window.history 对象包含浏览器历史
    history.back() // 后退
    history.forward() // 前进

    // window.navigator 对象包含有关访问者的信息
    /** 来自 navigator 对象的信息通常是误导性的，不应该用于检测浏览器版本
     * 不同浏览器能够使用相同名称
     * 导航数据可被浏览器拥有者更改
     * 某些浏览器会错误表示自身来绕过站点测试
     * 浏览器无法报告发布于晚于浏览器的操作系统
     */
    // "Netscape" 是 IE11、Chrome、Firefox 以及 Safari 的应用程序名称的统称
    navigator.appName // 浏览器应用名称
    // "Mozilla" 是 Chrome、Firefox、IE、Safari 以及 Opera 的应用程序代码名称
    navigator.appCodeName // 浏览器应用程序代码名称
    navigator.appVersion // 有关浏览器的版本信息
    navigator.product // 返回浏览器引擎的产品名称
    navigator.platform // 返回浏览器平台（操作系统）
    navigator.userAgent // 返回由浏览器发送到服务器的用户代理报头
    navigator.cookieEnabled // cookie 是否启用
    navigator.language
    navigator.onLine
    navigator.javaEnabled() // java 是否启用

    // 弹出框
    window.alert() // 用于警告
    window.confirm() // 用于确认
    window.prompt() // 用于提示

    // 定时事件
    setTimeout(function(){}, milliseconds) // 等待指定的毫秒数后执行函数
    clearTimeout(timeoutVariable) // 停止执行 setTimeout 事件
    setInterval(function(){}, milliseconds) // 等待指定的事件间隔后执行函数
    clearInterval(timerVariable) // 停止执行 setInterval 事件

    // window.cookie 在网页中存储用户信息
    document.cookie = "message_json + UTC_time + path"
    // UTC_time 有效时间，不写默认关闭网页后删除
    // path 告诉浏览器 cookie 属于哪个路径，不写默认当前页面
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
             }
            if (c.indexOf(name)  == 0) {
                return c.substring(name.length, c.length);
             }
        }
        return "";
    }
    function checkCookie() {
        var user = getCookie("username");
        if (user != "") {
            alert("Welcome again " + user);
        } else {
            user = prompt("Please enter your name:", "");
            if (user != "" && user != null) {
                setCookie("username", user, 365);
            }
        }
    }
}