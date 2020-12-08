const fs = require("fs")
const path = require("path")

const reg = /<script>[\s\S]*<\/script>/
const reg1 = /<\/script>/

const reg2= /<style>[\s\S]*<\/style>/
const reg3 = /<\/style>/

fs.readFile("./index.html","utf8",function(err,dataStr){
    if(err) {
        console.log("获取文件失败"+err.message);
    }else {
        const script = dataStr
        const script1= reg.exec(script)[0].slice(8,reg1.exec(reg.exec(script)[0]).index)
        // 将得到的script1写入到block目录的js中
        fs.writeFile(path.join(__dirname,"./block/index.js"),script1,function(err){
            if(err) {
                console.log("写入文件失败"+err.message);
            }
            console.log("文件写入成功");
        })

        const style = dataStr
        const style1= reg2.exec(style)[0].slice(7,reg3.exec(reg2.exec(style)[0]).index)
        console.log(style1);
        // 将得到的style1写入到block目录的css中
        fs.writeFile(path.join(__dirname,"./block/index.css"),style1,function(err){
            if(err) {
                console.log("写入文件失败"+err.message);
            }
            console.log("文件写入成功");
        })

        const html = dataStr
        const html1 = html.replace(reg.exec(script)[0],"<script src='index.js'></script>").replace(reg2.exec(style)[0],"<link rel='stylesheet' href='index.css'>")
        // 将得到的html1写入到block目录的html中
        fs.writeFile(path.join(__dirname,"./block/index.html"),html1,function(err){
            if(err) {
                console.log("写入文件失败"+err.message);
            }
            console.log("文件写入成功");
        })
    }
})

