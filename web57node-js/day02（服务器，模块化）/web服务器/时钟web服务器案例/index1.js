const http = require("http")
const fs = require("fs")
const path = require("path")
const server = http.createServer()
server.on("request",(req,res)=>{
    let url = req.url
    let fpath = ''
    if(url == '/'){
        fpath = path.join(__dirname,"./clock/index.html")
    }else {
        fpath = path.join(__dirname,"./clock",url)
    }
    fs.readFile(fpath,"utf8",function(err,dataStr){
        if(err) return res.end("<h1>404 Not Found!</h1>")
        // 这里不能转为utf-8
        // res.setHeader("Content-Type","text/html;charset=utf-8")
        res.end(dataStr)
    })
})
server.listen(8080,()=>{
    console.log('http server running at http://127.0.0.1:8080')
})