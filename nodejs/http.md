## http

---

``` javascript
const http = require('http')
const server = http.createServer((request, response) => {
    request.end('HTTP Server Working!')
})
server.listen(9000, () => {
    console.log('服务已经启动 ---')
})
```

