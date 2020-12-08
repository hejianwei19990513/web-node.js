const express = require("express")

const app = express()

app.use(function (req, res, next) {
    console.log('调用了第1个全局中间件')
    next()
})
app.use(function (req, res, next) {
    console.log("调用了第2个全局中间件")
    next()
})
app.get('/user', (req, res) => {
    // 请求这个路由，会依次触发上述两个全局中间件
    res.send('Home page.')
})
app.listen(80,()=>{
    console.log("http://127.0.0.1");
})