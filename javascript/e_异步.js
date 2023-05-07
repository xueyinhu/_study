// 时间间隔
setInterval(() => { console.log(new Date()) }, 60000)
// 回调函数的使用
function show(html) { document.getElementById("app").innerHTML = html }
function parse_template(show_callback) {
    let req = new XMLHttpRequest()
    req.open('GET', "./template/t_a.html")
    req.onload = function() {
        if (req.status == 200) { show_callback(this.responseText) }
        else { show_callback("Error: " + req.status) }
    }
    req.send()
}
parse_template(show)
// js Promise 对象
let promise = new Promise(function() {})
promise.then()

