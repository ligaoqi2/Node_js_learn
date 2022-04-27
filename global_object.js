// __filename 表示当前正在执行的脚本的文件名。
// 它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 
// 如果在模块中，返回的值是模块文件的路径。
console.log(__filename)

// __dirname 表示当前执行脚本所在的目录。
console.log(__dirname)

function printHello(){
    console.log( "Hello, World!");
 }
 // 两秒后执行以上函数
//  var t = setTimeout(printHello, 2000);
 // setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
 // setTimeout() 只执行一次指定函数。
// 返回一个代表定时器的句柄值。

// 清除定时器
// clearTimeout(t)

// setInterval(cb, ms)
// setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
// setInterval(printHello, 2000)

// console

// 用于提供控制台标准输出，
// 它是由 Internet Explorer 的 JScript 引擎提供的调试工具，后来逐渐成为浏览器的实施标准
// Node.js 沿用了这个标准，提供与习惯行为一致的 console 对象，
// 用于向标准输出流（stdout）或标准错误流（stderr）输出字符。
// console.log 接收若干 个参数，
// 如果只有一个参数，则输出这个参数的字符串形式。
// 如果有多个参数，则 以类似于C 语言 printf() 命令的格式输出。
console.log('lgq  is %d years old', 24); 

console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");
//
// 执行一些代码
// 
console.timeEnd('获取数据');

console.info("程序执行完毕。")

// process
// process 是一个全局变量，即 global 对象的属性
// 用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。
// 在你写本地命令行程序的时候，少不了要 和它打交道

process.on('exit', function(code) {

    // 以下代码永远不会执行
    setTimeout(function() {
      console.log("该代码不会执行");
    }, 0);
    
    console.log('退出码为:', code);
  });
  console.log("程序执行结束");


// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);


// 平台信息
console.log(process.platform);