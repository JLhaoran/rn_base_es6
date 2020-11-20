
//1.let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效
console.log("-----案例1-----");
{
    let a = 10;
    var b = 1;
}
// console.log(a);
console.log(b);
//2.for循环的计数器，就很合适使用let命令, a处正确、b处有异常
console.log("-----案例2-----");
for (let i = 0; i < 5; i++) {
    // ...
    console.log(i);//<a>
}
// console.log(i);//<b>
//3.变量i是var命令声明的，在全局范围内都有效 所有数组a的成员里面的i，指向的都是同一个i，导致运行时输出的是最后一轮的i的值，也就是 10
console.log("-----案例3-----");
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 10
//4 变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量
console.log("-----案例4-----");
var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 6
//5
console.log("-----案例5-----");
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}
//6 设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域
console.log("-----案例6-----");
for (let i = 0; i < 3; i++) {
    console.log(i);
}
//7 变量提升问题  var变量可以在声明之前使用 而let纠正了这一用法 只能在变量声明之后使用 否则会报错
console.log("-----案例7-----");
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;
// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
//8 在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”
console.log("-----案例8 暂时性死区-----");
if (true) {
    // TDZ开始
    tmp = 'abc'; // ReferenceError
    console.log(tmp); // ReferenceError
    let tmp; // TDZ结束
    console.log(tmp); // undefined
    tmp = 123;
    console.log(tmp); // 123
}
//9  不允许在相同作用域内，重复声明同一个变量
console.log("-----案例9-----");
// 报错
function func() {
    let a = 10;
    // var a = 1;
}
// 报错
function func() {
    let a = 10;
    // let a = 1;
}
//不能在函数内部重新声明参数
// function func(arg) {
//     let arg;
// }
// func() // 报错
function func(arg) {
    {
        let arg;
    }
}
func() // 不报错
//10 块级作用域
console.log("-----案例10 块级作用域-----");
//第一种场景，没有块级作用域 内层变量可能会覆盖外层变量
var tmp = new Date();
function f() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}
f(); // undefined
//第二种场景，用来计数的循环变量泄露为全局变量
var s = 'hello';
for (var i = 0; i < s.length; i++) {
    console.log(s[i]);
}
console.log(i); // 5

//11 ES6块级作用域 外层代码块不受内层代码块的影响
console.log("-----案例11-ES6块级作用域----");
function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5
}
//11.const声明一个只读的常量。一旦声明，常量的值就不能改变
const PI = 3.1415;
PI // 3.1415
// PI = 3;

