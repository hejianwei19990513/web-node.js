const express = require('express')

const app = express()

app.use(express.json())//如果不加这个内置中间件，下面的req.body输出就是undifined

app.get("/",function(req,res){
    console.log(req.body);
    res.send("小鞠女神")
})
app.listen(80,()=>{
    console.log("http://127.0.0.1");
})