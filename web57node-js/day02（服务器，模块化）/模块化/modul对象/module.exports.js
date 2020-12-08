// 外界用require()方法导入自定义模块时，得到的就是module.exports所指向的对象。
const m = require("./测试文件/1")
console.log(m);//输出为空对象