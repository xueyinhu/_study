#### Node.js v4.4.3 LTS(长期支持版本)版本
---
1. 创建应用  
    ``` javascript
    // 加载和引入模块
    var http = require('http')
    // 创建服务器，接收请求与响应请求
    http.createServer(function(request, response) {
        response.writeHead(200, {'Content-Type': 'text/plain'})
        response.end('OK!\n')
    }).listen(8888)
    ```

2. NPM  
NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题。
    > Package.json 属性说明  
        name - 包名。  
        version - 包的版本号。  
        description - 包的描述。  
        homepage - 包的官网 url 。  
        author - 包的作者姓名。  
        contributors - 包的其他贡献者姓名。  
        dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。  
        repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。  
        main - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。  
        keywords - 关键字。

3. Node 的异步操作   
    ``` javascript
    // Promise
    const _submit = (payload, formid, destination) => {
        return new Promise((resolve, reject) => { // 返回一个Promise对象，实现异步回调
            app.requestPost(destination, {
                payload,
                formid: formid
            }, true).then((res) => { // 调用一个异步函数，使用then方法对接成功回调
                if (res) {
                    resolve(); // call成功回调
                } else {
                    reject(); / call失败回调
                }
            }).catch(() => { // 调用一个异步函数，使用catch方法对接失败回调
                reject();
            })
        });
    }
    ```
    ``` javascript
    // async/await
    async function query(collection, querySelector, queryOptions) {
        let db, data;
        try {
            db = await MongoClient.connect(_dburl); // 使用await标记上游异步函数，此时event loop会将与该变量有关的操作阻塞
            data = await db.db(DBNAME).collection(collection).find(querySelector, queryOptions || {}).toArray();
        } catch (e) {
            log(e.message, 2);
        }
        return data;
    }
    ```

4. Buffer  
一个专门存放二进制数据的缓存区
    ``` javascript
    // Buffer 实例一般用于表示编码字符的序列，比如 UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据。
    /** Node.js 支持的字符编码包括：
     * ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。
     * utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。
     * utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
     * ucs2 - utf16le 的别名。
     * base64 - Base64 编码。
     * latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。
     * binary - latin1 的别名。
     * hex - 将每个字节编码为两个十六进制字符。
     */
    const buf = Buffer.from('string', 'ascii')
    console.log(buf.toString('base64'))
    // 创建 Buffer 类
    ```

