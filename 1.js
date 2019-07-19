/*
* @Author: 18434393070@163.com
* @Date:   2019-07-17 13:19:38
* @Last Modified by:   18434393070@163.com
* @Last Modified time: 2019-07-18 13:20:18
*/
// 让A，B 交换	方法：使用第三方变量 
var a = 10;
var b = 20;
var c = a;
a = b;
b = c;
console.log(a,b);

// 让e，f 交换	方法：用和来分
var e = 10;
var f = 30;
e = e + f;
f = e - f;
e = e - f;
console.log(e,f);

// 让g，h 交换	方法：结构赋值 ES6
var g = 10;
var h = 20;
[g,h] = [h,g]
console.log(g,h);