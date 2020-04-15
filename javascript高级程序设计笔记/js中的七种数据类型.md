# js中的七种数据类型

## 	1. 概述

​	ECMAscript 中有五种基本数据类型

​	(布尔,字符串,数字,Null,undefined),

​	一种复杂数据类型object,

​	和ES6中新添加的Symbol(一种新的原始数据类型)

## 	2. js中检查数据类型的方式(3.4.1 typeof操作符 )

​	鉴于 ECMAScript 是松散类型的，

因此需要有一种手段来检测给定变量的数据类型

—用 typeof 语句检查变量的数据类型,

​	使用方式:

```js
var message = 'giaogiaogiao';
console.log(typeof message);
console.log(typeof (message));
console.log(typeof 123);
console.log(typeof 'abc');
```

这里可以看出:

typeof 作为一个操作符,

其操作数

可以是变量,也可以是数值字面量.

注意:

这里的typeof作为一个操作符其后的操作数可以加括号,但该行为不是必须的.

## 3. 5种简单数据类型(3.4.2 - 3.4.6)

### 1. undefined类型

undefined类型

只有一个值,

即特殊的undefined.

在使用声明变量

但未对其

加以初始化时,

这个变量的值就是undefined,如:

```js
var a ;
console.log(a);
```

引入undefined类型的原因是

**为了正式区分空对象指针与未经初始化的变量。** 

对于尚未定义的变量

会返回错误

而对其也只能执行一项操作

即:typeof a;

而其返回的是undefined值

对未初始化和未声明的变量执行 typeof 操作符都返回了 undefined 值

当所有变量都显式地初始化以后

我们可以通过undefined来确定变量是否赋值

### 2. Null类型 

null类型同样是只有一个值得数据类型,这个值是null

null表示了一个共对象指针,

而这也正是使用typeof操作符检测null值时会返回"Object"的原因

如下:

```js
var car = null; alert(typeof car);     // "object" 
```

其相当于是为对象提供了一个0

也就是说当变量在将来会用于保存对象时,最后给其赋值为Null

注意:	undefined 值是派生自 null 值的，因此 ECMA-262规定对它们的相等性测试要返回 true：

```js
alert(null == undefined);    //true 

```

二者区别: 无论在什么情况下 都没有必要把一个变量的值显式地设置为 undefined,而null则是当一个变量会在将来存储对象时, 在赋值时最好给该变量一个null的值.

### 3. Boolean类型 

该类型只有两个字面值：true 和 false

且区分大小写

所有数据类型都可以通过Boolean()函数的调用来转换为布尔值

| 数据类型  |  转换为true的值  | 转换为false的值 |
| :-------: | :--------------: | :-------------: |
|  Boolean  |       true       |      false      |
|  string   |    非空字符串    |  ''(空字符串)   |
|  number   | 除零外的所有数字 |        0        |
|  Object   |     所有对象     |      Null       |
| undefined |  not applicable  |    undefined    |
|   Null    |  not applicable  |      Null       |

字符串在流程控制语句中会被自动转换成对应的 Boolean 值

如:

```js
var a = 'hello';
if (a) {
    console.log("hello,let's giao");

}
```

字符串a就会被转换为true

### 4. Number类型

1. 数制

   * 八进制

     * 形式:

       ```js
       var a = 012; //十进制的10
       ```

     * 要求: 以零开头
     * 注意: 严格模式下八进制字面量是无效的

   * 十六进制

     * 形式

       ```js
       var a = 0xa;//十进制的10
       ```

     * 要求:以0x开头

     * 注意:当字面值的数值超出范围时,前导零将被忽略, 后面的数值被当做十进制数值解析

   * 十进制

     * 形式
     * 要求:直接写数字就好了
     * 注意:鉴于 JavaScript中保存数值的方式，可以保存正零（+0）和负零（-0）。正零和负零被认为相等

2. 类型

   * 整型

     * 就是整数

   * 浮点型

     * 就是小数(double float)小数点在内存中会移动所以叫浮点型

     * 所谓浮点数值，就是该数值中必须包含一个小数点，并且小数点后面必须至少有一位数字。

   * 总结

     * ECMAScript会不失时机地将浮点数值 转换为整数值

     * 因为浮点型数据类型更加占据更多的内存

     * 关于浮点数值计算会产生舍入误差的问题，有一点需要明确：这是使用基于 IEEE754 数值的浮点计算的通病，ECMAScript 并非独此一家；其他使用相同数值格 式的语言也存在这个问题

     * 浮点数会有误差, 所以永远不要**测某个特定的浮点数值**

     * 对于那些极大或极小的数值，可以用 e表示法（即科学计数法）表示的浮点数值表示。

       ```js
       var floatNum = 3.125e7;  // 等于 31250000 
       ```

3. 数值范围

   * ECMAScript能够表示的小数值保 存在 Number.MIN_VALUE 中——在大多数浏览器中，这个值是 5e-324

   * ；能够表示的大数值保存在 Number.MAX_VALUE 中——在大多数浏览器中，这个值是 1.7976931348623157e+308

   * 如果某次计算的 结果得到了一个超出 JavaScript数值范围的值.

     * 如果这个数值是负数，则会被转换成-Infinity（负无穷），

     * 如果这个数值是正数，则会被转 换成 Infinity（正无穷）。 

     *  isFinite()判断变量是否是无穷大

     * ```js
       var a = Number.MAX_SAFE_INTEGER;
       console.log(isFinite(a));
       ```

     * 当返回是Infinity时该数值无法参与下一次运算

4. NaN

   * 是什么:

     NaN，即非数值（Not a Number）是一个特殊的数值，这个数值用于表示一个本来要返回数值的操作数 未返回数值的情况（这样就不会抛出错误了）

   * 为什么:

     ，在其他编程语言中，任何数值除以 0都会导致错误， 从而停止代码执行。但在ECMAScript中，任何数值除以 0会返回 NaN①，因此不会影响其他代码的执行。 

   * 怎么用:

     * 判断数值方式:isNaN()

5. 数值转换

   * 三种数值转换

     * Number()

       * 如果是 Boolean 值，true 和 false 将分别被转换为 1和 0。

       *  如果是数字值，只是简单的传入和返回。

       * 如果是 null 值，返回 0。

       * 如果是 undefined，返回 NaN。

       * 如果是字符串，遵循下列规则：

         * 如果字符串中只包含数字（包括前面带正号或负号的情况），则将其转换为十进制数值，即"1" 会变成 1，"123"会变成 123，而"011"会变成 11（注意：前导的零被忽略了）；

         * 如果字符串中包含有效的浮点格式，如"1.1"，则将其转换为对应的浮点数值（同样，也会忽 略前导零）；

         * 如果字符串中包含有效的十六进制格式，例如"0xf"，则将其转换为相同大小的十进制整 数值；

         * 如果字符串是空的（不包含任何字符），则将其转换为 0；

         * 如果字符串中包含除上述格式之外的字符，则将其转换为 NaN。 

       * 如果是对象，则调用对象的 valueOf()方法，然后依照前面的规则转换返回的值。如果转换 的结果是 NaN，则调用对象的 toString()方法，然后再次依照前面的规则转换返回的字符 串值。 

     * parseInt()

       * 由于 Number()函数在转换字符串时比较复杂而且不够合理，因此在处理整数的时候更常用的是 parseInt()函数

       * 。它会忽略字符串前面的空格，直至找到第一个非空格字符。如果第一个字符不是数字字符或者负号，parseInt() 就会返回 NaN；也就是说，用 parseInt()转换空字符串会返回 NaN（Number()对空字符返回 0）。如果第一个字符是数字字符，parseInt()会继续解析第二个字符，直到解析完所有后续字符或者遇到了 一个非数字字符。例如，"1234blue"会被转换为 1234，因为"blue"会被完全忽略

         ```js
         var num1 = parseInt("1234blue");    // 1234 
         var num2 = parseInt("");            // NaN 
         var num3 = parseInt("0xA");         // 10（十六进制数） 
         var num4 = parseInt(22.5);          // 22 
         var num5 = parseInt("070");         // 56（八进制数）
         var num6 = parseInt("70");         // 70（十进制数） 
         var num7 = parseInt("0xf");         // 15（十六进制数） 
         ```

         

       * 指定进制

         ```js
         var num = parseInt("0xAF", 16);  //175实际上，如果指定了 16作为第二个参数，字符串可以不带前面的"0x"，如下所示： 
          
         var num1 = parseInt("AF", 16);  //175 var num2 = parseInt("AF");   //NaN 
         //第二个参数指定进制
         ```

         

     * parseFloat()

       * 特性大同parseInt
       * 第二个小数点就是无效的了，它后面的字符串将被忽略
       * 它始终都会忽略前导的零

### 5. string类型

1. 表示方法

   * 字符串可以由双 引号（"）或单引号（'）表示

   * 代码演示

     ```js
     let a = "you can really dance";
     let a = 'wow, you can really dance';//左右引号必须匹配(是一样的)
     ```

2. 字符字面量

   * 转义字符

   * ```js
     \n 换行 
     \t 制表 
     \b 空格 
     \r 回车 
     \f 进纸 
     \\ 斜杠 
     \' 单引号（'），在用单引号表示的字符串中使用。例如：'He said, \'hey.\'' 
     \" 双引号（"），在用双引号表示的字符串中使用。例如："He said, \"hey.\"" \xnn 以十六进制代码nn表示的一个字符（其中n为0～F）。例如，\x41表示"A" \unnnn 以十六进制代码nnnn表示的一个Unicode字符（其中n为0～F）。例如，\u03a3表示希腊字符Σ 
     ```

   * \u Unicode编码字符

   * 字符串长度测量: 变量名.length

   * ```js
     var text = "This is the letter sigma: \uaaaa.";
     console.log(text);
     console.log(text.length);
     ```

   * 

2. 字符串特点

   * ECMAScript中的字符串是不可变的，也就是说，字符串一旦创建，它们的值就不能改变。要改变 某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量

   * 代码示范:

     ```js
     var lang = "Java";
     lang = lang + "Script"; 
     /*以上示例中的变量lang 开始时包含字符串"Java"。而第二行代码把lang 的值重新定义为"Java" 与"Script"的组合，即"JavaScript"。实现这个操作的过程如下：首先创建一个能容纳 10个字符的 新字符串，然后在这个字符串中填充"Java"和"Script"，后一步是销毁原来的字符串"Java"和字 符串"Script"，因为这两个字符串已经没用了*/
     ```

3. 转换为字符串

   * toString()方法

     * 适用情况: 知道转换的值不是Null和Undefined,可以直接使用toString()方法

     * 代码示范:

   * ```js
     var num = 10; alert(num.toString());         // "10" 
     alert(num.toString(2));        // "1010" 
     alert(num.toString(8));        // "12" 
     alert(num.toString(10));       // "10" 
     alert(num.toString(16));       // "a" 
      /*参数代表转换的字符串的进制格式*/
     ```

   * string()方法

     * 适用情况: 不知道转换的值是不是Null或undefined类型

     * 转换规则:

       * 如果值有 toString()方法，则调用该方法（没有参数）并返回相应的结果；
       *  如果值是 null，则返回"null"；
       * 如果值是 undefined，则返回"undefined"。 

     * 代码示例:

     * ```js
       var value1 = 10;
       var value2 = true;
       var value3 = null;
       var value4; 
       alert(String(value1));     // "10" 
       alert(String(value2));     // "true" 
       alert(String(value3));     // "null" 
       alert(String(value4));     // "undefined" 
       /*这里先后转换了 4 个值：数值、布尔值、null 和 undefined。数值和布尔值的转换结果与调用 toString()方法得到的结果相同。因为 null 和 undefined 没有 toString()方法，所以 String() 函数就返回了这两个值的字面*/
       ```

     ### 

### 6. Object类型

1. 是什么:ECMAScript中的对象其实就是一组数据和功能的集合

2. 创建方式: 

   ```js
   var o = new Object;
   ```

3. Object 类型所具有的任何属性和方法也同样存在于更具体的对象中。 
4. Object 的每个实例都具有下列属性和方法。
   * constructor: 保存着用于创建当前对象的函数.对于前面的例子而言, 构造函数(constructor) 就是Object()
   * hasOwnProperty(propertyName)：用于检查给定的属性在当前对象实例中（而不是在实例 的原型中）是否存在。其中，作为参数的属性名（propertyName）必须以字符串形式指定（例 如：o.hasOwnProperty("name")）。
   * isPrototypeOf(object)：用于检查传入的对象是否是传入对象的原型（第 5 章将讨论原 型） 
   * propertyIsEnumerable(propertyName)：用于检查给定的属性是否能够使用 for-in 语句 （本章后面将会讨论）来枚举。与 hasOwnProperty()方法一样，作为参数的属性名必须以字符 串形式指定
   * toString()：返回对象的字符串表示。 
   * valueOf()：返回对象的字符串、数值或布尔值表示。通常与 toString()方法的返回值 相同。 
   *  toLocaleString()：返回对象的字符串表示，该字符串与执行环境的地区对应。 

5. 由于在 ECMAScript中 Object 是所有对象的基础，因此所有对象都具有这些基本的属性和方法。 //在 *js高级程序设计* 的第六章中详细介绍

### 7. ES6 Symbol(引用于菜鸟教程)

概述:ES6 引入了一种新的原始数据类型 Symbol , 表示独一无二的值, 最大的用法是用来定义对象的唯一属性名.

1. 基本用法:

   ```js
   let sy = Symbol("KK");
   console.log(sy);   // Symbol(KK)
   typeof(sy);        // "symbol"
    
   // 相同参数 Symbol() 返回的值不相等
   let sy1 = Symbol("kk"); 
   sy === sy1;       // false
   ```

   描述:Symbol 函数栈不能用 new 命令，因为 Symbol 是原始数据类型，不是对象。可以接受一个字符串作为参数，为新创建的 Symbol 提供描述，用来显示在控制台或者作为字符串的时候使用，便于区分。

2. 使用场景:作为属性名

   * 由于每个Symbol的值都是不相等的,所以Symbol作为对象的属性名,可以保证属性不重名.

   * 代码:

     ```js
     let sy = Symbol("key1");
      
     // 写法1
     let syObject = {};
     syObject[sy] = "kk";
     console.log(syObject);    // {Symbol(key1): "kk"}
      
     // 写法2
     let syObject = {
       [sy]: "kk"
     };
     console.log(syObject);    // {Symbol(key1): "kk"}
      
     // 写法3
     let syObject = {};
     Object.defineProperty(syObject, sy, {value: "kk"});
     console.log(syObject);   // {Symbol(key1): "kk"}
     /*Symbol 作为对象属性名时不能用.运算符，要用方括号。因为.运算符后面是字符串，所以取到的是字符串 sy 属性，而不是 Symbol 值 sy 属性。*/
     ```

     

3. 注意点

   Symbol 值作为属性名时，该属性是公有属性不是私有属性，可以在类的外部访问。但是不会出现在 for...in 、 for...of 的循环中，也不会被 Object.keys()  Object.getOwnPropertyNames() 返回。

   如果要读取到一个对象的 Symbol 属性，可以通过 Object.getOwnPropertySymbols() 和 Reflect.ownKeys() 取到。

   ```js
   let syObject = {};
   let sy = Symbol('123');
   console.log(sy);
   syObject[sy] = 'a';
   
   for (let i in syObject) {
       console.log(i);
   } // 无输出
   console.log('......................');
   
   Object.keys(syObject); // []
   console.log(Object.getOwnPropertySymbols(syObject));; // [Symbol(key1)]
   console.log(Reflect.ownKeys(syObject));; // [Symbol(key1)]
   ```

   

4. 定义常量

   * 由于每一个 Symbol 的值都是不相等的，所以 Symbol 作为对象的属性名，可以保证属性不重名

     

5. ### Symbol.for()

   * Symbol.for() 类似单例模式，首先会在全局搜索被登记的 Symbol 中是否有该字符串参数作为名称的 Symbol 值，如果有即返回该 Symbol 值，若没有则新建并返回一个以该字符串参数为名称的 Symbol 值，并登记在全局环境中供搜索。

   * 代码:

     ```js
     let yellow = Symbol("Yellow");
     let yellow1 = Symbol.for("Yellow");
     yellow === yellow1;      // false
      
     let yellow2 = Symbol.for("Yellow");
     yellow1 === yellow2;     // true
     ```

     

6. ### Symbol.keyFor()

   * Symbol.keyFor() 返回一个已登记的 Symbol 类型值的 key ，用来检测该字符串参数作为名称的 Symbol 值是否已被登记。

   * 代码:

     ```js
     let yellow1 = Symbol.for("Yellow");
     Symbol.keyFor(yellow1);    // "Yellow"
     ```

     

## 4. 结语

js中共有七种数据类型,其中有一种复杂数据类型Object, 六种基本数据类型.

六种基本数据类型中有



在ES6 中新添加的Symbol数据类型,

该数据类型特点是独一无二.



还有两种数据类型代表了空的特性

Null

Undefined



还有三种数据类型

布尔,数字,字符串作为主要数据类型,进行数据操作,其中有很多方法还要在后续进行学习





















