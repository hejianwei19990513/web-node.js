const express = require("express")
const app = express()

app.use(function(req,res,next){
    var time = new Date()
    res.time = time
    next()
})

app.get("/",(req,res)=>{
    res.send("小鞠女神"+res.time)
})
app.listen(80,()=>{
    console.log("http://127.0.0.1");
})