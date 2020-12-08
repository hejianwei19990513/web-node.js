const fs = require('fs')
    // 【注意】这里不是./file/1.text,因为这里是绝对路径
    fs.readFile(__dirname + "/file/1.text","utf8",function(err,dataStr){
        if(err) {
            return console.log("文件读取失败"+err.message);
        }else {
            return console.log("文件读取成功"+dataStr);
        }
    })