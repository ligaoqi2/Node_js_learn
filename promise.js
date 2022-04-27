//  当需要多次顺序执行异步操作的时候，很适合Promise

new Promise(function (resolve, reject) {

    // Promise 构造函数只有一个参数，是一个函数，
    // 这个函数在构造之后会直接被异步运行，所以我们称之为起始函数。
    // 起始函数包含两个参数 resolve 和 reject
    // 当 Promise 被构造时，起始函数会被异步执行
    // resolve 和 reject 都是函数，
    // 其中调用 resolve 代表一切正常，reject 是出现异常时所调用的

    // Promise 类有 .then() .catch() 和 .finally() 三个方法，
    // 这三个方法的参数都是一个函数，
    // .then() 可以将参数中的函数添加到当前 Promise 的正常执行序列，
    // .catch() 则是设定 Promise 的异常处理序列，
    // .finally() 是在 Promise 执行的最后一定会执行的序列。
    //  .then() 传入的函数会按顺序依次执行，有任何异常都会直接跳到 catch 序列

    setTimeout(function () {
        console.log("First");
        resolve();

        // resolve() 中可以放置一个参数用于向下一个 then 传递一个值，
        // then 中的函数也可以返回一个值传递给 then。
        // 但是，如果 then 中返回的是一个 Promise 对象，
        // 那么下一个 then 将相当于对这个返回的 Promise 进行操作，
        // 这一点从计时器的例子中可以看出来
        // reject() 参数中一般会传递一个异常给之后的 catch 函数用于处理异常
        // resolve 和 reject 的作用域只有起始函数，不包括 then 以及其他序列
        // resolve 和 reject 并不能够使起始函数停止运行，别忘了 return
        // resolve 里的参数就是你要传入 then 的数据
    }, 1000);
}).then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Second");
            resolve();
        }, 4000);
    });
}).then(function () {
    setTimeout(function () {
        console.log("Third");
    }, 3000);
});

// 上述的 "计时器" 程序看上去比函数瀑布还要长，
// 所以我们可以将它的核心部分写成一个 Promise 函数

/*
function print(delay, message) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(message);
            resolve();
        }, delay);
    });
}

// 实现功能
print(1000, "First").then(function () {
    return print(4000, "Second");
}).then(function () {
    print(3000, "Third");
});
*/

// 异步函数（async function）是 ECMAScript 2017 (ECMA-262) 标准的规范，
// 几乎被所有浏览器所支持，除了 Internet Explorer
// 异步函数 async function 中可以使用 await 指令，await 指令后必须跟着一个 Promise，
// 异步函数会在这个 Promise 运行中暂停，直到其运行结束再继续运行

/*
async function asyncFunc() {
    await print(1000, "First");
    await print(4000, "Second");
    await print(3000, "Third");
}
asyncFunc();
*/