const express = require("express")

const app = express()

const cors = require("cors")
app.use(cors())
// 中间件应该在所以路由的上面（错误中间件除外）
app.use(express.urlencoded({extended:false}))

const router = require("./路由模块")

app.use("/api",router)

router.get("/get",(req,res)=>{
    var query = req.query
    res.send({
        "status":0,
        "message":"get请求发送成功",
        "data":query
    })
})
router.post("/post",(req,res)=>{
    var body = req.body
    res.send({
        "status":0,
        "message":"post请求发送成功",
        "data":body
    })
})
app.listen(80,()=>{
    console.log("http://127.0.0.1");
})