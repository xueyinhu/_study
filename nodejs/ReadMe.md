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

    /** 创建 Buffer 类
     * Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
     * Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
     * Buffer.allocUnsafeSlow(size)
     * Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
     * Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
     * Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
     * Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例
     */
    // 创建一个长度为 10，且用 1 填充地 Buffer
    const buf_1 = Buffer.alloc(10)
    // 创建一个长度为 10，且未初始化的 Buffer，速度相对更快
    // 需要使用 fill() 方法或 write() 重写数据
    const buf_2 = Buffer.allocUnsafe(10)
    // 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer
    const buf_3 = Buffer.from([1, 2, 3])
    // 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer
    const buf_4 = Buffer.from('tést')
    // 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer
    const buf_5 = Buffer.from('tést', 'latin1')

    // 写入缓冲区
    /** buf.write(string[, offset[, length]][, encoding])
     * string - 写入缓冲区的字符串
     * offset - 缓冲区开始写入的索引值，默认为 0 
     * length - 写入的字节数，默认为 buffer.length
     * encoding - 使用的编码。默认为 'utf8'
     */
    len = buf.write('test')

    // 从缓冲区读取数据
    /** buf.toString([encoding[, start[, end]]])
     * encoding - 使用的编码。默认为 'utf8' 。
     * start - 指定开始读取的索引位置，默认为 0。
     * end - 结束位置，默认为缓冲区的末尾。
     */
    console.log(buf.toString(undefined, 0, 5))

    // 将 Buffer 转换为 JSON 对象
    /** buf.toJSON()
     */
    const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
    const json = JSON.stringify(buf);
    console.log(json); // {"type":"Buffer","data":[1,2,3,4,5]}
    const copy = JSON.parse(json, (key, value) => {
    return value && value.type === 'Buffer' ?
        Buffer.from(value.data) :
        value;
    });
    console.log(copy); // <Buffer 01 02 03 04 05>

    // 缓冲区合并
    /** Buffer.concat(list[, totalLength])
     * list - 用于合并的 Buffer 对象数组列表。
     * totalLength - 指定合并后Buffer对象的总长度。
     */
    var buf_3 = Buffer.concat([buf_1,buf_2]);

    // 缓冲区比较
    /** buf.compare(otherBuffer);
     * otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。
     */
    var result = buf_1.compare(buf_2);

    // 拷贝缓冲区
    /** buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
     * targetBuffer - 要拷贝的 Buffer 对象。
     * targetStart - 数字, 可选, 默认: 0
     * sourceStart - 数字, 可选, 默认: 0
     * sourceEnd - 数字, 可选, 默认: buffer.length
     */
    buf_2.copy(buf_1, 2);

    // 缓冲区裁剪
    /** buf.slice([start[, end]])
     * start - 数字, 可选, 默认: 0
     * end - 数字, 可选, 默认: buffer.length
     */
    var buf_2 = buf_1.slice(0,2);

    // 缓冲区长度
    console.log("buffer length: " + buf.length);
    ```

5. Stream  
Node.js，Stream 有四种流类型：Readable - 可读操作、Writable - 可写操作、Duplex - 可读可写操作、Transform - 操作被写入数据，然后读出结果。  
所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：data - 当有数据可读时触发、end - 没有更多的数据可读时触发、error - 在接收和写入过程中发生错误时触发、finish - 所有数据已被写入到底层系统时触发。  
    ``` javascript
    /** 从流中读取数据
     */
    var fs = require("fs");
    var data = '';
    // 创建可读流
    var readerStream = fs.createReadStream('input.txt');
    // 设置编码为 utf-8
    readerStream.setEncoding('UTF8');
    // 处理流事件 --> data, end, and error
    readerStream.on('data', function(chunk) {
    data += chunk;
    });
    readerStream.on('end',function(){
    console.log(data);
    });
    readerStream.on('error', function(err){
    console.log(err.stack);
    });
    console.log("程序执行完毕");

    /** 写入流
     */
    var fs = require("fs");
    var data = 'test_data';
    // 创建一个可以写入的流，写入到文件 output.txt 中
    var writerStream = fs.createWriteStream('output.txt');
    // 使用 utf-8 编码写入数据
    writerStream.write(data,'UTF8');
    // 标记文件末尾
    writerStream.end();
    // 处理流事件 --> finish、error
    writerStream.on('finish', function() {
        console.log("写入完成。");
    });
    writerStream.on('error', function(err){
    console.log(err.stack);
    });
    console.log("程序执行完毕");

    /** 管道流
     * 用于从一个流中获取数据并将数据传递到另外一个流中
     */
    var fs = require("fs");
    // 创建一个可读流
    var readerStream = fs.createReadStream('input.txt');
    // 创建一个可写流
    var writerStream = fs.createWriteStream('output.txt');
    // 管道读写操作
    // 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
    readerStream.pipe(writerStream);
    console.log("程序执行完毕");

    /** 链式流
     * 通过连接输出流到另外一个流并创建多个流操作链的机制
     */
    var fs = require("fs");
    var zlib = require('zlib');
    // 压缩 input.txt 文件为 input.txt.gz
    fs.createReadStream('input.txt')
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream('input.txt.gz'));
    console.log("文件压缩完成。");

    var fs = require("fs");
    var zlib = require('zlib');
    // 解压 input.txt.gz 文件为 input.txt
    fs.createReadStream('input.txt.gz')
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream('input.txt'));
    console.log("文件解压完成。");
    ```

6. 模块  
模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。

