// 步骤1导入http模块
const http = require("http")

// 步骤2创建web服务器实例
const server = http.createServer()

// 步骤3为服务器实例绑定request事件
server.on("request",(req,res)=>{
    console.log("someone visit our web server");
    res.end("ok")
})

// 步骤4
server.listen(8080,()=>{
    // 【注意】，端口号是【一个冒号】
    console.log('http server running at http://127.0.0.1:8080')
})