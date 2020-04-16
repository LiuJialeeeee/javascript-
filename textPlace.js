// GMT 时间 2005 年 5 月 5 日下午 5:55:55 
var allFives = new Date(2020, 1, 5, 1); //传入毫秒数
console.log(allFives);
var b = allFives.toUTCString();
console.log(b);