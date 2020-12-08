const express = require("express")

const app = express()

/* // 定义一个最简单的中间件函数
const mw = function(req,res,next) {
    console.log("这是最简单的中间件函数")
    
    // 把流转关系转交给下一个中间件或者路由
    next()
}
// 使用全局生效的中间件函数
app.use(mw) */

// 使用简化的中间件函数
app.use(function(req,res,next) {
    console.log("这是最简单的中间件函数")
    
    // 把流转关系转交给下一个中间件或者路由
    next()
})

app.get('/',(req,res)=>{
    res.send("发送小鞠女神")
})

app.listen(80,()=>{
    console.log("http://127.0.0.1");
})