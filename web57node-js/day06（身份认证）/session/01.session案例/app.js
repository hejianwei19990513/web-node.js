const express = require('express')

const app =express()

const session = require("express-session")

app.use(session({
  secret:'hejianwei',
  resave:false,
  saveUninitialized:true,
}))

app.use(express.static("./pages"))
app.use(express.urlencoded({extended:false}))

app.post('/api/login',function(req,res){
  if(req.body.username !=="admin" || req.body.password !== "000000") {
    return res.send({status:1,message:"登录失败"})
  }
  req.session.user = req.body
  req.session.login = true
  res.send({
    status:0,
    message:"登录成功"
  })
})

app.get("/api/username",function(req,res){
  if(!req.session.login){
    return res.send({status:1,message:"身份验证失败"})
  }
  res.send({
    status:0,
    message:"登录成功",
    username:req.session.user.username
  })
})

app.post('/api/logout',function(req,res){
  req.session.destroy()
  res.send({
    status:0,
    message:'退出登录成功'
  })
})
app.listen(80,()=>{
  console.log('http://127.0.0.1');
})