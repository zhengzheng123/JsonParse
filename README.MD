# 组件功能
- 格式化json数据，实现类似chrome浏览器JSONView插件
- 可以展开 收缩

# 使用方法
- 新建index.html
``` js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <!--引入react库-->
  <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <!--引入react-dom库-->
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <!--引入babel库-->
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

  <!--引入所需要的样式-->
  <link rel="stylesheet" href="./index.css">

  <!--引入组件 注意要添加type="text/babel"-->
  <!--因为这是在html中引入react，组件里使用的是jsx语法，浏览器不识别jsx，需要babel转换成es5，上面引入的babel库就是干这事的-->
  <!--在实际项目中大部分是使用脚手架搭建的项目，已经集成了babel-->
  <script src="./Item.js" type="text/babel"></script>
  <script src="./index.js" type="text/babel"></script>
</head>
<body>
<div id="app"></div>

</body>
</html>
```
- 双击打开html即可测试
- 效果截图

![Image text](https://github.com/zhengzheng123/git-images/blob/master/jsonParse.png)