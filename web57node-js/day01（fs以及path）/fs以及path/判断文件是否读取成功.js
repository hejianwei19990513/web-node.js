const fs = require('fs')
    fs.readFile("./file/1.text","utf8",function(err,dataStr){
        if(dataStr) {
            // return console.log("文件读取成功"+dataStr);
            console.log(typeof dataStr);
        }else {
            return console.log("文件读取失败"+err.message);
        }
    })