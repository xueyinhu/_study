# 从输入 url 到页面呈现到用户面前到底发生了什么
'''
1. DNS (Domain Name System) 解析
2. TCP (Transmission Control Protocol) 链接
3. HTTP (HyperText Transfer Protocol) 请求
4. HTTP 响应
5. HTML 解析 & CSS 渲染
6. JS 解析执行
'''

# 前端与后端
'''
前端： 针对浏览器的开发，代码在浏览器中运行
后端： 针对服务器的开发，代码在服务器中运行
'''

# 前端可以通过 Ajax 获取数据，因此也就有了处理数据的需求，于是就促使了前端 MVC 的诞生。
'''
视图 (View 用户界面)、控制器 (Controller 业务逻辑)、模型(Model 数据模型)

View 作为用户界面，发送指令给 Controller
Controller 要求 Model 改变状态
Model 把更新过的数据发送给 View 反馈给用户
MVC 模型最核心的一点就是 所有通信都是单向的

在这个阶段的后期，前端逐渐开始有了一点工程化的影子
开始受 CommonJS 的影响，有了模块化编程的概念
诞生了相应的 CMD 和 AMD 的规范
开始有了构建工具 Grunt/Gulp
开始有了编码的规范 JsLint
'''

# MVVM 同样是一种软件架构模式，它是在 MVC 的基础上演进过来的，去掉了 MVC 中的 Controller，增加了数据的双向绑定。
'''
最有代表性的框架就是 Google 公司推出的 Angular(它的风格属于 HTML 语言的增强，核心概念就是数据双向绑定)。
'''

# SPA (single-page application)
'''
可以做到切换页面时也只通过 Ajax 获取数据更新页面，而不全部重新加载
'''

# SSR (server side render)

# Chrome & V8

# Node & 全栈
'''
Node.js 是一个基于 Chrome V8 引擎 的 JavaScript 运行时
Node.js 采用事件驱动、异步编程，为网络服务而设计
Node.js 的模块化是在 CommonJS 规范的基础上实现的
'''

# CommonJS
'''
CommonJS 是一个项目，其目标是为 JavaScript 在网页浏览器之外创建模块约定。创建这个项目的主要原因是当时缺乏普遍可接受形式的 JavaScript 脚本模块单元，模块在与运行JavaScript 脚本的常规网页浏览器所提供的不同的环境下可以重复使用。
前端需要模块化，并且模块化不光要处理全局变量污染、数据保护的问题，还要很好的解决模块之间依赖关系的维护。

每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。
CommonJS 规范还规定每个模块内部有两个变量可以使用 require 和 module。
require 用来加载某个模块
module 代表当前模块 是一个对象 保存了当前模块的信息。exports 是 module 上的一个属性，保存了当前模块要导出的接口或者变量，使用 require 加载的某个模块获取到的值就是那个模块使用 exports 导出的值


'''















