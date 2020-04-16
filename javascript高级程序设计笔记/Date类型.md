
## 4. Date类型

### 4.1 简介

js中的date类型和Array类型一样,作为js中的内置类型,提供给我们一些和时间有关的好用的方法

Date类型使用自UTC(国际协调时间)1970年1月1日零时开始经过的毫秒数来保存日期.在使用这种数据存储格式的条件下,Date类型保存的日期能够精确到1970/01/01之前或之后285616年(受位数的影响,一开始是16位,怕保存的日期不够用是不)

Date 是一个构造函数, 在使用时需要实例化之后才能通过实例来调用构造函数中的属性和方法

### 4.2 获取时间

#### 1. 获取绝对时间

因为Date类型使用的是从1970年1月1日零时开始经过的毫秒数来保存日期的, 而时间的毫秒数也是在不断的变化, 所以获取的当前时间的毫秒数是独一无二的, 我们把这个独一无二的毫秒成为时间戳

由于Date类型是Object类型的子类, 所以也继承了toLocaleString()、toString()和 valueOf()方法.

1. toLocalString() 方法 和 toString() 方法

   前者返回浏览器设置的地区当地的日期和格式,后者返回带有时区信息的日期和格式

   ```js
   // 实例化Date对象
   var now = new Date();
   // 1. 用于获取对象的原始值
   console.log(now.toLocaleString());//2020-4-16 11:26:48
   console.log(now.toString());//Thu Apr 16 2020 11:26:48 GMT+0800 (GMT+08:00)
   ```

   因为不同的浏览器会返回不同的格式, 所以一在调试代码的时候使用

2.  **valueOf()**方法

   value 方法会返回当前时间的毫秒数.我称之为相对时间

   ```js
   // 实例化Date对象
   var now = new Date();
   console.log(now.valueOf());//1587008095753
   ```

   这样的一串数字就是时间戳了通过valueOf() 这个继承过来的方法, 我们可以获取到当前的时间,通过setIntervalBOM 方法,我们可以在一段时间不停的获取时间戳

   ```js
   var now = new Date();//创建对象
   setInterval(function() {
       console.log(now.valueOf());
   }, 1000)//每秒打印一个时间戳, 可以通过相除取余来获得小时,天,秒等
   ```

3. Data.now()(ES6)方法

   该方法和valueOf一样, 返回调用时的毫秒数

   ```js
   var now = new Date();
   console.log(Date.now());//返回调用时的毫秒数
   ```

   

#### 2. 获取电脑上当前时间

此类方法都是以 get 开头, 

| 方法名              | 说明                              | 形式                       |
| ------------------- | --------------------------------- | -------------------------- |
| getFullYear()       |                                   | 新对象.getFullYear()       |
| getMonth()          | 返回的数字是从0开始的             | 新对象.getMonth()          |
| getDate()           | 获取当前日期                      | 新对象.getDate()           |
| getHours()          |                                   | 新对象.getHours()          |
| getMinutes()        |                                   | 新对象.getMinutes()        |
| getSeconds()        |                                   | 新对象.getSeconds()        |
| getDay()            | 返回的星期是从0开始的             | 新对象.getDay()            |
| getTimezoneOffset() | 返回本地时间与GMT时间相差的毫秒数 | 新对象.getTimezoneOffset() |



### 4.3 传入固定的某一天的时间, 获取那个时间点的时间

1. Date.UTC()方法

   返回表示日期的毫秒数。Date.UTC()的参数分别是年份、**基于 0的月份**（一月是 0，二月是 1，以此类推）、月中的哪一天 （1 到 31）、**小时数（0 到 23）**、分钟、秒以及毫秒数。在这些参数中，只有前两个参数（年和月）是必 需的。如果没有提供月中的天数，则假设天数为 1；如果省略其他参数，则统统假设为 0。

   代码:

   ```js
   // GMT 时间 2000 年 1 月 1 日午夜零时 
   var y2k = new Date(Date.UTC(2000, 0));
   console.log(y2k);//2000-01-01T00:00:00.000Z
   
   // GMT 时间 2005 年 5 月 5 日下午 5:55:55 
   var allFives = Date.UTC(2005, 4, 5, 17, 55, 55);
   console.log(allFives);//1115315755000
   ```

   时间自然也是基于GMT

   

2. Date构造函数传参

   new Date() 方法的参数传入本地时间. 会返回一个字符串格式的 GMT 时间

   new Date() 方法也可以传入毫秒数, 同样返回一个字符串格式的 GMT 时间

    ```js
   var allFives = new Date();//调用时间2020/4/16/12:59
   console.log(allFives);//返回2020-04-16T04:59:22.246Z
   
   // GMT 时间 2005 年 5 月 5 日下午 5:55:55 
   var allFives = new Date(946656000000); //传入毫秒数
   console.log(allFives);//返回字符串:1999-12-31T16:00:00.000Z
   
   var allFives = new Date(2020, 1, 5, 1); //本地时间:2020/2/5/1:00
   console.log(allFives);//返回的 GMT 时间为: 2020-02-04T17:00:00.000Z
    ```

   

   



