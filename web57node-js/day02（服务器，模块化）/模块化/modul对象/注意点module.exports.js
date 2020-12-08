const m = require("./测试文件/3")
console.log(m);// 输出为 { name: 'jjy', age: 26 } （因为3.js下面module。exports指向了一个全新的对象，把之前向exports空对象里面添加的属性覆盖了） 

// 【当这个全新的对象最先执行时，也就是放在最上面时，那就不会覆盖】
const m1 = require("./测试文件/4")
console.log(m1);// 输出为 { name: 'jjy', age: 26, username: '小鞠女神', say: [Function (anonymous)] }