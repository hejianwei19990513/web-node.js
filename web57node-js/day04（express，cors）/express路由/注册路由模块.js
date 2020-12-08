const express = require("express")

const router = require("./创建路由模块")

const app = express()

app.use("/api",router)


app.listen(8080,()=>{
    console.log("http://127.0.0.1:8080");
})