//object表示一个js对象
//但这种声明不常用，因为对象有很多，对obj变量没有添加到任何限制
let obj: object = {};
obj = function () {};

//1. 用于指定对象中可以有哪些属性let a: { name: string, ... }
//指定后，声明的对象中属性必须和指定的一致
let a: { name: string; sex: string } = { name: '张三', sex: '女' };
a = { name: '王五' };
a = { name: '李四', age: 18 };

//2. 指定属性时在属性名后加上“?”，表示属性可选
let b: { name: string; age?: number } = { name: '张三' };

//3. 只要求某些属性，其他属性不做限制，[propName: string]: any表示任意类型的属性
let c: { name: string; [propName: string]: any } = { name: '张三', age: 18 };
