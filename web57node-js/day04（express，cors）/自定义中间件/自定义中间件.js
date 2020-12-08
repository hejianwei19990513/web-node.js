const express = require('express')
const bodyParse = require("./对自定义的中间件进行模块化")
const app = express()


// 定义中间件
app.use(bodyParse.bodyParse)

app.post("/", function (req, res) {
    res.send(req.body)
})
app.listen(80, () => {
    console.log("http://127.0.0.1");
})