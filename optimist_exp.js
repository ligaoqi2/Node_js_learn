// 传入命令行参数


const argv = require('optimist')
    .usage(['Usage: $0 [-x <num>] [-y <num>]'])
    // usage -> 用法
    .options('x',{
        alias: 'X',
        // alias -> 别名
        description:"argument x"})
    .options('y',{
        alias: 'Y',
        description: 'argument y'})
    .argv;

if (argv.y == 0){
    console.log("分母不能为0")
    process.exit(0);
}
console.log(argv.x / argv.y);