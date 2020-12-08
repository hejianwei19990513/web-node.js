const http = require("http")
const server = http.createServer()
server.on("request",(req,res)=>{
    const url = req.url
    const method = req.method
    const str = `您请求的地址是${url},和您请求的方法是${method}`
    // 当发送的内容包括中文时，为了防止中文显示乱码问题，需要设置响应头 Content-Type的值为 "text/html; charset = utf-8"
    res.setHeader("Content-Type","text/html;charset=utf-8")
    // 把包含中文的内容，响应给客户端
    res.end(str)
})
server.listen(8080,()=>{
    console.log('http server running at http://127.0.0.1:8080')
})