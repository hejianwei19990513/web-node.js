const express = require('express')

const app = express()

// 不使用app.use()调用的中间件为局部中间件
const mw1 = function(req,res,next) {
    console.log("局部调用的中间件");
    next()
}

app.get("/",mw1,(req,res)=>{
    res.send("小鞠女神")
})
app.post("/",(req,res)=>{
    res.send("小鞠女神")
})
app.listen(80,()=>{
    console.log("http://127.0.0.1");
})