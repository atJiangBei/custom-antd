# 二次封装 ant 组件系统

## 介绍

### 文件夹介绍

**src:**文档目录，示例
**build:**webpack 打包配置文件
build.lib.js --> 命令行其实文件，命令汇总
build.start.js --> 建立 lib 文件夹，移入 components 内部需要的文件
webpack.build.lib.js --> webpack 打包组件 js 多入口（components 内）多出口（lib 文件夹内）配置文件
build.style.js -->通过 less,postcss 等 插件转化 less 文件为 css 文件并输出到 lib 文件夹相应的组件文件夹内
webpack.dev.conf.js --> 项目展示启动配置
webpack.docs.conf.js --> 项目展示打包配置

**components:**组件文件夹
组件内部文件夹说明
**components/\*/component/index.js:**组件源文件，在此引入 ant 内部对应组件并导出
**components/\*/index.js:**引入 ./component/index.js 并导出
**components/\*/index.less:**该组件对应样式文件(打包后在 lib 文件夹内此处会生成对应的 index.css)
**components/\*/style/index.js:**内部引入的是生成后的 css 文件
**components/\*/style/less.js:**内部引入的是生成后的 less 文件

**lib:**打包后重新生成的组件文件夹

### 项目启动介绍

npm run lib （生成打包文件）
npm run dev （项目示例文档启动）
