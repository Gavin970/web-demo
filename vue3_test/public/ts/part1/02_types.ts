//number
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744; // 八进制
let decLiteral: number = 6; // 十进制
let hexLiteral: number = 0xf00d; // 十六进制

//string
let color: string = 'blue';
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`;

//字面量
let num: 10 = 10;
// num = 9;

//any
let x: any = 1;
x = 'hello';
x = true;
x.isShow();
x = function show() {};
let arr: any[] = [1, false, 'fine']; // 定义存储任意类型的数组

//unknown
let notSure: unknown = 4;
notSure = 'hello';
let myName: string = 'zhangsan';
// myName = notSure; // 报错，虽然notSure的值是字符串，但不能直接赋值给字符串类型的myName
// 1.判断类型后才能赋值
if (typeof notSure === 'string') {
  myName = notSure;
}
// 2.类型断言
myName = notSure as string;
myName = <string>notSure;

//void
let unusable: void = undefined;
unusable = null;
//void表示空，以函数为例，就表示返回为空
function fn(): void {
  return undefined;
}

//never表示没有任何值，以函数为例，表示没有return
function error(message: string): never {
  throw new Error(message);
}
