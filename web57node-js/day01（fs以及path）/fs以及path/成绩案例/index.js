const fs = require("fs")
fs.readFile("./file/成绩.txt","utf8",function(err,dataStr){
    if(err) {
        console.log("文件读取失败"+err.message);
    }
    const str = dataStr
    // const str1 = str.replace(/=/g,":").split(" ").join("\n")或者下面这种
    const str1 = str.replace(/=/g,":").replace(/\s/g,"\n")
    fs.writeFile("./file/成绩ok.txt",str1,function(err){
        if(!err){
            console.log("文件写入成功");
        }else {
            console.log("文件写入失败"+err.message);
        }
    })
})