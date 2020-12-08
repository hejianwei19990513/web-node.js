const express = require('express')

const app = express()

app.use(express.urlencoded({extended:false}))

app.get("/book",function(req,res){
    console.log(req.body);
    res.send("小鞠女神")
})
app.listen(80,()=>{
    console.log("http://127.0.0.1");
})