## Vite

1. **开始**  
&nbsp;&nbsp;&nbsp;&nbsp;<u>**Vite**</u> 是一种新型前端构建工具，能够显著提升前端开发体验。主要由两部分组成：<u>**一个开发服务器**</u>（基于**原生 ES 模块**提供了**丰富的内建功能**，如速度快到惊人的**模块热更新**（HMR））；<u>**一套构建指令**</u>（使用 **Rollup** 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源）。Vite 是一种具有明确建议的工具，具备合理的默认设置。Vite 还提供了强大的扩展性，可以提供完整的类型支持。  
&nbsp;&nbsp;&nbsp;&nbsp;<u>**浏览器支持**</u>：默认的构建目标是能支持**原生 ESM 语法的 script 标签**、**原生 ESM 动态导入**和 **`import.meta`** 的浏览器。传统浏览器可以通过官方插件 **@vitejs/plugin-legacy** 支持。  
&nbsp;&nbsp;&nbsp;&nbsp;Vite 也支持多个 .html 作入口点的**多页面应用模式**。

2. 功能  
&nbsp;&nbsp;&nbsp;&nbsp;**静态文件服务器**：对非常基础的使用来说，使用 Vite 开发和使用一个**静态文件服务器**并没有太大区别。  
&nbsp;&nbsp;&nbsp;&nbsp;**NPM 依赖解析和预构建**：Vite 将会检测到所有被加载的源文件中的裸模块导入，并执行以下操作：预构建（可以提高页面加载速度，并将 CommonJS / UMD 转换为 ESM 格式。预构建这一步由 esbuild 执行，这使得 Vite 的冷启动时间比任何基于 JavaScript 的打包器都要快得多。）；重写导入为合法的 URL（以便浏览器能够正确导入它们。）。**依赖是强缓存的**：Vite 通过 HTTP 头来缓存请求得到的依赖。  
&nbsp;&nbsp;&nbsp;&nbsp;**模块热替换**：Vite 提供了一套原生 ESM 的 **HMR API**。 具有 HMR 功能的框架可以利用该 API 提供即时、准确的更新，而无需重新加载页面或清除应用程序状态。Vite 内置了 HMR 到 **Vue 单文件组件（SFC）** 和 **React Fast Refresh** 中。也通过 **@prefresh/vite** 对 Preact 实现了官方集成。  
&nbsp;&nbsp;&nbsp;&nbsp;Vite 天然支持引入 **.ts** 文件。

3. 命令行界面  
&nbsp;&nbsp;&nbsp;&nbsp;**开发服务器**。  
&nbsp;&nbsp;&nbsp;&nbsp;**构建**。  
&nbsp;&nbsp;&nbsp;&nbsp;**其他**。  
[具体参见官方文档](https://cn.vitejs.dev/guide/cli.html#build)

4. 使用插件  
&nbsp;&nbsp;&nbsp;&nbsp;Vite 可以使用插件进行扩展，这得益于 Rollup 优秀的插件接口设计和一部分 Vite 独有的额外选项。这意味着 Vite 用户可以**利用 Rollup 插件的强大生态系统**，同时根据需要也能够**扩展开发服务器和 SSR 功能**。  
[具体参见官方文档](https://cn.vitejs.dev/guide/using-plugins.html)

5. 依赖预构建  
&nbsp;&nbsp;&nbsp;&nbsp;当你首次启动 vite 时，Vite 在本地加载你的站点之前预构建了项目依赖。默认情况下，它是自动且透明地完成的。这个过程有两个目的：**CommonJS 和 UMD 兼容性**（在开发阶段中，Vite 的开发服务器将所有代码视为原生 ES 模块。因此，Vite 必须先将以 CommonJS 或 UMD 形式提供的依赖项转换为 ES 模块。在转换 CommonJS 依赖项时，Vite 会进行智能导入分析，这样即使模块的导出是动态分配的（例如 React），具名导入（named imports）也能正常工作。）；**性能**（为了提高后续页面的加载性能，Vite将那些具有许多内部模块的 ESM 依赖项转换为单个模块。）。  
&nbsp;&nbsp;&nbsp;&nbsp;**依赖预构建仅适用于开发模式，并使用 esbuild 将依赖项转换为 ES 模块。在生产构建中，将使用 @rollup/plugin-commonjs。**  
&nbsp;&nbsp;&nbsp;&nbsp;**ESbuild** 是一个类似 webpack 构建工具。它的**构建速度是 webpack 的几十倍**。原因：**js是单线程串行，esbuild是新开一个进程，然后多线程并行，充分发挥多核优势；go是纯机器码，肯定要比JIT快；不使用 AST，优化了构建流程（也带来了一些缺点）**。  
&nbsp;&nbsp;&nbsp;&nbsp;**自动依赖搜寻**：如果**没有找到现有的缓存**，Vite 会<u>扫描您的源代码，并自动寻找引入的依赖项</u>（即 "bare import"，表示期望从 node_modules 中解析），并将这些依赖项作为预构建的入口点。预打包使用 esbuild 执行，因此通常速度非常快。在**服务器已经启动后，如果遇到尚未在缓存中的新依赖项导入**，则 Vite 将<u>重新运行依赖项构建过程，并在需要时重新加载页面</u>。  
&nbsp;&nbsp;&nbsp;&nbsp;**Monorepo 和链接依赖**：该仓库中的某个包可能会成为另一个包的依赖。Vite 会自动侦测没有从 node_modules 解析的依赖项，并将链接的依赖视为源码。它不会尝试打包被链接的依赖，而是会分析被链接依赖的依赖列表。然而，这需要被链接的依赖被导出为 ESM 格式。如果不是，那么你可以在配置里将此依赖添加到 optimizeDeps.include 和 build.commonjsOptions.include 这两项中。当对链接的依赖进行更改时，请使用 --force 命令行选项重新启动开发服务器，以使更改生效。由于链接的依赖项解析方式不同，传递依赖项（transitive dependencies）可能会被错误地去重，从而在运行时出现问题。如果遇到此问题，请使用 npm pack 命令来修复它。  
&nbsp;&nbsp;&nbsp;&nbsp;**ESM**：esm 是将 javascript 程序拆分成多个单独模块，并能按需导入的标准。和webpack，babel不同的是，esm 是 javascript 的标准功能，在浏览器端和 nodejs 中都已得到实现。使用 esm 的好处是浏览器可以最优化加载模块，比使用库更有效率。esm 模块和 commonjs 模块的一个显著差异是，cjs 导出的是值得拷贝，esm 导出的是值的引用。当模块内部的值被修改时，cjs 获取不到被修改后的值，esm 可以获取到被修改后的值。  
&nbsp;&nbsp;&nbsp;&nbsp;**Monorepo**：一种项目代码管理方式，指**单个仓库中管理多个项目**，有助于简化代码共享、版本控制、构建和部署等方面的复杂性，并提供更好的可重用性和协作性。Monorepo 提倡了开放、透明、共享的组织文化，这种方法已经被很多大型公司广泛使用，如 Google、Facebook 和 Microsoft 等。  
&nbsp;&nbsp;&nbsp;&nbsp;**自定义行为**：有时候默认的依赖启发式算法（discovery heuristics）可能并不总是理想的。如果您想要明确地包含或排除依赖项，可以使用 optimizeDeps 配置项 来进行设置。include 和 exclude 都可以用来处理这个问题。如果依赖项很大（包含很多内部模块）或者是 CommonJS，那么你应该包含它；如果依赖项很小，并且已经是有效的 ESM，则可以排除它，让浏览器直接加载它。也可以使用 optimizeDeps.esbuildOptions 选项 来进一步自定义 esbuild。例如，添加一个 esbuild 插件来处理依赖项中的特殊文件。  
&nbsp;&nbsp;&nbsp;&nbsp;**缓存**：**文件系统缓存**（Vite 将预构建的依赖项缓存到 node_modules/.vite 中。会基于几个来源来决定是否需要重新运行预构建步骤，如果出于某些原因你想要强制 Vite 重新构建依赖项，你可以在启动开发服务器时指定 --force 选项，或手动删除 node_modules/.vite 缓存目录。）、**浏览器缓存**（已预构建的依赖请求使用 HTTP 头 max-age=31536000, immutable 进行强缓存，以提高开发期间页面重新加载的性能。一旦被缓存，这些请求将永远不会再次访问开发服务器。如果安装了不同版本的依赖项（这反映在包管理器的 lockfile 中），则会通过附加版本查询自动失效。想通过本地编辑来调试依赖项，可以：通过浏览器开发工具的 Network 选项卡暂时禁用缓存；重启 Vite 开发服务器指定 --force 选项，来重新构建依赖项;重新载入页面。）。  

6. 静态资源处理  
&nbsp;&nbsp;&nbsp;&nbsp;**将资源引入为 URL**：



























