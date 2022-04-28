const fs = require('fs-extra');
const path = require('path');
const koaRouter = require('koa-router');

const router = new koaRouter();

router.get('/', async (ctx, next) => {
    // ctx -> context -> 请求的上下文
    // next -> 是调用执行下游中间件的函数. 在代码执行完成后通过 then 方法返回一个 Promise.
    ctx.body = await fs.readFile(path.join(__dirname, './view/index.html'));
    console.log("status is "+ ctx.status)
    ctx.set('Content-Type', 'text/html');
    await next();
  });

module.exports = router