# 变量

js 声明变量得方式不同于 java，c 等强类型语言。

## 声明变量

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
console.log(a); //Uncaught ReferenceError: Cannot access 'a' before initialization
let a = 0;
```

字面量使用`toString()`等方法得时候会转变为其对应包装对象,然后来执行对应方法。
对象转换基本类型会调用`valueOf()`，`toString()`。这两个方法可重写。

## 作用域

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

## 浅拷贝

对于`基本类型`，赋值操作会重新开辟空间，并且进行值得复制。

```js
let a = 10;
let b = a;
a = 1;
console.log(a); //1
console.log(b); //10
```

对于`引用类型`,变量储存得是对象的`指针`，因此赋值操作传递的是`指针`地址，修改一个变量，影响所有指向这个对象的变量。

```js
const obj = {
  a: 1,
};
const b = obj;
console.log(b === obj); //true，不是值相等，是地址相等
b.a = 0;
console.log(obj.a); //0
```

浅拷贝可用方法`Object.assign();`,展开运算符`...`。数组的`Array.from()`。

### Object.assign()

```js
const obj = {
  a: 0,
};
const b = Object.assign({}, obj);
console.log(obj === b); //fasle
```

### 展开运算符

```js
const obj = {
  a: 0,
};
const c = { ...obj };
console.log(obj === c); //fasle
```

### Array.from()

```js
let a = [1, 0, 1, 2];
let b = Array.from(a);
b[0] = 100;
console.log(b); //[100, 0, 1, 2]
console.log(a === b); //false
```

不过浅拷贝只能解决一层对象复制问题。在值是`引用类型`时无法深层次拷贝，依旧存在引用问题。不能解决循环引用的对象。

```js
const obj = {
  a: 0,
  b: {
    c: 0,
  },
};
const b = Object.assign({}, obj);
obj.b.c = 100;
console.log(b.b.c); //100
```

## 深拷贝

使用`JSON`来实现深拷贝。

```js
const obj = {
  a: 0,
  b: {
    c: 1,
  },
};
const obj1 = JSON.parse(JSON.stringify(obj));
obj.b.c = 1000;
console.log(obj1.b.c); //1
```

使用`JSON.stringify()`把对象转化为字符串,再使用`JSON.parse()`把字符串转换为对象，会重新开辟空间并赋值，完成深拷贝。不过该方法会有以下局限性：

- 忽略`undefined`
- 忽略`symbol`
- 函数无法拷贝
- 不能解决循环引用的对象

```js
const obj = {
  a: undefined,
  b: () => {
    console.log(0);
  },
  c: Symbol("0"),
  d: 0,
};
const obj1 = JSON.parse(JSON.stringify(obj));
console.log(obj1); //{d: 0}
```

为此可以自定义一个简易深拷贝函数，如下：

```js
const deepCopy = (v, obj = {}) => {
  for (let [key, value] of Object.entries(v)) {
    if (Object.prototype.toString.call(value) === "[object Object]") {
      obj[key] = {};
      deepCopy(value, obj[key]);
    } else {
      obj[key] = value;
    }
  }
  return obj;
};
const obj = {
  a: undefined,
  b: () => {
    console.log(0);
  },
  c: Symbol("0"),
  d: 0,
  e: {
    a: 0,
  },
};
const obj1 = deepCopy(obj);
obj.e.a = 100;
obj1.b(); //0
console.log(obj.e.a); // 0
```
