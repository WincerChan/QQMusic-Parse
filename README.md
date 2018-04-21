# QQMusic-Parse

## 简介
原生 JS 实现的解析 QQ 音乐直链，并封装了一个 jsonp 函数用于代替 ajax 的 get 方法。

## 用法
1. 引入[以下文件](https://raw.githubusercontent.com/WincerChan/QQMusic-Parse/master/dist/prase-min.js)
2. 使用 `await parse(smid)` 获取，其中 smid 为歌曲的唯一标识：https://y.qq.com/n/yqq/song/{smid}.htm

推荐配合 Aplayer 使用

## 截图
![Screenshot.png](https://i.loli.net/2018/04/17/5ad5997386fd7.png)

## Chrome 插件
打开开发者模式 -> 加载已解压的扩展程序，定位至 repo 的 chrome 文件夹：
![Screenshot_20180313_155205.png](https://i.loli.net/2018/04/23/5add525fcad5f.png)

