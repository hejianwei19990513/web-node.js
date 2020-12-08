// 1.fs.readFile()的语法格式
// 使用fs.readFile()方法，可以读取指定文件中的内容，语法格式如下:
// 1 fs.readFile(path[, options], callback)
// 参数解读:
// 参数1:必选参数，字符串，表示文件的路径。
// 参数2:可选参数，表示以什么编码格式来读取文件。
// 参数3:必选参数，文件读取完成后，通过回调函数拿到读取的结果。
const fs = require('fs')
    // 第一个参数代表路径，
    // 第二个参数代表采用的编码格式，一般用utf8，
    // 第三个参数代表回调函数,输出结果在里面
    fs.readFile("./file/1.text","utf8",function(err,dataStr){
        // 如果成功err就显示null，如果失败则返回一个错误【对象】
        console.log(err);

        console.log("-----------");

        // 如果成功则打印成功的结果，如果失败则打印undefined
        console.log(dataStr);
    })