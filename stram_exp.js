var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt');
// 所有的 Stream 对象都是 EventEmitter 的实例

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
// data - 当有数据可读时触发
// end - 没有更多的数据可读时触发
// error - 在接收和写入过程中发生错误时触发
// finish - 所有数据已被写入到底层系统时触发

readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Input.txt中内容已经读入");

// 要写入流的信息
var output_data = '菜鸟教程官网地址：www.runoob.com';

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
writerStream.write(output_data,'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> finish、error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("内容已经写入output.txt");


// 管道流: 流 -> 流
// readerStream.pipe(writerStream);
// console.log("程序执行完毕");

