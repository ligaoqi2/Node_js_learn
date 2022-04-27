// 注意在JS中，函数function也是一个对象

var hello = require("./hello");
// require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象
hello.world();
// hello -> exports

var hello2 = require("./hello_obj");
// 模块接口的唯一变化是使用 module.exports =  function world2(){} 代替了exports.world = function(){}
// 外部引用该模块时，其接口对象就是要输出的 world2 对象本身，而不是原先的 exports
var hw = new hello2();
// hw -> world2
hw.hello();

// 如果要对外暴露属性或方法，就用 exports 就行，
// 要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports