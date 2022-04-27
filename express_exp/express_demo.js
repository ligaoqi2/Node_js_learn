//express_demo.js 文件
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
    // Express 应用使用回调函数的参数： 
    // request 和 response 对象来处理请求和响应的数据。
    // request 对象表示 HTTP 请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性
    // response 对象表示 HTTP 响应，即在接收到请求时向客户端发送的 HTTP 响应数据
   res.send('Hello World');
   // res.send() -> 传送HTTP响应
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
