var koa = require('koa');
var app = new koa();

app.use(function *(){
    this.body = 'Hello World';
});

app.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');