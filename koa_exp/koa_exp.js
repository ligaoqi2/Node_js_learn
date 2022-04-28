var koa = require('koa');
var router = require('./koa_router')
// __dirname -> /home/ligaoqi/projects/node.js_projects/node-js-self/koa_exp

var app = new koa();

app.use(async(ctx, next) => {
 // ctx(context)对象封装了一个传入的http信息，并对该消息进行相应的响应
 // 代表一次HTTP请求和回应，即一次访问/回应的所有信息，都可以从上下文对象获得
 ctx.status = 200;
 // ctx.req.headers['x-forwarded-for'] = undefined
 ctx.req.ip =  ctx.req.headers['x-forwarded-for'] || ctx.ip;
 console.log("ctx request URL is "+ ctx.request.URL);
//  console.log("ctx status is " + ctx.status);
 console.log("real ip is " + ctx.req.ip);
 console.log("ctx.req.headers is "+ ctx.headers['x-forwarded-for']);
 await next();
})

// 读取路由
app.use(router.routes()).use(router.allowedMethods());

// 启动服务
app.listen(3000, err=>{
    if (err){
        throw err;
    }
});

console.log('Server running at http://127.0.0.1:3000/');