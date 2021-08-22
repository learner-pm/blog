# ECMAScript

## 类型

JavaScript 内部内置七种类型，可划分为基本类型和对象类型(Object)。

基本类型分为：`number` ,`string`,`symbol`,`null`,`undefined`,`boolen`。

对象类型:`object`,其他内置对象如`array`,`regExp`，`number`等，它们都可以看成是`object`得子类。

## 判断类型

常用判断类型得方法

### typeof

`typeof` 除了会对 `null` 显示为 `object`，其他基本类型都可以正确显示(一个久远得 bug，和 js 设计有关),而对于对象类型均显示为`object`

```js
console.log(typeof 0); //number
console.log(typeof "0"); //string;
console.log(typeof false); //boolean;
console.log(typeof Symbol("0")); //symbol;
console.log(typeof null); //object;
console.log(typeof undefined); //undefined;
console.log(typeof []); //object;
console.log(typeof {}); //object;
```

### instanceof

`instanceof`用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。正常情况下也就是左侧是不是右侧的实例。因为内部使用`prototype`来进行检测，如果修改了`prototype`，则会返回`false`

```js
const a = {};
console.log(a instanceof Object); //true
const b = [];
console.log(b instanceof Array); //true
```

::: tip

```js
console.log(b instanceof Object); //true
```

因为 array.prototype 继承自 object.prototype

```js
console.log(Array.prototype); //[[Prototype]]: Object
```

:::

根据其原理可手写一个`instanceof`如下：

```js
const myInstanceof = (object, constructor) => {
  const prototype = constructor.prototype;
  object = object._proto_;
  while (true) {
    if (object === null) return false;
    if (object === prototype) return true;
    object = object._proto_;
  }
};
```

### 判断对象

对于对象类型的判断目前最好的办法是：`Object.prototype.toString.call()`,同时也能判断基本类型。
es 新增数组判断`Array.isArray()`

```js
console.log(Array.isArray([])); //true
console.log(Object.prototype.toString.call(1)); //[object Number]
console.log(Object.prototype.toString.call([])); //[object Array]
console.log(Object.prototype.toString.call({})); //[object Object]
console.log(Object.prototype.toString.call(/^1/)); //[object RegExp]
```

## 声明变量

js 声明变量得方式不同于 java，c 等强类型语言。

### 声明方式

使用`const`,`let`,`var`进行变量赋值。优先级`cosnt`>`let`>`var`。

基本类型储存在`栈`空间上，对象类型储存在`堆`中

当给`const`声明得变量赋值基本类型时，一般把这个变量作为常量对待。当赋值为一个对象时，变量得值是一个`指针`，这个指针指向对象所处得`堆`位置，指针不能修改，可修改对象内部属性。

```js
const PI = "3.14";
const obj = {
  a: 0,
};
obj.a = 1;
console.log(obj); //{a: 1}
```

`let`在未声明前无法赋值，存在暂时性死区，会形成块级作用域。同时在浏览器环境中，`let`声明得变量不会挂载到全局。`let`和`const`均不允许重复声明。

```js
console.log(a); //index.html:48 Uncaught ReferenceError: Cannot access 'a' before initialization
let a = 0;
```

字面量使用`toString()`等方法得时候会转变为其对应包装对象,然后来执行对应方法。
对象转换基本类型会调用`valueOf()`，`toString()`。这两个方法可重写。

### 作用域

在 js 中作用域分为 全局作用域，函数作用域，块级作用域。

`let`可解决以下经典问题。

```js
//let
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
} //0 1 2 3 4 5 6 7 8 9

//闭包
for (var i = 0; i < 10; i++) {
  ((i) => {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  })(i);
} //0 1 2 3 4 5 6 7 8 9
```

## number

JavaScript 的数字类型是浮点类型。并且浮点类型基于 IEEE 754 标准实现（64 位）。符号位占 1 位，指数位占 11 位，有效数字位占 52 位。取值范围`[-2^53-1, 2^53-1]`

`console.log(0.1 + 0.2 === 0.3);//false`,原因是再进行`+`法时会吧两者转换为二进制来进行运算，截断后得二进制再转换为十进制小数位有余导致判断为`false`。可通过指定小数后有效位数解决。

NaN 属性用于指示某个值不是数字。并且 NaN 不等于自身。可使用`isNaN()`来判断一个值是否是`NaN`。

ES2020 引入了一种新的数据类型`bigInt`,解决精度和大数据运算。

## 函数

### 箭头函数

es6 新增箭头函数。`=>`。简化函数写法。

使用注意：

- 箭头函数没有自己得 this，this 指向外层代码块得 this，同时没有 arguments。
- 不能使用 new 名命，无法作为构造函数使用。
- 不能使用 yield。

### 闭包

### 函数科里化

## 递归

### 尾递归

### 递归优化

## 拷贝

### 浅拷贝

### 深拷贝

## 原型链

## 继承

## this

### 什么是 this

### 改变 this

### 手写 bind 等

## 异步

### promise

## 模块化
