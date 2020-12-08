const express = require("express")
const parse = require('body-parser')

const app = express()

// Express 内置的express.urlencoded 中间件，就是基于body-parser这个第三方中间件进一步封装出来的。
app.use(parse.urlencoded({extended:false}))

app.get("/book",function(req,res){
    console.log(req.body);
    res.send("小鞠女神")
})
app.listen(80,()=>{
    console.log("http://127.0.0.1");
})