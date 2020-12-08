const express = require('express')

const app = express()

// 不使用app.use()调用的中间件为局部中间件
const mw1 = function(req,res,next) {
    console.log("局部调用的中间件1");
    next()
}
const mw2 = function(req,res,next) {
    console.log("局部调用的中间件2");
    next()
}
// app.get("/user",mw1,mw2,(req,res)=>{
//     res.send("小鞠女神")
// })//两种都行
app.get("/",[mw1,mw2],(req,res)=>{
    res.send("小鞠女神")
})
app.listen(80,()=>{
    console.log("http://127.0.0.1");
})