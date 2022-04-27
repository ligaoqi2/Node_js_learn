const util = require('util');

// util 是一个Node.js 核心模块，
// 提供常用函数的集合，用于弥补核心 JavaScript 的功能 过于精简的不足

// util.callbackify(original)
// 将 async 异步函数（或者一个返回值为 Promise 的函数）转换成遵循异常优先的回调风格的函数

async function fn() {
  return 'hello world';
}

const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});

// util.inherits(constructor, superConstructor)
// 实现对象间原型继承的函数
// JavaScript 没有提供对象继承的语言级别特性，而是通过原型复制来实现的

function Base() { 
    this.name = 'base'; 
    this.base = 1991; 
    this.sayHello = function() { 
    console.log('Hello ' + this.name); 
    }; 
} 

// 原型中定义的函数
Base.prototype.showName = function() { 
    console.log(this.name);
}; 
function Sub() { 
    this.name = 'sub'; 
} 

util.inherits(Sub, Base); 
var objBase = new Base(); 
objBase.showName(); 
objBase.sayHello(); 
console.log(objBase); 

var objSub = new Sub(); 
objSub.showName(); 
//objSub.sayHello(); 
console.log(objSub); 
// 原型中定义的属性不会被 console.log 作 为对象的属性输出。
// 如果我们去掉 objSub.sayHello(); 这行的注释，会报错


// util.inspect(object,[showHidden],[depth],[colors])
// 是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。
// 它至少接受一个参数 object，即要转换的对象
// showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息

function Person() { 
    this.name = 'byvoid'; 
    this.toString = function() { 
    return this.name; 
    }; 
} 
var obj = new Person(); 
console.log(util.inspect(obj)); 
console.log(util.inspect(obj, true)); 

// util.isArray(object)
// 如果给定的参数 "object" 是一个数组返回 true，否则返回 false

// util.isRegExp(object)
// 给定的参数 "object" 是一个正则表达式返回true，否则返回false

// util.isDate(object)
// 给定的参数 "object" 是一个日期返回true，否则返回false