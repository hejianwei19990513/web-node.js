const path = require("path")
const fs = require("fs")
const a = path.join("/a","/b/c","../","/d","/e")
console.log(a);//输出为/a/b/d/e     (因为../会抵消它的前面那个/c路径)

const b = path.join(__dirname,'./file/1.txt')
console.log(b);//输出为  当前路径\file\1.txt
console.log("----------------------------------------");
//                              ||
// C:\Users\Administrator\Desktop\web57上课笔记\web57node-js\day01\fs以及path\path\file\1.txt


// 例子
fs.readFile(path.join(__dirname,"./file/1.txt"),"utf8",function(err,dataStr){
    if(err) {
        return console.log("文件读取失败"+err.message);
    }
    console.log("文件读取成功   "+dataStr);
})
