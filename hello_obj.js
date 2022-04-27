module.exports = function world2(){
    str = 'Hello World 2';
    this.hello = function sayhello (){
        console.log(str);
    }
}

// 只是想把一个对象封装到模块中
// 模块接口的唯一变化是使用 module.exports = Hello 代替了exports.world = function(){}
// 外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的 exports