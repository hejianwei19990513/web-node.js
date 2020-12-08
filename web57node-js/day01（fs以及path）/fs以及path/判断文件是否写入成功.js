const fs = require('fs')
    fs.writeFile("./file/3.text","小鞠女神写入成功","utf8",function(err){
        if(err) {
            return console.log("文件写入失败"+err.message);
        }else {
            return console.log("文件写入成功");
        }
    })