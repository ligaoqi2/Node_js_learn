// v6.0以后，官方文档里面建议使用 Buffer.from() 接口去创建Buffer对象。

buf1 = Buffer.alloc(256);
// 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0

// 向缓冲区写入数据
len = buf1.write("www.runoob.com");
// buf.write(string[, offset[, length]][, encoding])
// offset -> 写入的索引
// 返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串
console.log("写入字节数 : "+  len);

// 从缓冲区读入数据
buf2 = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  buf2[i] = i + 97;
}

console.log( buf2.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
// buf.toString([encoding[, start[, end]]])
// start -> 指定开始读取的索引位置，默认为 0
// end -> 结束位置，默认为缓冲区的末尾
console.log( buf2.toString('ascii',0,5));   //使用 'ascii' 编码, 并输出: abcde
console.log( buf2.toString('utf8',0,5));    // 使用 'utf8' 编码, 并输出: abcde
console.log( buf2.toString(undefined,0,5)); // 使用默认的 'utf8' 编码, 并输出: abcde


// Buffer 转为 Json
const buf3 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf3);
// 当字符串化一个 Buffer 实例时，JSON.stringify() 会隐式地调用该 toJSON()

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer' ?
    Buffer.from(value.data) :
    value;
});

// 输出: <Buffer 01 02 03 04 05>
console.log(copy);